import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import DashBoard from "./Components/DashBoard";
import AddStudents from "./Components/AddStudents";
import AllStudents from "./Components/AllStudents";
import EditStudent from "./Components/EditStudent";
import axios from "axios";
export const StudentContext = React.createContext();

function App() {
  useEffect(() => {
    getData();
  }, []);

  // let getData = async() =>{
  //   await fetch('https://614eabfab4f6d30017b482c4.mockapi.io/studentDetail')
  //   .then(response => response.json())
  //   .then(res =>{
  //     console.log(res);
  //     setData(res)
  //   })
  //   .catch(err=>console.log(err))
  // }

  let getData = async () => {
    let d = await axios.get(
      "https://614eabfab4f6d30017b482c4.mockapi.io/studentDetail"
    );
    // .then(res=> {setData(res.data)})
    console.log(d.data);
    setData(d.data);
  };

  // let [data, setData] = useState([
  //   {
  //     name: "Pranit",
  //     degree: "B.E",
  //     dept: "IT",
  //     mobile: "2324324234",
  //     email: "pranit@gmail.com",
  //   },
  //   {
  //     name: "Pratik",
  //     degree: "B.E",
  //     dept: "IT",
  //     mobile: "2324324234",
  //     email: "pratik@gmail.com",
  //   },
  // ]);
  let [data, setData] = useState([]);

  let data1 = {
    earnings: "40,000",
    earnAnnual: "215,000",
    task: "50",
    pending: "18",
  };
  return (
    <>
      <Router>
        <StudentContext.Provider value={{ data, setData }}>
          <div style={{ display: "grid", gridTemplateColumns: "17% 80%" }}>
            <div>
              <Sidebar />
            </div>
            <div>
              <Routes>
                <Route
                  path="/DashBoard"
                  element={<DashBoard value={data1} />}
                />
                <Route path="/AllStudents" element={<AllStudents />} />
                <Route path="/AddStudents" element={<AddStudents />} />
                <Route path="/EditStudent/:id" element={<EditStudent />} />
                <Route path="/" element={<DashBoard value={data1} />} />
              </Routes>
            </div>
          </div>
        </StudentContext.Provider>
      </Router>
    </>
  );
}

export default App;
