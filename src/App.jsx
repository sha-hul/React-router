import React from "react";
import {Route,Switch} from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Error from "./Error";
import Menu from "./Menu";
let App=()=>{
    return (
        <>
        <Menu/>
        <Switch>
            <Route exact path="/" component={About} />
            <Route path="/contact" component={Contact}/>
            <Route path="/service" component={Service}/>
            <Route component={Error}/>
        </Switch>
        {/* <About/>
        <Contact/> */}
        </>
    )
}

export default App;