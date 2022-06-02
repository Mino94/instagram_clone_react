/*
select * from posts where id = ${id}
*/
export const getPostById = async (posts, id) => {
    try {
        const findPostById = await posts.fillter((post) => post.id === id);
        return findPostById;
    } catch (error) {
        throw error;
    }
};

/*
select * from posts where userid = ${id}
*/
export const getPostByUserId = async (posts, userId) => {
    try {
        const findPostByUserId = await posts.fillter((post) => post.userId === userId);
        return findPostByUserId;
    } catch (error) {
        throw error;
    }
};

/*
insert into posts
values (...)
*/
export const postPost = async (posts, post) => {
    try {
        const newPost = { ...post, id: posts.length };
        return [...posts, newPost];
    } catch (error) {
        throw error;
    }
};

/*
delete from posts
where id = ${id}
*/
export const deletePostById = async (posts, id) => {
    try {
        const delPosts = await posts.filter((post) => post.id !== id);
        return [...delPosts];
    } catch (error) {
        throw error;
    }
};

export const getPostByOther = async (posts, userId) => {
    try {
        const findPostsByUserId = await posts.filter((post) => post.userId !== userId);
        return findPostsByUserId;
    } catch (error) {
        throw error;
    }
};

export const putPost = async (posts, post, id) => {
    try {
        const findPostsIndex = await posts.findIndex((post) => post.id === id);
        const { content, img } = post;
        if (findPostsIndex === -1) {
            return new Error("index not found");
        }
        const newposts = [...posts];
        newposts.splice(findPostsIndex, 1, { ...posts[findPostsIndex], content, img });
        return newposts;
    } catch (error) {
        throw error;
    }
};
