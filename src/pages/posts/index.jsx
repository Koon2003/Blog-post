import { Outlet } from 'react-router-dom';

export default function Posts() {
    return (
        <div>
            <h2>Blog</h2>
            <Outlet />
        </div>
    );
}