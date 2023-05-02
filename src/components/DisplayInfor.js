import React from "react";

class DisplayInfor extends React.Component {
    render() {
        const { ListUsers } = this.props;
        return (
            <div>
                {
                    ListUsers.map((user) => {
                        return (
                            <div key={user.id}>
                                <div>My name is {user.name}</div>
                                <div>My age is {user.age}</div>
                                <hr />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default DisplayInfor;