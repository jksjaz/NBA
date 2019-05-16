import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Routes from "./Router/Routes"
import store from "./Redux/Store/store"
import { getPlayers, getTeams, getFavs } from "./API/api"

const jsx = (
    <Provider store={store}>
        <Routes />
    </Provider>
)

getFavs()
getTeams()
getPlayers()

ReactDOM.render(jsx, document.getElementById('root'))