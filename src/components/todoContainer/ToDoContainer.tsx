import ToDoList from '../ToDoList';
import Header from './Header';

const ToDoContainer = () => {
    return (
        <div className="rounded-xl py-10">
            <Header />
            <ToDoList />
        </div>
    );
};

export default ToDoContainer;
