import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import '../../App';
import './Create.css';


class Create extends Component {

    constructor(props) {
        
        super(props);

        this.onChangeEmployeeName = this.onChangeEmployeeName.bind(this);
        this.onChangeEmployeeSalary = this.onChangeEmployeeSalary.bind(this);
        this.onChangeEmployeeAge = this.onChangeEmployeeAge.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          employee_name: '',
          employee_salary: '',
          employee_age:''
        }
      }
      onChangeEmployeeName(e) {
        this.setState({
          employee_name: e.target.value
        });
      }
      onChangeEmployeeSalary(e) {
        this.setState({
          employee_salary: e.target.value
        })  

      }
      onChangeEmployeeAge(e) {
        this.setState({
          employee_age: e.target.value
        })
      }
    
    onSubmit(e) {
        e.preventDefault();
        
        const obj = {
          employee_name: this.state.employee_name,
          employee_salary: this.state.employee_salary,
          employee_age: this.state.employee_age
        };
        
        axios.post('http://dummy.restapiexample.com/api/v1/create', obj)
            .then(res => console.log(res.data));

            console.log(obj);
              
              this.setState({
                employee_name: '',
                employee_salary: '',
                employee_age: ''
              })
              console.log(this.state);
    }
        


    render(){
        
        return(
           <div className="form">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="employee_name">Name</label>
                        <input type="text" onChange={this.onChangeEmployeeName} className="form-control" id="employee_name"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee_salary">Salary</label>
                        <input type="text" onChange={this.onChangeEmployeeSalary} className="form-control" id="employee_salary"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="employee_age">Age</label>
                        <input type="text" onChange={this.onChangeEmployeeAge} className="form-control" id="employee_age"/>
                    </div>
                
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
           </div>
        );
    }
}   
export default Create;