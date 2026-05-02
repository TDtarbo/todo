
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoSettingsOutline } from 'react-icons/io5';

const Header = () => {
  return (
    <header className="flex justify-between items-center h-[3vh]">
      <div>
        <p className="text-3xl text-primary-fg font-secondary font-bold">Finito</p>
        <p className='text-gray-400'>Minimal Todo List</p>
      </div>
      <div className="flex gap-4 justify-between items-center">
        <IoMdNotificationsOutline className='text-3xl text-primary-fg font-bold cursor-pointer'/>
        <IoSettingsOutline className='text-3xl text-primary-fg font-bold cursor-pointer'/>
      </div>
    </header>
  );
};

export default Header;
