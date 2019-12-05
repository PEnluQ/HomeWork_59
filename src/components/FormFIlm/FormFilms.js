import React from 'react';

const FormFilms = props => {
    return (
        <div className='FormFilms'>
            <input type='text' value={props.val} onChange={props.changeForm}/>
            <button onClick={props.addFilm}>Add</button>
        </div>
    );
};

export default FormFilms;