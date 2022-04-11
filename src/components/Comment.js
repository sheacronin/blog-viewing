import { formatRelative, parseISO } from 'date-fns';
import '../styles/Comment.css';

function Comment({ comment }) {
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
            <p>{comment.content}</p>
        </div>
    );
}

export default Comment;
