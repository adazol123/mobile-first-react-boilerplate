import React from 'react'
import { Route, Switch } from 'react-router'
import { PageNotFound } from './404'
import { About } from './About'
import { Home } from './Home'

export const router = () => {
    return (
        <Switch>
            <Route path='/about' exact  component={About}/>
            <Route path='/' exact component={Home}/>
            <Route component={PageNotFound}/>
        </Switch>
    )
}
