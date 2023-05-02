//class component
//function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
    //JSX
    render() {
        const myInfor = ['a', 'b', 'c']
        return (
            <div>
                <UserInfor />
                <DisplayInfor name="Dieu" age={22} />
                <DisplayInfor name="Dieu xinh" age={18} myInfor={myInfor} />
            </div >
        );
    }
}

export default MyComponent;