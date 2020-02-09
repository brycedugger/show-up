import React from 'react';

function Select(props) {
    console.log(props)
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <select
                name={props.name}
                address={props.address}
                className='form-control'
                onChange={props.handleChange}>
                {props.arrayOfData.map(data => {
                    return (
                        <option
                            key={data.id}
                            value={data.value}
                            address={data.address}
                        >

                            {data.value}

                        </option>
                    );
                })}
            </select>
        </div>
    );
}
export default Select;