import React, { Component } from 'react';
import Calendar from 'react-calendar';
import './schedule.css'

class Schedule extends Component {
    constructor(props) {
      super(props);
      this.state = {
            date: new Date(),
            shiftType: {from: '', to: ''},
            dailyTasks: [],
            tasks: []
        };
    
      this.taskModel = '';
      this.onChangeCalendar = this.onChangeCalendar.bind(this);
      this.onShiftChange = this.onShiftChange.bind(this);
      this.addDailyTask = this.addDailyTask.bind(this);
      this.renderDailyTasks = this.renderDailyTasks.bind(this);
      this.submit = this.submit.bind(this);
      
      
    }
    
    onChangeCalendar(date) {
        this.setState({date: date});
    }

    onShiftChange(event, type) {
        let value = event.target.value;
        let shiftType = this.state.shiftType;

        shiftType[type] = value;
        console.log(shiftType);
        this.setState({shiftType: shiftType});
    }

    renderDailyTasks() {
        let dailyTasks = this.state.dailyTasks.map((item, index) => {
            let task = (
                <div className="taskBlock" key={index}>
                    <ul>
                        <li  className="d-task">{item}</li>
                    </ul>
                    <button type="button" class="btn btn-danger btn-sm" onClick={() => {this.removeDailyTask(item)}}>remove</button>
                </div>
            );
            return task;
        });
        
        this.setState({tasks: dailyTasks});
    }

    removeDailyTask(task) {
        let dailyTasks = this.state.dailyTasks;
        let indexOfTask = dailyTasks.indexOf(task);

        dailyTasks.splice(indexOfTask, 1);

        this.setState({dailyTasks: dailyTasks}, () => {
            this.renderDailyTasks();
        });

    }

    addDailyTask() {
        let dailyTasks = this.state.dailyTasks;

        dailyTasks.push(this.taskModel);
        this.renderDailyTasks();
        this.taskModel = '';

        document.getElementById('taskModelInput').value = '';
    }

    submit() {
        let form = {
            date: this.state.date,
            shiftType: this.state.shiftType,
            dailyTasks: this.state.dailyTasks,
        }
        alert(JSON.stringify(form));
    }

    render() {
      return (
        <div className="container">
            <div className="row">
                    <div className="col-md-7">
                        <div className="form-groupe">
                        <h3>Current date</h3>
                        <span>{this.state.date.toString()}</span>
                    </div>
                    <div className="form-groupe">
                        <h3>Shift Type</h3>
                        <label>From:
                            <input className="form-control" onChange={(event) => {this.onShiftChange(event, 'from')}} type="text"/>
                        </label> 
                        <label>To:
                            <input className="form-control" onChange={(event) => {this.onShiftChange(event, 'to')}} type="text"/>
                        </label>  
                    </div>
                    <div className="form-groupe">
                        <h3>Daily Tasks</h3>
                        {this.state.tasks}
                        <input id='taskModelInput' onChange={(event) => {this.taskModel = event.target.value}} className="form-control" type="text"/>
                        <button onClick={this.addDailyTask} className="btn btn-info">Add task</button>
                    </div>
                </div>
                <div className="col-md-5">
                    <Calendar
                        onChange={this.onChangeCalendar}
                        value={this.state.date}
                    />
                </div>
                <button onClick={this.submit} className="btn btn-success">Send</button>
            </div>
        </div>
      );
    }
  }


export default Schedule;