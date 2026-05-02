import { useEffect, useState } from 'react';

const SearchBar = () => {
    const [searchQuarry, setSearchQuarry] = useState('');

    useEffect(() => {
        console.log(searchQuarry);
    }, [searchQuarry]);

    return (
        <>
            <input
                type="text"
                className="border-b border-primary-fg p-2 mx-8 h-10 w-50 outline-none focus:border-b focus:border-gray-700 font-bold"
                value={searchQuarry}
                onChange={(e) => {
                    setSearchQuarry(e.target.value);
                }}
            />
        </>
    );
};

export default SearchBar;
