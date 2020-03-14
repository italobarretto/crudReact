import React from 'react'
import { Switch, Route, Redirect } from 'react-router'

import Home from '../components/home/Home'
import UsersCrud from '../components/user/UserCrud'

export default props =>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/users" component={UsersCrud}/>
        <Redirect from="*" to="/" />
    </Switch>