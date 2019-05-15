import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

import Main from "./components/Main"
import store from "./Redux/Store/store"
import { getPlayers, getTeams } from "./API/api"

const jsx = (
    <Provider store={store}>
        <Main />
    </Provider>
)

getTeams()
getPlayers()

ReactDOM.render(jsx, document.getElementById('root'))