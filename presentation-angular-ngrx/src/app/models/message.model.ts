export class Message {
    content: string;
    type: string;
    view: boolean;

    constructor(data?: any) {
        this.content = data.content;
        this.type = data.type;
        this.view = false;
    }
}
