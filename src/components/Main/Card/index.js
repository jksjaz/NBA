import React from "react";
import { connect } from "react-redux"

import styles from "./styles";
import Modal from "../Modal";
import { edit } from "../../../Redux/Actions/actions"
import { updateFav } from "../../../API/api";

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fav: "mdi mdi-star text-info mdi-spin mdi-36px",
            notFav: "mdi mdi-star-outline text-warning mdi-36px",
            isFav: null
        }
    }

    componentDidMount() {
        this.setState({ isFav: this.state.notFav })
        if (this.props.isFav) {
            this.setState({ isFav: this.state.fav })
        }
    }

    handleClick = () => {
        this.props.edit(this.props)
    }

    handlefav = e => {
        if (e.target.className === this.state.notFav) {
            this.setState({ isFav: this.state.fav })
            updateFav("fav", this.props.id)
        } else {
            this.setState({ isFav: this.state.notFav })
            updateFav("notFav", this.props.id)
        }
    }

    render() {
        return (
            <div style={{ ...styles.container, ...this.props.style }}>
                <div style={styles.name}>{this.props.name}</div>
                <img src={`http://localhost:3008/${this.props.image}`} style={styles.playerImage} alt="player_image" />
    
                <div>{this.props.playerTeam.name}</div>

                <span onClick={this.handleClick} data-toggle="modal" href="/" data-target="#edit-modal" className="mdi mdi-pencil-box text-info mdi-36px"></span>
                <span className={this.state.isFav} onClick={this.handlefav}></span>
                <Modal/>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    edit: player => dispatch(edit(player))
})

export default connect(null, mapDispatchToProps)(Card)
