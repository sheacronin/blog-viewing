import { useEffect, useState } from 'react';
import Post from './Post';

function PostsList({ user }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchAllPosts().then((postsData) => setPosts(postsData));

        async function fetchAllPosts() {
            const response = await fetch(
                'https://blog-api-sc.herokuapp.com/posts'
            );
            const data = await response.json();
            return data;
        }
    }, []);

    return (
        <div>
            {user && <div className="greeting">Hello, {user.displayName}!</div>}
            {posts.map((post) => (
                <Post key={post._id} post={post} />
            ))}
        </div>
    );
}

export default PostsList;
