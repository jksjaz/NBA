import { PLAYERS, TEAMS, EDIT } from "../Actions/actions"

export default (state = {}, action) => {
    switch (action.type) {
        case PLAYERS:
            return {
                ...state,
                players: action.players
            }
        case TEAMS:
            return {
                ...state,
                teams: action.teams
            }
        case EDIT:
            return {
                ...state,
                edit: action.edit
            }
        default:
            return state
    }
}