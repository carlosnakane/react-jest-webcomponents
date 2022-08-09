import React from 'react';
import VaadinWrapper from './wrappers/vaadin-wrapper';

const App = () => {
    const items = [{ id: "1", name: "Banana" }, { id: "2", name: "Maçã" }, { id: "3", name: "Laranja" }];
    return <div>
        <hr />
        <VaadinWrapper items={items} />
    </div >
}

export default App;