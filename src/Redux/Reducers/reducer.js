import { PLAYERS, TEAMS } from "../Actions/actions"

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
        default:
            return state
    }
}