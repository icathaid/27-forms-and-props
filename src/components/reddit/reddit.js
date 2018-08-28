import React, { Component, Fragment } from "react";
import superagent from "superagent";
import {fetchData} from '../../lib/utils.js';
const testAPI =  'https://www.reddit.com/r/bicycling/search/?q=wheel';

// import './reddit.scss';
import '../pokemon/pokemon.scss';

export default class RedditList extends Component {
    constructor(props){
        super(props);
        this.state = {search:''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.searchMethod(this.state.search);
    }
    handleSearch(e) {
        let redditSearch = e.target.value;
        this.setState({redditSearch});
    }
    searchReddit(){
        return superagent.get(testAPI)
        .then(results => {
            const testResults = results.body
            console.log(testResults)
        })
        .catch(err => {
            console.error(err)
        })
      }
    render(){
        this.searchReddit();
        // return this.props.pokemon.length > 0 ? <p>got some</p> : <p>got none</p>
        return <div>
            <h1>reddit</h1>
            
        </div>
        
    }
}