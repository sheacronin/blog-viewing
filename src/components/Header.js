import '../styles/Header.css';
import { Link } from 'react-router-dom';

function Header({ user, setUser }) {
    function logoutUser() {
        setUser(null);
        localStorage.clear();
    }

    return (
        <header>
            <Link to="/">
                <h1>Bloggit</h1>
            </Link>
            <nav>
                <ul>
                    {user === null ? (
                        <>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                        </>
                    ) : (
                        <li>
                            <button onClick={logoutUser}>Logout</button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
