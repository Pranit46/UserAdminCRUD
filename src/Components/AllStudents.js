import React, { useContext, useState,useEffect } from "react";
import { StudentContext } from "../App";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AllStudents() {
  useEffect(() => {
    getData();
  },[]);

  let navigate = useNavigate();
  let [data,setData] = useState([])

  // show data using fetch
  // let getData = async() =>{
  //   await fetch('https://614eabfab4f6d30017b482c4.mockapi.io/studentDetail')
  //   .then(response => response.json())
  //   .then(res =>{
  //     console.log(res);
  //     context.setData(res)
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })
  // }

  let getData = async() =>{
    let d = await axios.get('https://614eabfab4f6d30017b482c4.mockapi.io/studentDetail')
          // .then(res=> {setData(res.data)})
          console.log(d.data);
          setData(d.data)
  }

  // const context = useContext(StudentContext);

  let handleDelete = async(id) => {
    // // Below method is also use for delete but here I am using splice method to delete the item
    // context.data.splice(context.data.indexOf(e), 1);
    // context.setData([...context.data]);

    // // (43-46) Below method is also use for delete but here I am using filter method to delete the item
    // // let details = context.data.filter((ele) => {
    // //   return e !== ele;
    // // });
    // // context.setData([...context.data]);

    // (49-58) Delete user using fetch method 
    // await fetch('https://614eabfab4f6d30017b482c4.mockapi.io/studentDetail/'+id,{
    //   method:'DELETE',
    // })
    // .then(response => response.json())
    // .then(data =>{
    //   getData()
    // })
    // .catch((error) =>{
    //   console.log(error);
    // })

    // Method to delete using axios
    try{
        let res = await axios.delete('https://614eabfab4f6d30017b482c4.mockapi.io/studentDetail/'+id);
        console.log(res);
        getData()
    }
    catch(err){
      console.log(err);
    }
  };


  return (
    <div>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Name</th>
            <th scope="col">Qulaification</th>
            <th scope="col">Department</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Email</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <>
                <tr key={i}>
                  <th scope="row">{i + 1}</th>
                  <td>{e.name}</td>
                  <td>{e.degree}</td>
                  <td>{e.dept}</td>
                  <td>{e.mobile}</td>
                  <td>{e.email}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate("/EditStudent/"+e.id)}
                    >
                      Edit
                    </button>
                    &nbsp;
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(e.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllStudents;
