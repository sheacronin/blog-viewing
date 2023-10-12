import { useEffect, useState } from 'react';
import { API_BASE_URL } from '../constants';
import Post from './Post';

function PostsList({ user }) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchAllPosts().then((postsData) => setPosts(postsData));

        async function fetchAllPosts() {
            const response = await fetch(`${API_BASE_URL}/posts`);
            const data = await response.json();
            return data;
        }
    }, []);

    return (
        <div>
            {user && <div className="greeting">Hello, {user.displayName}!</div>}
            {posts.map((post) => (
                <Post key={post._id} post={post} user={user} />
            ))}
        </div>
    );
}

export default PostsList;
