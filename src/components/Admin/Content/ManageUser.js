import ModalCreateUser from "./ModalCreateUser";
import './ManageUser.scss';
import { FcPlus } from 'react-icons/fc';
import TableUser from "./TableUser";
import { useEffect } from "react";
import { useState } from "react";
import { getAllUsers } from "../../../services/apiService";

const ManageUser = (props) => {
    const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    const [listUsers, setListUsers] = useState([]);
    // ComponentDidMount
    useEffect(() => {
        fetchLishUser();
    }, []);

    const fetchLishUser = async () => {
        let res = await getAllUsers();
        if (res.EC === 0) {
            setListUsers(res.DT);
        }
    }
    return (
        <div className="manage-user-container">
            <div className="title">
                Manage User
            </div>
            <div className="users-content">
                <div className="btn-add-new">
                    <button
                        className="btn btn-light"
                        onClick={() => setShowModalCreateUser(true)}
                    >
                        <FcPlus />
                        Add new user
                    </button>
                </div>
                <div className="table-users-container">
                    <TableUser listUsers={listUsers} />
                </div>
                <ModalCreateUser
                    show={showModalCreateUser}
                    setShow={setShowModalCreateUser}
                    fetchLishUser={fetchLishUser}
                />
            </div>
        </div>
    )
}
export default ManageUser;