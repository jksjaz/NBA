import React from "react"
import { Router, Route } from "react-router-dom"

import history from "../Helpers/history"
import Main from "../components/Main"
import Fav from "../components/Fav"
import Header from "../components/Header"


const Routes = () => {
    return (
        <Router history={history}>
            <Header/>
            <Route path="/" exact={true} component={ Main }/>
            <Route path="/favorite" component={ Fav }/>
        </Router>
    )
}

export default Routes