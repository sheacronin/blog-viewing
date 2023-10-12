import { useState } from 'react';
import { formatRelative, parseISO } from 'date-fns';
import { API_BASE_URL } from '../constants';
import '../styles/Comment.css';

function Comment({ comment, user, postId, setComments }) {
    const [isEditing, setIsEditing] = useState(false);

    function toggleEditing() {
        setIsEditing((prevIsEditing) => !prevIsEditing);
    }

    async function editComment(e) {
        e.preventDefault();
        const { content } = e.target.elements;

        const res = await fetch(
            `${API_BASE_URL}/posts/${postId}/comments/${comment._id}`,
            {
                method: 'PUT',
                body: JSON.stringify({
                    content: content.value,
                }),
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            }
        );

        const data = await res.json();

        setComments((prevComments) => {
            const newComments = [...prevComments];
            const index = newComments.findIndex(
                (aComment) => aComment._id === comment._id
            );
            newComments[index] = {
                ...newComments[index],
                content: data.comment.content,
            };

            return newComments;
        });

        setIsEditing(false);
    }

    async function deleteComment() {
        await fetch(`${API_BASE_URL}/posts/${postId}/comments/${comment._id}`, {
            method: 'DELETE',
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        });

        setComments((prevComments) =>
            prevComments.filter((aComment) => aComment._id !== comment._id)
        );
    }

    return (
        <div className="comment">
            <div className="comment-info">
                <h4 className="comment-author">
                    {comment.author.displayName} says...
                </h4>
                <p className="comment-timestamp">
                    {formatRelative(parseISO(comment.timestamp), new Date())}
                </p>
            </div>
            {isEditing ? (
                <form className="edit-comment-form" onSubmit={editComment}>
                    <label htmlFor="content" hidden>
                        Your Comment:
                    </label>
                    <textarea
                        type="text"
                        id="content"
                        name="content"
                        defaultValue={comment.content}
                    />
                    <button type="submit">Post Comment</button>
                </form>
            ) : (
                <p>{comment.content}</p>
            )}
            {user && user.id === comment.author._id && !isEditing && (
                <div className="edit-comment">
                    <button onClick={deleteComment} className="delete-button">
                        Delete
                    </button>
                    <button onClick={toggleEditing}>Edit Comment</button>
                </div>
            )}
        </div>
    );
}

export default Comment;
