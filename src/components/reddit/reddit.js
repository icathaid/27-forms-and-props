import React, { Component, Fragment } from "react";

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
        let search = e.target.value;
        this.setState({search});
    }
    render(){
        
        // return this.props.pokemon.length > 0 ? <p>got some</p> : <p>got none</p>
        return <p>Reddit</p>
    }
}