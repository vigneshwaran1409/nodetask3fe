import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { FaTrashCan} from "react-icons/fa6";
import { API_URL } from '../../../App';
function Student()
{
    let params =useParams()
    let Navigate=useNavigate()
    let [allmentor,setallmentor]=useState([])
    let [allbatch,setallbatch]=useState([])
    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let [batch,setbatch]=useState("")
    let [mentor,setmentor]=useState("")
    let [previous_mentor,setprevious_mentor]=useState([])

 const handleAdd= async()=>{
    try {
        let data= {name,email,batch,mentor,previous_mentor}
        if(data.name===""||data.email===""||data.batch===""||data.mentor===""){
            alert("empty")
        }else{
            let res=await axios.post(`${API_URL}/student`,data)
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
            Add Student Here...
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
      <Form.Label>mentor :</Form.Label>
      <Form.Select className="select-student" onChange={(e)=>{
        setmentor(e.target.value)
      }}aria-label="Default select example">
      <option>select mentor</option>
      {allmentor.map((e,i)=>{<option key={i} value={e._id}>{e.name}</option>})}
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
      <div className="formGroup">
            <div className="student">
              <h5 className="text-center text-light">Previous Mentor</h5>
             {
              previous_mentor.map((e,i)=>{
                return(
                  <div key={i} className="d-flex justify-content-around">
                  <span>{e}</span>
                  <span className="trash_can">
                    <FaTrashCan />
                  </span>
                </div>
                )
              })

             }
       </div>
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

export default Student