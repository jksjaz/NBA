import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"

import Search from "../Main/Search";
import styles from "./styles"

class Header extends React.Component {
    render() {
        return (
            <div className="container">
                <div style={styles.title}>
                    <Link to="/" style={styles.link} className="text-dark">NBA Interview</Link>
                    <Link to="/favorite" style={styles.link} className="float-right h6 mt-2 text-muted">Favz: {this.props.favs ? this.props.favs.length : 0}</Link>
                </div>
                <Search style={styles.search} />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    favs: state.reducer.favs
})

export default connect(mapStateToProps)(Header)