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
            <>
                <div className="a">
                    <AddUserInfor handleAddUser={this.handleAddUser} />
                    <br /><br />
                    <DisplayInfor ListUsers={this.state.ListUsers} />
                </div >
                <div className="b"></div>
            </>
        );
    }
}

export default MyComponent;