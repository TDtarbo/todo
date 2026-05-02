import { FaFlag } from 'react-icons/fa';
import type { listItem } from './ToDoList';

type ToDoCardProps = {
    item: listItem;
};

const getShortDate = () => {};

const ToDoCard = ({ item }: ToDoCardProps) => {
    return (
        <>
            <div className="flex justify-between gap-14 rounded-3xl min-h-26 p-6 hover:bg-white cursor-pointer dark:hover:bg-primary-fg-dark">
                <div className="flex flex-col justify-center items-center">
                    <p className="uppercase font-extrabold text-gray-400 dark:text-primary-bg text-sm tracking-widest">
                        sat
                    </p>
                    <p className="font-special text-primary-fg-dark text-xl dark:text-primary-fg">
                        27
                    </p>
                </div>
                <div className="flex-1 flex flex-col justify-center gap-4">
                    <p className="text-xl dark:text-primary-bg font-bold">
                        {item.title}
                    </p>
                    <div className="flex items-center gap-5">
                        <p className="text-sm text-gray-400 dark:text-primary-bg inline">
                            San 2, 2.40pm{' '}
                        </p>
                        <FaFlag className="text-off-green" />
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <p className="font-special text-xl dark:text-primary-bg font-bold">
                        FINITO
                    </p>
                </div>
            </div>
            <div className="bg-primary-fg-faded w-full h-px dark:bg-primary-fg-dark" />
        </>
    );
};

export default ToDoCard;
