const List = ({ items }) => {
    return (
        <>
            <ul>
                {items.map(item => (
                    <li key={item.name}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </>
    )
};

export default List;