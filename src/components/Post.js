import '../styles/Post.css';
import CommentsSection from './CommentsSection';

function Post({ post, user }) {
    return (
        <article className="post">
            <h2>{post.title}</h2>
            <p>
                {post.author.displayName} •{' '}
                <span className="display-name">@{post.author.username}</span>
            </p>
            <p>{post.timestamp}</p>
            <p>{post.content}</p>
            <CommentsSection post={post} user={user} />
        </article>
    );
}

export default Post;
