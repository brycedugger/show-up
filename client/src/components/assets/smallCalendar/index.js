import React, { Component } from 'react';
import DatePicker from 'react-date-picker';

class smallCalendar extends Component {
  state = {
    date: new Date(),
  }

  onChange = date => this.setState({ date })

  render() {
    return (
      <div>
        <DatePicker
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default smallCalendar;