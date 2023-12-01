import { PostService } from './05-dependency-b';
import { LocalDataBaseService, useOtherLocalDataBase, useApiDataBase } from './05-dependency-c';


// Main
(async () => {

    // const provider = new LocalDataBaseService();
    // const provider = new useOtherLocalDataBase();
    const provider = new useApiDataBase();

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();