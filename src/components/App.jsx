import '../styles/App.scss'

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from "./pages/HomePage"
import MenuPage from "./pages/MenuPage"

function App() {
    return (
        <Router>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/menu" component={MenuPage}/>
            <Route exact path="/about-us" component={HomePage}/>
            <Route exact path="/gallery" component={HomePage}/>
            <Route exact path="/private-events" component={HomePage}/>
        </Router>
    )
}

export default App