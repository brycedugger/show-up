import React from 'react';

// This file exports the Select component

// class Select extends Component {

//     //On the change event for the select box pass
//     //the selected value back to the parent
//     handleChange = (event) => {
//         let selectedValue = event.target.value;
//         this.props.onSelectChange(selectedValue);
//     }

//     render() {

//         let arrayOfData = this.props.arrayOfData;
//         let options = arrayOfData.map((data) =>
//             <option
//                 key={data.id}
//                 value={data.id}
//             >
//                 {data.value}
//             </option>
//         );

//         return (
//             <div className="form-group">
//                 <label>{this.props.label}</label>
//                 <select
//                     className="form-control"
//                     onChange={this.handleChange}>

//                     <option>Select Option</option>
//                     {options}

//                 </select>
//             </div>
//         )
//     }
// }

// export default Select;

function Select(props) {
    return (
        <div className="form-group">
            <label>{props.label}</label>
            <select
                name={props.name}
                className='form-control'
                onChange={props.handleChange}>
                {props.arrayOfData.map(data => {
                    return (
                        <option
                            key={data.id}
                            value={data.value}
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