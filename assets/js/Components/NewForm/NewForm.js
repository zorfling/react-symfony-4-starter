import React, { Component } from 'react';
import FormTabs from '../FormTabs/FormTabs';
import './NewForm.css'

class NewForm extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.onDateChange = this.onDateChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        date: new Date(),
      }
     
      
    }
    
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }

    onDateChange(event) {
        this.formData.date = event.target.value;
        console.log(this.formData);
    }
  
    handleSubmit(event) {
      alert('A form was submitted: ');
      event.preventDefault();
    }
  
    render() {
      return (
          <div className="container">
            <b>Erfaringsskema for 4.semester</b>
                <form onSubmit={this.handleSubmit}>
                    <label for="exampleForm1">
                        Pick a date:
                        <input type="date" id="exampleForm1" className="form-control" onChange={this.onDateChange} value={this.state.date} />
                    </label>
                      <br/>
                    <label for="exampleForm2">
                        Working hours:   
                    </label>
                      <input type="text" id="exampleForm2" className="form-control" value={this.state.value} onChange={this.handleChange} />
                      <FormTabs />
                      <button type="button" value="Submit" className="btn btn-success">Submit</button>
                </form>
        </div>
      );
    }
  }


export default NewForm