import React, { Component} from "react";
import "./item-status-filter.css";

export default class ItemStatusFilter extends Component {


    
    render() {
        const btnStyle = [...this.props.btnStyle];
        return (
            <div className="btn-group">
                <button type="button"
                        className={btnStyle[0]}
                        onClick={this.props.onClickAll}>All</button>
                <button type="button"
                        className={btnStyle[1]}
                        onClick={this.props.onClickActive}
                        >Active</button>
                <button type="button"
                        className={btnStyle[2]}
                        onClick={this.props.onClickDone}
                        >Done</button>

            </div>
        )
    }
}

