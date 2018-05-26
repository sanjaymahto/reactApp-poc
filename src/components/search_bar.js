import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class SearchBar extends Component {

    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.onInputChange = this.onInputChange.bind(this);

        this.state = { term: '' }
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={this.onInputChange} />
            </div>
        )
    }

    onInputChange(event) {
        this.setState({ term: event.target.value })
        this.props.onSearchTermChange(this.state.term)
    }
}


export default SearchBar