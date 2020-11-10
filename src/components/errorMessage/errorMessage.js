import React from 'react';
import './errorMessage.scss';
import img from './error_mes.png';

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt='error'></img>
            <span className="error-message">Что-то пошло не так...</span>
        </>
    );
}

export default ErrorMessage