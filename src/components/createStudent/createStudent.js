import  React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function CreateStudent() {
        const [student, setStudent] = useState({
                regNo: 0,
                studentName: '',
                grade: '',
                section: ''
        });

        const createStudent = () => {
                axios.post('http://localhost:5000/students', student).then(() => {
                        window.location.reload(false);
                })
        }

        return (
                <>
                        <h2>Create Student</h2> 
                        
                        <Box
                                className = "Box-container"
                        component="form"
                        sx={{
                                '& > :not(style)': { m: 1, width: '30ch' },
                        }}
                        noValidate
                        autoComplete="off"
                >
                                <TextField id="standard-basic" label="Registration No." value = {student.regNo} onChange = {(event) => { setStudent({...student, regNo : event.target.value})}} variant="standard" />
                                <TextField id="standard-basic" label="Name" value = {student.studentName} onChange = {(event) => { setStudent({...student, studentName : event.target.value})}} variant="standard" />
                                <TextField id="standard-basic" label="Section" value = {student.section} onChange = {(event) => { setStudent({...student, section : event.target.value})}} variant="standard" />
                                <TextField id="standard-basic" label="Grade" value = {student.grade} onChange = {(event) => { setStudent({...student, grade : event.target.value})}} variant="standard" />
                                <Button variant="contained" onClick ={createStudent}>Create</Button>
                        </Box>
                </>
        );
}