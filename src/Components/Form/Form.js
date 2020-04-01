import React, {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state ={
            title: '',
            img: '',
            content: ''
        }
    }

    render(){
        return(
            <div>
                <h1>New Post</h1>
                <h2>Title:</h2>
                <input></input>
                <img />
                <h2>Image URL:</h2>
                <input></input>
                <h2>Content:</h2>
                <input></input>
                <button>Post</button>
            </div>
        )
    }
}

export default Form;