import React from "react";

import SearchPanel from "../search-panel/search-panel";
import ItemStatusFilter from "../item-status-filter";
import "./top-panel.css";

const TopPanel = ({onSearchChange, onClickAll, onClickActive, onClickDone, btnStyle}) => {
    return (
        <div className="top-panel d-flex">
            <SearchPanel onSearchChange={onSearchChange} />
            <ItemStatusFilter btnStyle={btnStyle}
                              onClickAll={onClickAll}
                              onClickActive={onClickActive}
                              onClickDone={onClickDone}/>
        </div>
    )
};

export default TopPanel