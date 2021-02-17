import React from "react";
import Home from './Home';
import About from "./About";
import Material from "./Material";
import Help from "./Help";
import { Route, Switch, NavLink } from "react-router-dom";
const App = () => {
    return (
        <>
             <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/material' component={Material} />
                <Route exact path='/help' component={Help} />
            </Switch>
             
        </>
    )
}
export default App;
export { Route, Switch, NavLink };