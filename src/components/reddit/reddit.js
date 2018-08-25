import React, { Component, Fragment } from "react";
import superagent from "superagent";

import {fetchData} from '../../lib/utils.js';


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
    render(){
        
        // return this.props.pokemon.length > 0 ? <p>got some</p> : <p>got none</p>
        return <div>
            <h1>reddit</h1>
            <input
                onChange={this.props.redditLoader}
                type="radio"
                id="1"
                name="reddit"
                value={reddit.url}
            ></input>
        </div>
        
    }
}