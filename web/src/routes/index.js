/*
 * @Descripttion: 
 * @version: 
 * @Author: Magic
 * @Date: 2020-09-15 21:49:01
 * @LastEditors: Magic
 * @LastEditTime: 2021-05-05 10:12:20
 */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import Home from '../pages/Home'
import Job from '../pages/Job'
import Media from '../pages/Media'
import Header from '../components/header'
import Footer from '../components/footer'
import Tips from '../components/tips'

export default class route extends Component {
    render() {
        return (<Router>
            <div className="yyn-wrapper">
                <Header />
                <Route path="/" render={() => (<Redirect to="/home" />)} />
                <Route path="/home" component={Home} />
                <Route path="/job" component={Job} />
                <Route path="/media" component={Media} />
                <Footer />
                <Tips />
            </div>
        </Router>)
    }
}
