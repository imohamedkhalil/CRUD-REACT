import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Listing.css';
import Add from '../Add/Add';

class Listing extends Component {
    constructor(props){
        super(props);
        this.state = {
            //id: '',
            error: null,       
            isLoaded: false,
            isModalVisible: false,
            posts: []};
        }
        
    componentDidMount() {
        console.log(this.props); 
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(
            (result) => {
                
                this.setState({
                    id: result.id,
                    isLoaded: true,
                    posts: result,
                });
            },
            (error) => {
                this.setState({
                    error,
                    isLoaded: true,
                });
            }
            )
            console.log("here");
        }
        
        toggleModal = () => {
            const {isModalVisible} = this.state; 
            this.setState({isModalVisible: !isModalVisible});
        }

        handleFormSubmit = (obj) => {
            const { posts } = this.state;
            const currentCount = posts.length;
            const identifiedObj = {...obj, id: currentCount + 1}
            // axios.post('https://jsonplaceholder.typicode.com/posts', obj)
            // .then(res => console.log(res.data))
            // .catch(error => console.log(error));
            const updatedPosts = [...posts, identifiedObj];
            this.setState({ posts: updatedPosts})
        } 

        handleDelete = (id) => {
            const { posts } = this.state;
            const filteredPosts = posts.filter(post => post.id !== id)
            this.setState({posts: filteredPosts});
        }
    render() {
        const { error, isLoaded, posts, isModalVisible, } = this.state;
        console.log('isVisible inside render', isModalVisible);
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <>
                <div>
                    <button onClick = {this.toggleModal} className = "add-post-btn btn-primary btn">Add Post</button>
                    <Add 
                        show={isModalVisible}
                        toggle={this.toggleModal}
                        posts={posts}
                        handleFormSubmit={this.handleFormSubmit}
                    />
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Title</th>
                            <th scope="col">Body</th>
                            <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(item => (
                            <tr key = {item.id}>
                            <th>{item.id}</th>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td >
                                <a href="#"><i className="fa fa-edit"></i></a>
                                <a href="#" onClick={() => this.handleDelete(item.id)}><i className="fa fa-trash"></i></a>
                            </td>
                            </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                </>
            );
        }
    }
}

export default Listing;

