import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Main from "./components/Main"
import store from "./Redux/Store/store"
import { getPlayers, getTeams, getFavs } from "./API/api"

const jsx = (
    <Provider store={store}>
        <Main />
    </Provider>
)

getFavs()
getTeams()
getPlayers()

ReactDOM.render(jsx, document.getElementById('root'))