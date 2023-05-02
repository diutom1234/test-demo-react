import React from "react";
import './DisplayInfor.scss'

class DisplayInfor extends React.Component {
    state = {
        isShow: true,
    }
    handleShowHide(event) {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        const { ListUsers } = this.props;
        return (
            <div className='display-infor-container'>
                <div onClick={(event) => this.handleShowHide(event)}>
                    <span>{this.state.isShow ? "Hide list Users" : "Show list Users"}</span>
                </div>
                {this.state.isShow && <div>
                    {
                        ListUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </div>}
            </div>
        )
    }
}
export default DisplayInfor;