export const PLAYERS = "PLAYERS"
export const TEAMS = "TEAMS"
export const EDIT = "EDIT"

export const players = players => ({ type: PLAYERS, players })
export const teams = teams => ({ type: TEAMS, teams })
export const edit = edit => ({ type: EDIT, edit })