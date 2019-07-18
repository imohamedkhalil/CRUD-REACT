import React, {Component} from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';
import './AddUpdate.css';


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
      componentDidMount() {
        const { itemToEditId, posts } = this.props;
        if(itemToEditId) {
          //map & filter == all return an array
          //posts.filter((post)=> post.id === itemToEditId)[0]
          const itemToEdit = posts.find((post)=> post.id === itemToEditId)
          this.setState ({
            itemToEdit
          }) 
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
        console.log('Title Value', e.target.value)
        const { itemToEdit } = this.state;
        if(itemToEdit) {
          this.setState({
            itemToEdit: {
              ...itemToEdit,
              title: e.target.value
            }
          });       
        }
        else {
          this.setState({
              title: e.target.value
            })
          }  
        }

      onChangeTitleBody(e) {
        const { itemToEdit } = this.state;
        if(itemToEdit) {
          this.setState({
            itemToEdit: {
              ...itemToEdit,
              body: e.target.value
            }
          });       
        }
        else {
          this.setState({
              body: e.target.value
            })
          }  
      }
     
    onSubmit(e) {
        const {title, body, itemToEdit } = this.state;
        const { handleFormSubmit } = this.props;
        e.preventDefault();
        if(itemToEdit) {
          console.log({itemToEdit})
          handleFormSubmit(itemToEdit);
        }
        else {
          const obj = {
            title,
            body
          };
          handleFormSubmit(obj);

        }
    }

    render() {
      const { show } = this.props;
      const { itemToEdit } = this.state;
        return(
          <div className="modal"> 
          <Modal open={show} onClose={this.hideModal}>
              <h3>
                {itemToEdit ? 'Update Post' : 'Add Post'}
              </h3>
              <div>
                  <form className="form" onSubmit={this.onSubmit.bind(this)}>
                    <div className="form-group">
                      <label htmlFor="title">Title</label>
                      <input type="text" name="title" value={itemToEdit &&itemToEdit.title} onChange={this.onChangeTitleName} className="form-control" id="title"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="body">Body</label>
                      <textarea type="text" name="body" value={itemToEdit &&itemToEdit.body} onChange={this.onChangeTitleBody} className="form-control" id="body"/>
                    </div>
                    <button type="submit" className="add-btn btn btn-primary">Save</button>
                </form>
              </div>
          </Modal>
          </div>
        )
    }
}

export default Add;