import { HttpClient } from "./02-open-close-c";


export class TodoService { 

    constructor( private htttp: HttpClient ){}
    
    async getTodoItems() {
        const { data } = await this.htttp.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    constructor( private htttp: HttpClient ){}
    
    async getPosts() {
        const { data } = await this.htttp.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    constructor( private htttp: HttpClient ){}
    
    async getPhotos() {
        const { data } = await this.htttp.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}