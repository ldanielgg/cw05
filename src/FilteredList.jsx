import { useState } from 'react';
import List from './List';

const FilteredList = ({ items }) => {
    const [search, setSearch] = useState("");
    const onSearch = (event) => {
        setSearch(event.target.value.toLowerCase());
    };

    const filteredItems = items.filter(item => {
        return item.name.toLowerCase().includes(search);
    });

    return (
        <>
            <div className="component">
                <div className="subTitle">Component 3</div>
                <input type="text" placeholder="Search produce..." onChange={onSearch} />
                <List items={filteredItems} />
            </div>
        </>
    )
};

export default FilteredList;