import ToDoCard from './ToDoCard';

export type listItem = {
    id: number;
    title: string;
    description?: string;
    state: boolean;
};

const listItems: listItem[] = [
  {
    id: 1,
    title: "Finish React todo UI",
    state: false,
  },
  {
    id: 2,
    title: "Add task filtering",
    state: false,
  },
  {
    id: 3,
    title: "Review Tailwind styles",
    state: true,
  },
  {
    id: 4,
    title: "Connect local storage",
    state: false,
  },
  {
    id: 5,
    title: "Refactor components",
    state: true,
  },
];

const ToDoList = () => {
    return (
        <div className="flex flex-col gap-1 my-10">
            {listItems.map((item, index) => {
                return <ToDoCard key={index} item={item}/>;
            })}
        </div>
    );
};

export default ToDoList;
