import './App.css';
import PostsList from './components/PostsList';

function App() {
    return (
        <div>
            <header>
                <h1>Bloggit</h1>
            </header>
            <main>
                <PostsList />
            </main>
        </div>
    );
}

export default App;
