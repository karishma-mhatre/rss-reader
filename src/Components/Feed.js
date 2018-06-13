import React from 'react';
import Parser from 'html-react-parser';
class Feed extends React.Component{

    render(){
        return (
            <div className="feed">
                <div className="feedTitle">
                <a href = {this.props.link}>
                {this.props.title}
                </a>
                </div>

                <div className = "feedContent">{Parser(this.props.content)}</div>
                
            </div>
        )
    }
}
export default Feed;