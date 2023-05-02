//class component
//function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        ListUsers: [
            { id: 1, name: 'Dieu', age: 22 },
            { id: 2, name: 'Trang', age: 19 },
            { id: 3, name: 'Vinh', age: 22 },
        ]
    }
    //JSX
    render() {
        const myInfor = ['a', 'b', 'c']
        return (
            <div>
                <UserInfor />
                <DisplayInfor ListUsers={this.state.ListUsers} />
            </div >
        );
    }
}

export default MyComponent;