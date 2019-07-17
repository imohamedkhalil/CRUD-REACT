import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import './Add.css';


  class Add extends Component {
    
    constructor(props) {
        super(props);
        this.onChangeTitleName = this.onChangeTitleName.bind(this);
        this.onChangeTitleBody = this.onChangeTitleBody.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        
        this.state = {
          title: '',
          body: '',
          isOpen: false
        }
      }
       
      openModal = () => {
        this.setState({
          isOpen: true
        });
      };
       
      hideModal = () => {
        const { toggle } = this.props;
        toggle();
      };
      
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
        const { handleFormSubmit } = this.props;
        e.preventDefault();
        const obj = {
          title,
          body
        };
        handleFormSubmit(obj)
    }

    render() {
      const { show } = this.props
        return(
            <div className="modal"> 
            <Modal open={show} onClose={this.hideModal}>
                <h3>
                    Add Post
                </h3>
                <div>
                    <form className="form" onSubmit={this.onSubmit.bind(this)}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" onChange={this.onChangeTitleName} className="form-control" id="title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="body">Body</label>
                            <input type="text" name="body" onChange={this.onChangeTitleBody} className="form-control" id="body"/>
                        </div>
                        <button type="submit" className="add-btn btn btn-primary">Add</button>
                    </form>
                </div>
            </Modal>
            </div>
        )
    }
}

export default Add;