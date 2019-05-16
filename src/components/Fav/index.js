import React from "react"
import { connect } from "react-redux"

const Fav = props => {

    const renderList = () => {
        return props.favs.map(fav => {
            const player = props.players.find(player => player.id === fav.id)
            const team = props.teams.find(team => team.id === player.team)
            return (
                <li key={fav.id} className="list-group-item">
                    <img alt="player" src={`http://localhost:3008/${player.image}`} width="50"/>
                    <span className="ml-4 text-muted">{player.name}</span>
                    <span className="ml-4 text-muted">{team.name}</span>
                    <span className="ml-4 text-muted">{player.position}</span>
                    <span className="ml-4 text-muted">{player.college}</span>
                </li>
            )
        })
    }

    return (
        <div className="container">
            <ul className="list-group">
                {props.players ? renderList() : undefined}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    players: state.reducer.players,
    teams: state.reducer.teams,
    favs: state.reducer.favs
})

export default connect(mapStateToProps)(Fav)