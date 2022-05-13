import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
                backgroundColor: theme.palette.common.black,
                color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
                fontSize: 15,
        },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
                backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
                border: 0,
        },
}));


export default function ShowStudent() {

        const [studentList, setStudentList] = useState([])

        const deleteStudent = (id) => {
                axios.delete(`http://localhost:5000/students/${id}`).then(() => {
                        window.location.reload(false);
        })
}
        useEffect(() => {
                axios.get('http://localhost:5000/students').then((allStudents) => { setStudentList(allStudents.data); })
        }, [])
        return (
                <>
                        <h1>All Student</h1>
                <TableContainer component={Paper} overflow="hidden">
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                <TableHead>
                                        <TableRow>
                                                <StyledTableCell>Student Name</StyledTableCell>
                                                <StyledTableCell align="right">Registration No</StyledTableCell>
                                                <StyledTableCell align="right">Section</StyledTableCell>
                                                        <StyledTableCell align="right">Grade</StyledTableCell>
                                                        <StyledTableCell align="right">Action</StyledTableCell>
                                        </TableRow>
                                </TableHead>
                                <TableBody>
                                        {studentList.map((student, key) => (
                                                <StyledTableRow key={key}>
                                                        <StyledTableCell component="th" scope="row">
                                                                {student.studentName}
                                                        </StyledTableCell>
                                                        <StyledTableCell align="right">{student.regNo}</StyledTableCell>
                                                        <StyledTableCell align="right">{student.section}</StyledTableCell>
                                                        <StyledTableCell align="right">{student.grade}</StyledTableCell>
                                                        <StyledTableCell align="right"><IconButton aria-label="delete" onClick = {() => deleteStudent(student._id)}>
                                                                <DeleteIcon />
                                                        </IconButton></StyledTableCell>
                                                </StyledTableRow>
                                        ))}
                                </TableBody>
                        </Table>
                        </TableContainer>
                        </>
        );
}
