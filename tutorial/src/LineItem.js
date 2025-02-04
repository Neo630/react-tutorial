import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <div>
            <li className='item'>
                <input
                    type='checkbox'
                    onChange={() => handleCheck(item.id)}
                    checked={item.checked}></input>
                <label
                    onDoubleClick={() => handleCheck(item.id)}
                    style={
                        item.checked ? { textDecoration: "line-through" } : null
                    }>
                    {item.item}
                </label>
                <FaTrashAlt
                    onClick={() => handleDelete(item.id)}
                    role='button'
                    tabIndex='0'
                    aria-label={`Delete ${item.item}`}
                />
            </li>
        </div>
    );
};

export default LineItem;
