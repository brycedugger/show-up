import React, {Component} from 'react';

// This file exports the Select component

class Select extends Component{

    //On the change event for the select box pass
    //the selected value back to the parent
    handleChange = (event) =>
    {
        let selectedValue = event.target.value;
        this.props.onSelectChange(selectedValue);
    }

    render(){

        let arrayOfData = this.props.arrayOfData;
        let options = arrayOfData.map((data) =>
                <option 
                    key={data.id}
                    value={data.id}
                >
                    {data.value}
                </option>
            );
        
            return (
            <select
                name="customSearch"
                className="form-control"
                onChange={this.handleChange}>
                    <option>Select Venue</option>
                    {options}
           </select>
        )
    }
}

export default Select;