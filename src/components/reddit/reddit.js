import React from "react";

// import './reddit.scss';
import '../pokemon/pokemon.scss';

export default class RedditList extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    render(){
        return(
            <h1 className="pokemonDetail">Reddit</h1>
        )
    }
}