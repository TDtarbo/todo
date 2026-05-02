import Header from './components/Header';
import SearchButton from './components/search/SearchButton';
import ToDoContainer from './components/todoContainer/ToDoContainer';

function App() {
    return (
        <div className="h-screen px-20 py-10 bg-primary-bg font-primary">
            <Header />
            <ToDoContainer />
            <SearchButton />
        </div>
    );
}

export default App;
