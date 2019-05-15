import store from "../Redux/Store/store"
import { players, teams } from "../Redux/Actions/actions"

const playerURL = "http://localhost:3008/players"
const teamURL = "http://localhost:3008/teams"

export const getPlayers = () => {
    fetch(playerURL).then(items => items.json()).then(res => store.dispatch(players(res)))
}

export const getTeams = () => {
    fetch(teamURL).then(items => items.json()).then(res => store.dispatch(teams(res)))
}