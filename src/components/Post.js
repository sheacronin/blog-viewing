import '../styles/Post.css';
import Comment from './Comment';

function Post({ post }) {
    //console.log(post);

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
                {post.comments.map((comment) => (
                    <Comment key={comment._id} comment={comment} />
                ))}
                <form className="comment-form">
                    <label htmlFor="content">Your New Comment:</label>
                    <textarea type="text" id="content" name="content" />
                    <button type="submit">Post Comment</button>
                </form>
            </section>
        </article>
    );
}

export default Post;
