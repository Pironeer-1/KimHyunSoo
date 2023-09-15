import React, { useEffect, useState } from "react";

// const students = [
//     {
//         id: 1,
//         name: "Inje",
//     },
//     {
//         id: 2,
//         name: "Steve",
//     },
//     {
//         id: 3,
//         name: "Bill",
//     },
//     {
//         id: 4,
//         name: "Jeff",
//     },
// ];
const AttendanceBook = (props) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetch("/students.json", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                setStudents(result);
                console.log(result);
            });
    }, []);
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
} 

// function AttendanceBook(props) {
//     return (
//         <ul>
//             {students.map((student, index) => {
//                 return <li key={student.id}>{student.name}</li>;
//             })}
//         </ul>
//     );
// }

export default AttendanceBook;