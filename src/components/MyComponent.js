//class component
//function component

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    state = {
        ListUsers: [
            { id: 1, name: 'Dieu', age: "22" },
            { id: 2, name: 'Trang', age: "19" },
            { id: 3, name: 'Vinh', age: "22" },
        ]
    }
    handleAddUser = (user) => {
        this.setState({
            ListUsers: [user, ...this.state.ListUsers]
        })
    }
    //JSX
    render() {
        return (
            <div>
                <AddUserInfor handleAddUser={this.handleAddUser} />
                <br /><br />
                <DisplayInfor ListUsers={this.state.ListUsers} />
            </div >
        );
    }
}

export default MyComponent;