import React from "react";
import './DisplayInfor.scss';
import logo from '../logo.svg';

// class DisplayInfor extends React.Component {

//     render() {
//         console.log('>>> CALL render');
//         const { ListUsers } = this.props;
//         return (
//             <div className='display-infor-container'>
//                 {true &&
//                     <>
//                         {
//                             ListUsers.map((user) => {
//                                 return (
//                                     <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
//                                         <div>My name is {user.name}</div>
//                                         <div>My age is {user.age}</div>
//                                         <div>
//                                             <button onClick={() => this.props.handleDeleteUser(user.id)}>Delete </button>
//                                         </div>
//                                         <hr />
//                                     </div>
//                                 )
//                             })
//                         }
//                     </>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfor = (props) => {
    const { ListUsers } = props; //object
    return (
        <div className='display-infor-container'>
            {true &&
                <>
                    {
                        ListUsers.map((user) => {
                            return (
                                <div key={user.id} className={+user.age > 20 ? "green" : "red"}>
                                    <div>My name is {user.name}</div>
                                    <div>My age is {user.age}</div>
                                    <div>
                                        <button onClick={() => props.handleDeleteUser(user.id)}>Delete </button>
                                    </div>
                                    <hr />
                                </div>
                            )
                        })
                    }
                </>
            }
        </div>
    )
}

export default DisplayInfor;