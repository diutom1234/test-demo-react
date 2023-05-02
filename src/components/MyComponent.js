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

    }
    handleMouseOver(event) {
        // console.log(event.pageX);
    }
    handleOnChangeInput(event) {
        this.setState({
            name: event.target.value
        })
    }
    handleOnSubmit(event) {
        event.preventDefault(); // ngàn chặn submit ~ reload trang
        console.log(this.state.name);
    }
    //JSX
    render() {
        return (
            <div>
                My name is {this.state.name} - {this.state.address} - {this.state.age}
                <form onSubmit={(event) => this.handleOnSubmit(event)}>
                    <input type="text" onChange={(event) => this.handleOnChangeInput(event)} />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;