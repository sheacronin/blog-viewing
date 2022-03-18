import '../styles/Comment.css';

function Comment({ comment }) {
    return (
        <div className="comment">
            <h4 className="comment-author">
                {comment.author.displayName} says...
            </h4>
            <p>{comment.content}</p>
        </div>
    );
}

export default Comment;
