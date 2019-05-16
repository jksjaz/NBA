import React, { Component } from "react";
import { connect } from "react-redux"
import Search from "./Search";
import Card from "./Card";
import styles from "./styles";

class Main extends Component {

    renderCards() {
        return this.props.players.map(player => {
            const isFav = !!this.props.favs.find(each => player.id === each.id)
            const team = this.props.teams.find(team => team.id === player.team)
            return (
                <div key={player.id} className="col mb-5">
                    <Card playerTeam={team} isFav={isFav} {...player}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="container" style={{ ...styles.container, ...this.props.style }}>
                <div style={styles.title}>
                    NBA Interview
                    <p className="float-right h6 mt-2 text-muted">Favz: {this.props.favs ? this.props.favs.length : 0}</p>
                </div>
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
    teams: state.reducer.teams,
    favs: state.reducer.favs
})

export default connect(mapStateToProps)(Main)
