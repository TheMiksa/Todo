import React, {Component} from "react";
import './search-panel.css'

export default class SearchPanel extends Component {

    onSearchChange = (e) => {

        return this.props.onSearchChange(e.target.value);

    };

    render() {
        return <input
            onChange={this.onSearchChange}
            type="text"
            className="search-panel form-control"
            placeholder="search" />
    }
};

