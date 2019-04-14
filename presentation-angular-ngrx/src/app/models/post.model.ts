export class Post {
    id?: number;
    title: string;
    content: string;

    constructor(data?: any) {
        this.id = data.id ? data.id : null;
        this.title = data.title;
        this.content = data.content
    }
}
