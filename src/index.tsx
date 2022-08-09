import React from 'react';
import ReactDOM from "react-dom";
import Celebration from "./celebration";
import Lit from "./lit";
import Raw from "./raw";
import Vaadin from "./vaadin";

const App = () => {

    return <div>
        <Celebration />
        < Lit />
        <Raw />
        < Vaadin />
    </div>
}

const appNode = document.getElementById("app");
ReactDOM.render(<App />, appNode);