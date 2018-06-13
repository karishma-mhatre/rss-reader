import React from 'react';

class FeedTitle extends React.Component{
    render(){
       return (
           <div className="title">
               <span>{this.props.feedTitle}</span>
            </div>
       );
    }
 }
export default FeedTitle;
