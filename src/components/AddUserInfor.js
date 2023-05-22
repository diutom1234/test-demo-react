import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: 'Dieu',
//         address: 'Bac Ninh',
//         age: 18
//     }
//     handleOnChangeName(event) {
//         this.setState({
//             name: event.target.value
//         })
//     }
//     handleOnChangeAge(event) {
//         this.setState({
//             age: event.target.value
//         })
//     }
//     handleOnSubmit(event) {
//         event.preventDefault(); // ngàn chặn submit ~ reload trang
//         this.props.handleAddUser({
//             id: Math.floor(Math.random() * 100 + 1) + '-random',
//             name: this.state.name,
//             age: this.state.age
//         });
//     }
//     render() {
//         return (
//             <div>
//                 My name is {this.state.name} - {this.state.address} - {this.state.age}
//                 <form onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>Your name</label>
//                     <input
//                         type="text"
//                         value={this.state.name}
//                         onChange={(event) => this.handleOnChangeName(event)} />
//                     <label>Your age</label>
//                     <input
//                         type="text"
//                         value={this.state.age}
//                         onChange={(event) => this.handleOnChangeAge(event)} />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

const AddUserInfor = (props) => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('Bac Ninh');
    const [age, setAge] = useState('');

    const handleOnChangeName = (event) => {
        setName(event.target.value);
    }
    const handleOnChangeAge = (event) => {
        setAge(event.target.value);

    }
    const handleOnSubmit = (event) => {
        event.preventDefault(); // ngàn chặn submit ~ reload trang
        props.handleAddUser({
            id: Math.floor(Math.random() * 100 + 1) + '-random',
            name: name,
            age: age
        });
    }
    return (
        <div>
            My name is {name} - {address} - {age}
            <form onSubmit={(event) => handleOnSubmit(event)}>
                <label>Your name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => handleOnChangeName(event)} />
                <label>Your age</label>
                <input
                    type="text"
                    value={age}
                    onChange={(event) => handleOnChangeAge(event)} />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddUserInfor;