//class component
//function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Dieu',
        address: 'Bac Ninh',
        age: 18
    }

    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} - {this.state.address} - {this.state.age}
            </div>
        );
    }
}

export default MyComponent;