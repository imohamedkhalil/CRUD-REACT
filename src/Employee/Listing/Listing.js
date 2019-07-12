import React, {Component} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './Listing.css';

class Listing extends Component {
    constructor(props){
        super(props);
        this.state = {
            error: null,        
            isLoaded: false,
            posts: []};
        }
        
    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(
            (result) => {
                this.setState({
                    isLoaded: true,
                    posts: result
                });
            },
            (error) => {
                this.setState({
                    error,
                    isLoaded: true,
                });
                console.log(this.state.posts);
            }
            )
            
        }
        
    render() {
        const { error, isLoaded, posts } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Link to={'/create'}><button className = "btn-primary btn">Add Post</button></Link>
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

