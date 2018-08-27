import React, { Component, Fragment } from "react";
import superagent from "superagent";
import {fetchData} from '../../lib/utils.js';
const testAPI =  'https://www.baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1';

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
        return fetchData(testAPI);
      }
    render(){
        
        // return this.props.pokemon.length > 0 ? <p>got some</p> : <p>got none</p>
        return <div>
            <h1>reddit</h1>
            
        </div>
        
    }
}