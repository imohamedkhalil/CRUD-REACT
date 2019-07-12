import React, {Component} from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import '../../App';
import './Create.css';


class Create extends Component {

    constructor(props) {
        
        super(props);

        this.onChangeTitleName = this.onChangeTitleName.bind(this);
        this.onChangeTitleBody = this.onChangeTitleBody.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        
        this.state = {
          title: '',
          body: ''
        }
      }
      onChangeTitleName(e) {
        this.setState({
          title: e.target.value
        });
      }
      onChangeTitleBody(e) {
        this.setState({
          body: e.target.value
        })  
      }
    
    onSubmit(e) {
        const {title, body} = this.state;
        e.preventDefault();
        
        const obj = {
          title,
          body
        };
        
        axios.post('https://jsonplaceholder.typicode.com/posts', obj)
            .then(res => console.log(res.data))
            .catch(error => console.log(error));
            
            console.log(obj);
              
            //   this.setState({
            //     title: '',
            //     body: ''
            //   })

              this.props.history.push('/');
              console.log(this.state);
    }
        
    render(){
        
        return(
           <div className="form">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" onChange={this.onChangeTitleName} className="form-control" id="title"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="body">Body</label>
                        <input type="text" onChange={this.onChangeTitleBody} className="form-control" id="body"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Add</button>
                </form>
           </div>
        );
    }
}   

export default withRouter(Create);


// axios.post("/api/user/signup", { data })
//   .then(res => {
//     if (res.status === 200) {
//       console.log("REDIRECTION avec status => ", res.status);
//       // how to redirect here
//       <Redirect to = {{ pathname: "/home" }} />
//     }