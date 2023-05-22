//class component
//function component

import React, { useState } from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

// class MyComponent extends React.Component {
//     state = {
//         ListUsers: [
//             { id: 1, name: 'Dieu', age: "22" },
//             { id: 2, name: 'Trang', age: "19" },
//             { id: 3, name: 'Vinh', age: "22" },
//         ]
//     }
//     handleAddUser = (user) => {
//         this.setState({
//             ListUsers: [user, ...this.state.ListUsers]
//         })
//     }
//     handleDeleteUser = (userId) => {
//         let ListUsersClone = this.state.ListUsers;
//         ListUsersClone = ListUsersClone.filter((user) => user.id !== userId);
//         this.setState({
//             ListUsers: ListUsersClone
//         })
//     }
//     //JSX
//     render() {
//         return (
//             <>
//                 <div className="a">
//                     <AddUserInfor handleAddUser={this.handleAddUser} />
//                     <br /><br />
//                     <DisplayInfor
//                         ListUsers={this.state.ListUsers}
//                         handleDeleteUser={this.handleDeleteUser}
//                     />
//                 </div >
//                 <div className="b"></div>
//             </>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUser, setListUser] = useState(
        [
            { id: 1, name: 'Dieu', age: "22" },
            { id: 2, name: 'Trang', age: "19" },
            { id: 3, name: 'Vinh', age: "22" },
        ]
    );
    const handleAddUser = (userObj) => {
        setListUser([userObj, ...listUser]);
    }
    const handleDeleteUser = (userId) => {
        let listUserClone = listUser;
        listUserClone = listUserClone.filter((user) => user.id !== userId);
        setListUser(listUserClone);
    }
    return (
        <>
            <div className="a">
                <AddUserInfor handleAddUser={handleAddUser} />
                <br /><br />
                <DisplayInfor
                    ListUsers={listUser}
                    handleDeleteUser={handleDeleteUser}
                />
            </div >
            <div className="b"></div>
        </>
    );
}

export default MyComponent;