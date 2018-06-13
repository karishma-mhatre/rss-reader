import React from 'react';
import Feed from './Feed';
class FeedList extends React.Component {
    render() {
        return (
            <div className="feedList">
                {
                    this.props.feeds.map((feed, index) => {
                        return (
                            <Feed title = {feed.title} content = {feed.content} link = {feed.link}/>
                        )

                    })
                }

            </div>
        );
    }
}
export default FeedList;