import * as AdmZip from "adm-zip";
import * as fs from "fs";
import * as kuroshiro from "kuroshiro";
import {open} from "sqlite";
import {Note} from "../classes/note";
import {Decks} from "../classes/decks";
import {model} from "../../model";

export class AddFuriganaCommand {
    private fieldIndex = 2;
    private fileName = './Japanese.apkg';

    constructor() {
        //this.extract();
        this.execute();
        //this.finish();
    }

    private initKuroshiro(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            kuroshiro.init((err) => {
                if (err) {
                    reject();
                } else {
                    resolve();
                }
            });
        });

    }

    private extract() {
        const zip = new AdmZip(this.fileName);

        const files = fs.readdirSync('./tmp');

        for (const file of files) {
            fs.unlinkSync('./tmp/' + file);
        }

        zip.extractAllTo('./tmp', true);
    }

    private async execute() {
        await this.initKuroshiro();
        const db = await open('./tmp/collection.anki2');
        const rows = await db.all("SELECT * FROM notes");

        const col = await db.get("SELECT * FROM col");
        const decks = new Decks(col.decks);

        for (let row of rows) {
            const card = await db.get("SELECT did FROM cards WHERE nid = ?", row.id);
            const note = new Note(row);
            note.addTag(decks.getDeckTag(card.did));
            const field = note.getField(this.fieldIndex);
            let conv = kuroshiro.convert(field, {
                mode: "furigana"
            });
            conv = conv.replace(new RegExp('<ruby>', 'g'), ' ').replace(new RegExp('<rp>[^<]*<\/rp>', 'g'), '');
            conv = conv.replace(new RegExp('<\/ruby>', 'g'), '');
            conv = conv.replace(new RegExp('<rt>([^<]*)<\/rt>', 'g'), '[$1]');
            note.setField(this.fieldIndex, conv.trim());

            row = note.exportObject();
            await db.run("UPDATE notes SET flds = ?, tags = ?, mid = ? WHERE guid = ?", row.flds, row.tags, 395660851, row.guid);

        }

        await db.run("UPDATE col SET models = ?", JSON.stringify(model));
    }

    private finish(): void {
        let zip2 = new AdmZip();

        const files = fs.readdirSync('./tmp');

        for (const file of files) {
            const input = fs.readFileSync('./tmp/' + file);
            zip2.addFile(file, input, '', 644);
        }
        zip2.writeZip("test.apkg");
    }
}