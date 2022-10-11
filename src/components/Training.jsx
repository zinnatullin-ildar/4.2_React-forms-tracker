import { useState } from 'react';
import DataForm from './DataForm';
import List from './List';
import { v4 as uuid } from 'uuid';

function checkForm(forms) {
    const regexp = /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[.]([0]?[1-9]|[1][0-2])[.]([0-9]{4}|[0-9]{2})$/;
    if (forms.date === '' || forms.distance === '') {
        return false;
    }
    if (!forms.date.match(regexp)) {
        return false;
    }
    return true;
}

function Training() {
    const [forms, setForms] = useState({ id: '', date: '', distance: '' });
    const [distance, setDistance] = useState([]);

    function handlerOK(e) {
        e.preventDefault();

        if (checkForm(forms)) {
            const available = distance.findIndex((item) => item.date === forms.date)
            if (available !== -1) {
                const copy = [...distance];
                copy[available].distance = Number(copy[available].distance) + Number(forms.distance);
                setDistance(copy);
            } else {
                const copy = [...distance, { id: uuid(), date: forms.date, distance: forms.distance }]
                copy.sort((a, b) => new Date(b.date) - new Date(a.date));
                setDistance(copy);
            }
            setForms({ date: '', distance: '' });
        }
    }

    function onEvent({ target }) {
        if (target.classList.contains('btn-del')) {
            setDistance(prev => prev.filter(o => o.id !== target.dataset.id));
        } else {
            const edit = distance.findIndex((item) => item.id === target.dataset.id);
            setForms({ date: distance[edit].date, distance: distance[edit].distance })
        }
    }

    function handlerInput({ target }) {
        setForms((prev) => {
            if (target.dataset.name === 'date') {
                return { ...prev, date: target.value };
            }
            if (target.dataset.name === 'distance') {
                return { ...prev, distance: target.value };
            }
        });
    }

    return (
        <>
            <DataForm
                forms={forms}
                handlerInput={handlerInput}
                handlerOK={handlerOK}
            />
            <List
                list={distance}
                onEvent={onEvent}
            />
        </>
    )
}

export default Training
