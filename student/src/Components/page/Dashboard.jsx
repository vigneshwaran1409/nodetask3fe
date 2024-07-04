import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { API_URL } from '../../App';


function Dashboard() {
    let Navigate=useNavigate()
let [mentor,setMentor]=useState([])
const getDetails= async() => {
    let res = await axios.get(`${API_URL}/mentor`)
    try {
        if (res.status===200)
        {
            setMentor(res.data.mentor)
            console.log(mentor);
        }

    } catch (error) {
        console.log(error.response.data)
    }

}
const handledelete =async(id)=>{
    if (confirm("Are you sure to delete the mentor?")) {
    let res =await axios.delete(`${API_URL}/mentor/${id}`)
    try {
        if (res.status===200){
            getDetails()
        }
    } catch (error) {

    }
}
}
useEffect(()=>{
 getDetails()
},[])
  return (

<div className="Table-container">
<Table striped bordered hover size="sm">
      <thead>
        <tr className="text-center">
          <th>#</th>
          <th>S.no</th>
          <th>NAME</th>
          <th>EMAIL ID</th>
          <th>BATCH</th>
          <th>STUDENTS</th>
          <th>ACTION</th>
        </tr>
      </thead>
      <tbody className='textBody'>
        { mentor.map((e,i) =>{
            return(
             <tr>
             <td>{i+1}</td>
             <td>{e.name}</td>
             <td>{e.email}</td>
             <td>
             <Form.Select aria-label="Default select example">
                {e.batch.map((o,index)=><option value={o} key={index}>o</option>)}
    </Form.Select>
             </td>
             <td >  <Button onClick={()=>Navigate(`/student-list/${e._id}`)} variant="info">view student</Button></td>
             <td>
             <Button onClick={()=>Navigate(`/edit/${e._id}`)} variant="warning"><FaEdit /></Button>
             &nbsp;
             <Button onClick={()=>handledelete(e._id)} variant="danger"><FaRegTrashAlt /></Button>
             </td>
             </tr>)
        })}
 </tbody>
 </Table>  
    </div>
        )

}

export default Dashboard