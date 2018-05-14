import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './FormType1.css';
//import DateTimePicker from 'react-date-picker';




class InternshipForm extends Component {
    constructor(){
        super();
        
        this.formData = {
            tasks: [
                {
                    id: 1, 
                    name: 'Observation og pleje af 40 risikopatienter før, under og efter fødslen',
                    status: false
                },
                {
                    id: 2, 
                    name: 'Samtale om og planlægning af barselsomsorgen',
                    status: false
                },
                {
                    id: 3, 
                    name: 'Vejledning i personlig hygiejne',
                    status: false
                },
                {
                    id: 4, 
                    name: 'Vejledning i personlig hygiejne',
                    status: false
                },
                {
                    id: 5, 
                    name: 'Palpation af uterus p.p.',
                    status: false
                },
                {
                    id: 6, 
                    name: 'Observation og vejledning omkring lokkier',
                    status: false
                }
            ]
            
            
        };

    }
    

    onChange(event, item) {
        let value = event.target.checked;
        item.status = value;

        // looking for id that is equal to 
        let ItemInArray = this.formData.tasks.find(itm=>itm.id===item.id);
        //
        let indexOfItem = this.formData.tasks.indexOf(ItemInArray);
        this.formData.tasks[indexOfItem] = item;
        console.log(this.formData);
    }

    
    renderTasks(){
        let tasks = [];
        tasks = this.formData.tasks.map((item)=>{
            return (
                <tr>
                    <td><label>{item.name}</label></td>
                    <td><label className="control control--checkbox"><input type="checkbox" onChange={(e)=>{this.onChange(e,item)}}/><div className="control__indicator"></div></label></td>
                </tr>
            );
        });
        return tasks; 
    }
    render() {
        return (
            
                <div className="container">
                    <table className="table">
                        <tbody>
                        <tr>
                        <th>Barselsomsorg generelt:</th>
                        <th>Deltaget i (dato eller stregregnskab)</th>
                        </tr>
                            {this.renderTasks()}
                        </tbody> 
                    </table> 
                </div> 
        
        )
    }
}

export default InternshipForm;