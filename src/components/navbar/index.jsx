import { Link } from 'react-router-dom';

export default function Navbar() {

    return (
        <nav>
            <Link to={'/'} style={{ padding: 5}}>Home</Link>
            <Link to={'/posts'} style={{ padding: 5}}>Posts</Link>
            <Link to={'/about'} style={{ padding: 5}}>About</Link>
        </nav>
    );
}