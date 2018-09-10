import React, { Component } from 'react';
import './App.css';
import Parser from 'rss-parser';
import Form from './Components/Form'
import FeedTitle from './Components/FeedTitle';
import FeedList from './Components/FeedList';
import Header from './Components/Header';
class App extends Component {
  //states
  state = {
    feedTitle: undefined,
    feedsArray: []
  }
  //get Feeds function
  getFeeds = async (e) =>{
    e.preventDefault();
    let parser = new Parser();
    let feed = '';
    let URL = e.target.elements.url.value;
    await ( async() => {
      feed =  await parser.parseURL(`https://cors-anywhere.herokuapp.com/${URL}`);
    })();
      this.setState({
        feedTitle: feed.title,
        feedsArray: feed.items
      });
  }
  
  render() {
    return (
      <div className="App">
      <Header/>
      <Form getFeeds = {this.getFeeds}></Form>
      <FeedTitle feedTitle = {this.state.feedTitle}/>
      <FeedList feeds = {this.state.feedsArray}/>
      </div>
    );
  }
}

export default App;
