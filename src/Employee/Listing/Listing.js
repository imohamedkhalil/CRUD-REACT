import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Listing.css';

class Listing extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            employees: []};
        }
        
    componentDidMount() {
        fetch("http://dummy.restapiexample.com/api/v1/employees")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    employees: result
                });
            },
            (error) => {
                this.setState({
                    error,
                    isLoaded: true,
                });
                console.log(this.state.employees);
            }
            )
            
        }
        
    render() {
        const { error, isLoaded, employees } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Link to={'/create'}><button className = "btn-primary btn">Add Employee</button></Link>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">age</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map(item => (
                            <tr key = {item.id}>
                            <th>{item.id}</th>
                            <td>{item.employee_name}</td>
                            <td>{item.employee_age}</td>
                            <td >
                                <a href="#"><i className="fa fa-edit"></i></a> 
                                <a href="#"><i className="fa fa-trash"></i></a> 
                            </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default Listing;

