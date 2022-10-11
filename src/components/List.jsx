import PropTypes from 'prop-types';

function List({ list, onEvent }) {
    if (list.length === 0) {
        return null
    }

    const listHead =
        <div className='list-head'>
            <p>Дата (дд.дд.гг)</p>
            <p>Пройдено км</p>
            <p>Действия</p>
        </div>


    const listItems = list.map((item) =>
        <li
            className='list-item'
            key={item.id}
            onClick={onEvent}>
            <p>{item.date}</p>
            <p>{item.distance}</p>
            <div>
                <button className='btn-edit' data-id={item.id}>&#9998;</button>
                <button className='btn-del' data-id={item.id}>&#10008;</button>
            </div>
        </li>);

    return (
        <>
            {listHead}
            <ul className='list'>
                {listItems}
            </ul>
        </>
    )
}

List.prototype = {
    list: PropTypes.array.isRequired,
    onEvent: PropTypes.func.isRequired,
}

export default List
