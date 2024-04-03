import { BlogPosts } from "../../blog-posts/posts";
import { Link } from 'react-router-dom';

export default function PostLists() {

    return (
        <div>
            {Object.entries(BlogPosts).map(([slug, { title }]) => (
                <li key={slug}>
                    <Link to={`/posts/${slug}`}> <h3>{title}</h3> </Link>
                </li>
            ))}
        </div>
    );
}