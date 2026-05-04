import ToDoList from './ToDoList';
import Header from './Header';

const ToDoContainer = () => {
    return (
        <div className="h-[88vh] flex flex-col items-center justify-between">
            <Header />
            <ToDoList />
        </div>
    );
};

export default ToDoContainer;
