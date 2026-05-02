import type { listItem } from './ToDoList';

type ToDoCardProps = {
    item: listItem;
};

const getShortDate = () => {

}

const ToDoCard = ({ item }: ToDoCardProps) => {
    return (
        <>
        <div className="flex justify-between gap-10 rounded-3xl min-h-26 p-6 hover:bg-white cursor-pointer">
            <div className='flex flex-col justify-center items-center'>
                <p className='uppercase font-bold text-gray-400 text-sm tracking-widest'>sat</p>
                <p className='font-special text-primary-fg-dark text-xl'>27</p>
            </div>
            <div className='flex-1 flex flex-col justify-center gap-4'>
                <p className='text-xl'>{item.title}</p>
                <p className='text-xs text-gray-400'>San 2, 2.40pm</p>
            </div>
            <div className='flex justify-center items-center'>
                <p className='font-special text-2xl'>Finito</p>
            </div>
            
        </div>
        <div className='bg-primary-fg-faded w-full h-px'/>
        </>
    );
};

export default ToDoCard;
