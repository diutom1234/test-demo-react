import * as React from 'react';
import { useState } from "react";
import {
    Box,
    TextField,
    Button,
} from '@mui/material';
import './DataTable.scss';
import { toast } from 'react-toastify';


const DataTable = () => {
    const [name, setName] = useState('');
    const [mssv, setMssv] = useState('');
    const [date, setDate] = useState('');
    const [email, setEmail] = useState('');
    const [listUser, setListUser] = useState([]);
    var check = 1;

    const isValidate = () => {
        if (name === '' || mssv === '' || date === '' || email === '') {
            toast.error('Vui lòng nhập đầy đủ thông tin');
            return false;
        }
        const regexMssv = /^[0-9]{8}$/;
        const regexEmail = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
        const regexDate = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
        if (!regexMssv.test(mssv)) {
            toast.error('MSSV không hợp lệ. Hãy viết ở dạng 8 số');
            return false;
        }
        // else {
        //     listUser && listUser.forEach((item) => {
        //         if (item.mssv === mssv) {
        //             toast.error('MSSV đã tồn tại');
        //             return false;
        //         }
        //     })
        // }
        if (!regexEmail.test(email)) {
            toast.error('Email không hợp lệ. Hãy viết ở dạng xxx@xxx.xxx');
            return false;
        }
        if (!regexDate.test(date)) {
            toast.error('Ngày sinh không hợp lệ. Hãy viết ở dạng day/month/year');
            return false;
        }
        return true;
    }

    const handleSubmit = () => {
        if (isValidate()) {
            listUser && listUser.forEach((item) => {
                if (item.mssv === mssv || item.email === email) {
                    check = 0;
                }
            })
            if (check) {
                const newUser = {
                    id: listUser.length + 1,
                    mssv: mssv,
                    name: name,
                    date: date,
                    email: email
                }
                setListUser([...listUser, newUser]);
                toast.success('Thêm thành công');
            } else {
                toast.error('MSSV hoặc email đã tồn tại');
            }
            check = 1;
        }

    }

    const handleDelete = (id) => {
        const newListUser = listUser.filter((item) => item.id !== id);
        setListUser(newListUser);
        toast.success('Xóa thành công');
    }

    return (
        <>
            <div className='bai1_frame'>
                <div className='bai1_frame-inside' >
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic"
                            label="MSSV" variant="outlined"
                            onChange={(event) => setMssv(event.target.value)} />
                        <TextField id="outlined-basic" label="Họ và tên"
                            variant="outlined"
                            onChange={(event) => setName(event.target.value)} />
                    </Box>
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '25ch' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic"
                            label="Ngày sinh"
                            variant="outlined"
                            onChange={(event) => setDate(event.target.value)} />
                        <TextField id="outlined-basic"
                            label="Email"
                            variant="outlined"
                            onChange={(event) => setEmail(event.target.value)} />
                    </Box>
                    <Button variant="contained" onClick={() => handleSubmit()}>Thêm</Button>
                </div>
                <table className="bai1_frame-inside table table-hover table-bordered">
                    <thead>
                        <tr>
                            <th scope="col">STT</th>
                            <th scope="col">MSSV</th>
                            <th scope="col">Họ tên</th>
                            <th scope="col">Ngày sinh</th>
                            <th scope="col">Email</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {console.log("listUser>>>>", listUser)} */}
                        {listUser && listUser.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.mssv}</td>
                                    <td>{item.name}</td>
                                    <td>{item.date}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <Button
                                            variant="contained"
                                            onClick={() => handleDelete(item.id)}
                                        >Xóa</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div >
        </>
    );
}

export default DataTable;