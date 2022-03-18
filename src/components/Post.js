import '../styles/Post.css';
import Comment from './Comment';

function Post({ post }) {
    console.log(post);

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
            </section>
        </article>
    );
}

export default Post;
