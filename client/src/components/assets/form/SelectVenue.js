import React from 'react';

function SelectVenue(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <select
                name={props.name}
                address={props.address}
                value={props.venue}
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
export default SelectVenue;