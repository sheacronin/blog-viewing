import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <Link to="/">
                <h1>Bloggit</h1>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
