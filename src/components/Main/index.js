import React, { Component } from "react";
import { connect } from "react-redux"
import Search from "./Search";
import Card from "./Card";
import styles from "./styles";

class Main extends Component {

    renderCards() {
        return this.props.players.map(player => {
            const team = this.props.teams.find(team => team.id === player.team)
            return (
                <div key={player.id} className="col mb-5">
                    <Card playerTeam={team} {...player}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container" style={{ ...styles.container, ...this.props.style }}>
                <div style={styles.title}>NBA Interview</div>
                <Search style={styles.search} />
                <div className="row">
                    {this.props.players ? this.renderCards() : undefined}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    players: state.reducer.players,
    teams: state.reducer.teams
})

export default connect(mapStateToProps)(Main)
