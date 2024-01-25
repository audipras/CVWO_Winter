export interface Post {
    title: string;
    body: string;
    id?: number;
    comments?: CommentType[];

}

export interface User {
    username: string;
    password: string;
}

export interface CommentType {
    userid: number;
    body: string;
}