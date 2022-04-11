import { useState } from 'react';
import '../styles/Post.css';
import Comment from './Comment';

function Post({ post, user }) {
    const [comments, setComments] = useState(post.comments);

    function handleCommentFormSubmission(e) {
        e.preventDefault();
        const { content } = e.target.elements;

        postNewComment().then((data) => {
            setComments((prevComments) => [...prevComments, data.comment]);
            content.value = '';
        });

        async function postNewComment() {
            const res = await fetch(
                `http://localhost:3001/posts/${post._id}/comments`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        content: content.value,
                    }),
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization:
                            'Bearer ' + localStorage.getItem('token'),
                    },
                }
            );
            const data = await res.json();
            return data;
        }
    }

    return (
        <article className="post">
            <h2>{post.title}</h2>
            <p>
                {post.author.displayName} •{' '}
                <span className="display-name">@{post.author.username}</span>
            </p>
            <p>{post.timestamp}</p>
            <p>{post.content}</p>
            <section className="comments">
                <h3>Comments</h3>
                {comments.map((comment) => (
                    <Comment key={comment._id} comment={comment} />
                ))}
                {user !== null && (
                    <form
                        className="comment-form"
                        onSubmit={handleCommentFormSubmission}
                    >
                        <label htmlFor="content">Your New Comment:</label>
                        <textarea type="text" id="content" name="content" />
                        <button type="submit">Post Comment</button>
                    </form>
                )}
            </section>
        </article>
    );
}

export default Post;
