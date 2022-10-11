import PropTypes from 'prop-types';

function DataForm({ forms, handlerInput, handlerOK }) {

    return (
        <form className='input-form'>
            <div className='form-date'>
                <label htmlFor="Date">Дата (дд.мм.гг)</label>
                <input
                    data-name='date'
                    value={forms.date}
                    type='text'
                    onChange={handlerInput}
                    required
                />
            </div>
            <div className='form-distance'>
                <label htmlFor="Date">Пройдено км</label>
                <input
                    data-name='distance'
                    value={forms.distance}
                    type='number'
                    onChange={handlerInput}
                    required
                />
            </div>
            <button className='btn-ok' onClick={handlerOK}>OK</button>
        </form>
    )
}

DataForm.prototype = {
    InputForm: PropTypes.object.isRequired,
    handlerInput: PropTypes.func.isRequired,
    handlerOK: PropTypes.func.isRequired,
}

export default DataForm
