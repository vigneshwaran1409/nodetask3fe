import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { API_URL } from '../../../App';

const Allstudent=()=> {
    let Navigate=useNavigate()
let [student,setStudent]=useState([])
const findIndex = (array, id)=>{ 

    for(let i = 0; i< array.length; i++){
      if(array[i]._id === id){
        return i
      }
    }
  }
const getDetails= async() => {
    try {
      let res = await axios.get(`${API_URL}/student`)
        if (res.status===200)
        {
           setStudent(res.data.student)
            console.log(student);
        }
    } catch (error) {
      console.log("Error fetching student details:", error);
    }
    }
const handledelete =async(id,batch)=>{
    if (confirm("Are you sure to delete the Student?")) {
    try {
        const index =await findIndex(student, id , batch)
        let newArray = [...student]
        newArray.splice(index, 1)
        setStudent(newArray)
        toast.success("Student Deleted Successfully!");
        let res =await axios.delete(`${API_URL}/student/${id}`)
        if (res.status===200){
            getDetails()
        }
    } catch (error) {
      console.error("Error deleting student:", error);
    }
}
}
useEffect(()=>{
 getDetails();
},[])
  return (

<div className="Table-container">
<Table striped bordered hover size="sm">
      <thead>
        <tr className="text-center">

          <th>S.no</th>
          <th>NAME</th>
          <th>EMAIL ID</th>
          <th>BATCH</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody className='textBody'>
        { student.map((e,i) =>{
            return(
             <tr>
             <td>{i+1}</td>
             <td>{e.name}</td>
             <td>{e.email}</td>
             <td>{e.batch} </td>
            <td>
             <Button onClick={()=>Navigate(`/student-edit/${e._id}`)} variant="warning"><FaEdit /></Button>{" "}
             &nbsp;
             <Button onClick={()=>handledelete(e._id ,e.batch)} variant="danger"><FaRegTrashAlt /></Button>
             </td>
             </tr>)
        })}
 </tbody>
 </Table>  
    </div>
        )

}

export default Allstudent