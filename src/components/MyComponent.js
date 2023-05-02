//class component
//function component

import React from "react";

class MyComponent extends React.Component {

    state = {
        name: 'Dieu',
        address: 'Bac Ninh',
        age: 18
    }

    handleClick(event) {
        console.log('>>> Click me my button');
    }
    handleMouseOver(event) {
        console.log('My name is', this.state.name);
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} - {this.state.address} - {this.state.age}
                <button onClick={this.handleClick}>Hover me</button>
                <button onMouseOver={this.handleMouseOver}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;