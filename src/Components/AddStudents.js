import React, { useState, useContext, useEffect } from "react";
import { StudentContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddStudents() {
  // let context = useContext(StudentContext);
  let navigate = useNavigate();
  // console.log(context);
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [degree, setDegree] = useState("");
  let [dept, setDept] = useState("");

  // Using fetch method

  // let handleSave = async(e) => {
  //   e.preventDefault();
  //   await fetch("https://614eabfab4f6d30017b482c4.mockapi.io/studentDetail", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body:JSON.stringify({
  //       name,
  //       email,
  //       mobile,
  //       degree,
  //       dept,
  //     }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   navigate("/AllStudents")
  // };

  let handleSave = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(
        "https://614eabfab4f6d30017b482c4.mockapi.io/studentDetail",
        {
          name,
          email,
          mobile,
          degree,
          dept,
        }
      );
      console.log(res);
      navigate("/AllStudents");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h1>Add Student</h1>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Degree</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setDegree(e.target.value)}
            placeholder="Enter text"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Department</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            onChange={(e) => setDept(e.target.value)}
            placeholder="Enter Department"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Number</label>
          <input
            type="text"
            className="form-control"
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Enter Mobile number"
          />
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Email"
          />
        </div>
        <button className="btn btn-success" onClick={handleSave}>
          Add Students
        </button>
      </form>
    </div>
  );
}

export default AddStudents;
