import React from 'react';

const Input = ({ value, setValue, name }) => {
    return (
        <input type="text" name={name} value={value} onChange={e => setValue(e.target.value)} />
    )
};

export default Input;