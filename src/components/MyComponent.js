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

        this.setState({
            name: 'Ngo Dieu',
            age: Math.floor(Math.random() * 100 + 1)
        })
    }
    handleMouseOver(event) {
        console.log(event.pageX);
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} - {this.state.address} - {this.state.age}
                <button onMouseOver={this.handleMouseOver}>Hover me</button>
                <button onClick={(event) => { this.handleClick(event) }}>Click me</button>
            </div>
        );
    }
}

export default MyComponent;