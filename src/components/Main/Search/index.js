import React from "react";
import styles from "./styles";

import { queryData } from "../../../API/api"

const Search = props => {
    const handleChange = e => {
        queryData(e.target.value)
    }

    return (
        <div style={{ ...styles.container, ...props.style }}>
            <input placeholder="Search..." onChange={handleChange}/>
        </div>
    );
};

export default Search;
