import { PhotosService, PostService, TodoService } from './02-open-close-b';
import { HttpClient } from './02-open-close-c';

(async () => {

    const https = new HttpClient();

    const todoService = new TodoService(https);
    const postService = new PostService(https);
    const photosService = new PhotosService(https);

    const todos = await todoService.getTodoItems();
    const posts = await postService.getPosts();
    const photos = await photosService.getPhotos();
    
    
    console.log({ todos, posts, photos });
    

})();