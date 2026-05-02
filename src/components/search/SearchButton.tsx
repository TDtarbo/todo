import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import SearchBar from './SearchBar';
import { MdClose } from 'react-icons/md';

const SearchButton = () => {
    const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);

    const toggleSearch = () => {
        setIsSearchBarOpen((pre) => !pre);
    };

    return (
        <div className="absolute bottom-12 right-12 bg-primary-bg flex items-center border border-primary-fg rounded-3xl">
            {isSearchBarOpen && <SearchBar />}
            <button
                className="text-3xl group hover:bg-primary-fg-dark cursor-pointer rounded-3xl p-5 transition duration-300 ease-in-out"
                onClick={() => toggleSearch()}
            >
                {isSearchBarOpen ? (
                    <MdClose className="text-primary-fg group-hover:text-primary-bg transition" />
                ) : (
                    <CiSearch className="text-primary-fg group-hover:text-primary-bg transition" />
                )}
            </button>
        </div>
    );
};

export default SearchButton;
