import Comment from './Comment';
import { useState } from 'react';

function CommentsSection({ post, user }) {
    const [comments, setComments] = useState(post.comments);
    const [areCommentsExpanded, setAreCommentsExpanded] = useState(false);

    function handleCommentFormSubmission(e) {
        e.preventDefault();
        const { content } = e.target.elements;

        postNewComment().then((data) => {
            setComments((prevComments) => [data.comment, ...prevComments]);
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

    function handleExpandComments() {
        setAreCommentsExpanded((prevState) => !prevState);
    }

    return (
        <section className="comments">
            <h3>Comments</h3>
            {comments.map((comment, index) => {
                if (!areCommentsExpanded && index > 1) {
                    return null;
                }
                return <Comment key={comment._id} comment={comment} />;
            })}
            {comments.length > 2 && (
                <button
                    className="expand-comments"
                    onClick={handleExpandComments}
                >
                    {areCommentsExpanded ? 'Hide' : 'Expand'} Comments
                </button>
            )}
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
    );
}

export default CommentsSection;
