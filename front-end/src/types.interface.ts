export interface Post {
    title: string;
    body: string;
    id?: number;
    comments?: CommentType[];
    userid?: number;

}

export interface User {
    username: string;
    password: string;
}

export interface CommentType {
    id?: number
    userid: number;
    body: string;
}