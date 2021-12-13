import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
function EditStudent() {
  useEffect(() => {
    
      console.log(params);
      if (params.id) {
        console.log(params.id);
        getData();
      }  
  }, []);

  let navigate = useNavigate();
  const params = useParams();
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [degree, setDegree] = useState("");
  let [dept, setDept] = useState("");

  // let handleSave = () => {
  //   navigate("/AllStudents");
  // };

  let handleSave = async()=>{
    await fetch('https://614eabfab4f6d30017b482c4.mockapi.io/studentDetail/'+params.id,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            name,
            email,
            mobile,
            degree,
            dept
        })
    })
    .then(response =>response.json())
    .then(data=>{
        navigate('/AllStudents')
    })
    .catch((error)=>{
        console.log(error)
    })
}

  // let getData = async () => {
  //   await fetch(
  //     "https://614eabfab4f6d30017b482c4.mockapi.io/studentDetail/" + params.id
  //   )
  //     .then((response) => response.json())
  //     .then((res) => console.log(res))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  let getData = async()=>{
    await fetch('https://614eabfab4f6d30017b482c4.mockapi.io/studentDetail/'+params.id)
    .then(response =>response.json())
    .then(data=>{
        setName(data.name)
        setEmail(data.email)
        setMobile(data.mobile)
        setDegree(data.degree)
        setDept(data.dept)
    })
    .catch((error)=>{
        console.log(error)
    })
}

  return (
    <div>
      <h1>Edit Student</h1>
      <div>
        <div className="form-group">
          <label for="exampleInputPassword1">Name</label>
          <input
            type="text"
            value={name}
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            value={email}
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Mobile</label>
          <input
            type="text"
            value={mobile}
            className="form-control"
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Degree</label>
          <input
            type="text"
            value={degree}
            className="form-control"
            onChange={(e) => setDegree(e.target.value)}
            placeholder="Degree"
          />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Department</label>
          <input
            type="text"
            value={dept}
            className="form-control"
            onChange={(e) => setDept(e.target.value)}
            placeholder="Department"
          />
        </div>
        <button className="btn btn-primary" onClick={handleSave}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default EditStudent;
