export class Note {
    private delimiter = '\u001f';
    private fields: string[];
    private tags: string[];

    constructor(private object: any) {
        this.fields = this.parseFields(object.flds);
        this.tags = this.parseFields(object.tags);


        for (let i = 0; i < this.tags.length; i++) {
            if (this.tags[i] === '') {
                this.tags.splice(i, 1);
            }
        }
    }

    private parseFields(fieldString: string): string[] {
        return fieldString.split(this.delimiter);
    }

    private stitchFields(fields: string[]): string {
        return fields.length > 0 ? fields.join(this.delimiter) : fields[0];
    }

    public setField(index: number, value: string): void {
        this.fields[index] = value;
    }

    public getField(index: number): string {
        return this.fields[index];
    }

    public addTag(value: string): void {
        if (this.tags.indexOf(value) === -1) {
            this.tags.push(value);
        }
    }

    public exportObject(): any {
        this.object.flds = this.stitchFields(this.fields);
        this.object.tags = this.stitchFields(this.tags);

        return this.object;
    }
}