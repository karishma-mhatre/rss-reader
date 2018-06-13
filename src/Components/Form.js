import React from 'react';

class Form extends React.Component{
    render(){
       return (
       <form onSubmit = {this.props.getFeeds} className = "form">
            <input type = "text" name = "url" placeholder="Enter URL"/> 
            <button>Get Feeds</button>   
        </form>
       );
    }
}
export default Form;