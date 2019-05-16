import React from "react";
import { connect } from "react-redux"

import styles from "./styles";
import Modal from "../Modal";
import { edit } from "../../../Redux/Actions/actions"

class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }

    handleClick = () => {
        this.props.edit(this.props)
    }

    render() {
        return (
            <div style={{ ...styles.container, ...this.props.style }}>
                <div style={styles.name}>{this.props.name}</div>
                <img src={`http://localhost:3008/${this.props.image}`} style={styles.playerImage} alt="player_image" />
    
                <div>{this.props.playerTeam.name}</div>

                <span onClick={this.handleClick} data-toggle="modal" href="/" data-target="#edit-modal" className="mdi mdi-pencil-box text-info mdi-36px"></span>
                <Modal/>
            </div>
        );
    }
};

const mapDispatchToProps = dispatch => ({
    edit: player => dispatch(edit(player))
})

export default connect(null, mapDispatchToProps)(Card)
