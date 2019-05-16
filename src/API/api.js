import store from "../Redux/Store/store"
import { players, teams } from "../Redux/Actions/actions"

const staticURL = "http://localhost:3008/"

const pagination = "?_page=1"
const querySyntax = "?q="

export const playerURL = `${staticURL}players`
export const teamURL = `${staticURL}teams`

export const getPlayers = () => {
    fetch(playerURL + pagination).then(items => items.json()).then(res => store.dispatch(players(res)))
}

export const queryData = query => {
    if (query.length > 0) {
        fetch(playerURL + querySyntax + query).then(items => items.json()).then(res => store.dispatch(players(res)))
    }
}

export const getTeams = () => {
    fetch(teamURL).then(items => items.json()).then(res => store.dispatch(teams(res)))
}

export const updatePlayer = updates => {
    fetch(playerURL + "/" + updates.id, {
        method: 'PATCH',
        body: JSON.stringify(updates),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(item => item.json()).then(res => getPlayers())
}