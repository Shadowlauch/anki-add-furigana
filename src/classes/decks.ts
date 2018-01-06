export class Decks {
    private decks: any;

    constructor(private object: any) {
        this.decks = JSON.parse(object);
    }

    public getDeckTag(id: string): any {
        const deck = this.decks[id];
        let nameParts = deck.name.split(" :: ");

        if(nameParts.length > 1) {
            const number =nameParts[nameParts.length - 1].replace( /^\D+/g, '');
            return "L" + number;
        } else {
            return deck.name;
        }
    }
}