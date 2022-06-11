import React, { useEffect, useState } from 'react'
import EmployeeService from '../services/EmployeeService'
import { Link, useNavigate } from "react-router-dom";

const ListEmployeeComponent = () => {

  const [employees, setEmployees] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    }).catch(error => {
      console.log(error);
    })
  }

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then((res) => {
      getAllEmployees();
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
      <h2 className='text-center'>Employees List</h2>

      <Link to='/addEmployee' className="btn btn-primary mb-2" >Add Employee</Link>

      <div className="row">
        <table className='table table-striped table-bordered'>
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email_id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              employees.map(
                employee =>
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.emailId}</td>
                    <td>
                      <Link className="btn btn-info mx-2" to={`/addEmployee/${employee.id}`} >Update</Link>
                      <button className="btn btn-danger mx-2" onClick={() => { deleteEmployee(employee.id) }}>Delete</button>
                    </td>
                  </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListEmployeeComponent;