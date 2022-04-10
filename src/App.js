import './App.css';
import Header from './components/Header';
import PostsList from './components/PostsList';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route exact path="/" element={<PostsList />} />
                    <Route
                        exact
                        path="/login"
                        element={<Login setUser={setUser} />}
                    />
                    <Route exact path="/signup" element={<SignUp />} />
                </Routes>
            </main>
        </Router>
    );
}

export default App;
