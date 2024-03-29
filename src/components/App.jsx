import '../styles/App.scss'

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import HomePage from "./pages/HomePage"
import MenuPage from "./pages/MenuPage"
import AboutUsPage from './pages/AboutUsPage'
import GalleryPage from './pages/GalleryPage'
import PrivateEvents from './pages/PrivateEvents'

function App() {
    return (
        <Router>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/menu" component={MenuPage}/>
            <Route exact path="/about-us" component={AboutUsPage}/>
            <Route exact path="/gallery" component={GalleryPage}/>
            <Route exact path="/private-events" component={PrivateEvents}/>
        </Router>
    )
}

export default App