import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/">
                <h1>Bloggit</h1>
            </Link>
            <nav>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
}

export default Header;
