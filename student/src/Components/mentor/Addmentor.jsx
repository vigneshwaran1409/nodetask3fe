import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { FaTrashCan} from "react-icons/fa6";
import Allstudent from '../student/Allstudent';
import { API_URL } from '../../../App';

function Addmentor() {
  {
    let params =useParams()
    let Navigate=useNavigate()
    let [Allstudent,setallstudent]=useState([])
    let [allbatch,setallbatch]=useState([])
    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let [batch,setbatch]=useState("")
    let [mentor,setmentor]=useState("")


 const handleAdd= async()=>{
    try {
        let data= {name,email,batch,mentor,previous_mentor}
        if(data.name===""||data.email===""||data.batch===""||data.mentor===""){
            alert("empty")
        }else{
            let res=await axios.post(`${API_URL}/mentor`,data)
            if (res.status===200)
            {
                Navigate("/")
            }
        }
    } catch (error) {

    }
 }
 const getDetails = async () => {
    let res = await axios.get(`${API_URL}/mentor`);
    setallmentor(res.data.mentor);
    try {
      if (res.status === 200) {
      }
    } catch (error) {}
  };

  const mentorbatch= async ()=>{
    setallbatch([])
    if (id !=="")
    {
        let res = await axios.get(`${API_URL}/mentor/${id}`)
        setallbatch(res.data.mentor.batch)
        setmentor(id)
    }
    else{
        setallbatch([])
    }
  }
  useEffect(()=>{
getDetails()
  },[])
  return (
    <>
    <div className="edit-form">
        <div className="Title"><br/>
          <h1 className="text-center">
            Add mentor Here...
          </h1>
        </div>
    <Form>
    <div className="formGroup">
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>name:</Form.Label>
      <Form.Control type="text" 
      value={name}
      onChange={(e)=>{
        setname(e.target.value)
      }}
      placeholder="enter your name" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email :</Form.Label>
      <Form.Control type="text" 
      value={email}
      onChange={(e)=>{
        setemail(e.target.value)
      }}
      placeholder="enter your email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label> student:</Form.Label>
      <Form.Select className="select-student" onChange={(e)=>{
        setallstudent(e.target.value)
      }}aria-label="Default select example">
      <option>select student</option>
      {Allstudent.map((e,i)=>{<option key={i} value={e._id}>{e.name}</option>})}
    </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>batch:</Form.Label>
      <Form.Select className="select-student" onChange={(e)=>{
        setbatch(e.target.value)
      }}aria-label="Default select example">
      <option>select mentor</option>
      {allbatch.map((e,i)=>{<option key={i} value={e}>{e}</option>})}
    </Form.Select>
      </Form.Group>
      </div>

       <div className="buttonGroup">
            <Button onClick={() => handleAdd()} variant="primary">
              Submit
            </Button>
            &nbsp; &nbsp;
            <Button onClick={() => Navigate("/dashboard")} variant="danger">
              Cancel
            </Button>
       </div>     
  </Form>
</div>
 </>
  )
}
}

export default Addmentor