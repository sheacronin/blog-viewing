import '../styles/Post.css';
import CommentsSection from './CommentsSection';
import { formatRelative, parseISO } from 'date-fns';

function Post({ post, user }) {
    return (
        <article className="post">
            <div className="post-info">
                <h2>{post.title}</h2>
                <p className="post-timestamp">
                    {formatRelative(parseISO(post.timestamp), new Date())}
                </p>
            </div>
            <p>
                {post.author.displayName} •{' '}
                <span className="username">@{post.author.username}</span>
            </p>
            <p>{post.content}</p>
            <CommentsSection post={post} user={user} />
        </article>
    );
}

export default Post;
