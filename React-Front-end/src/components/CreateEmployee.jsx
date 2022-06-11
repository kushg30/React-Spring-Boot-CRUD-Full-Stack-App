import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

export default function CreateEmployee() {

    const { id } = useParams();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        if (id) {
            EmployeeService.getEmployeeById(id).then((res) => {
                let employee = res.data;

                setFirstName(employee.firstName);
                setLastName(employee.lastName);
                setEmailId(employee.emailId);
            }).catch((error) => {
                console.log(error);
            })
        } else {
            return;
        }
    }, [])

    const saveOrUpdateEmployee = (event) => {
        event.preventDefault();
        const employee = { firstName, lastName, emailId };
        console.log('employee => ' + JSON.stringify(employee));


        if (id) {
            EmployeeService.updateEmployee(employee, id).then(res => {
                navigate('/employees');
            }).catch(error => {
                console.log(error);
            })
        }
        else {
            EmployeeService.createEmployee(employee).then(res => {
                navigate('/employees');
            }).catch(error => {
                console.log(error);
            })
        }
    }
    function getTitle() {
        if (id) {
            return <h3 className='text-center'>Update Employee</h3>
        } else {
            return <h3 className='text-center'>Add Employee</h3>
        }
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {
                        getTitle()
                    }
                    <div className="card-body">
                        <form action="">
                            <div className="form-group mb-2">
                                <label className='form-label'>First Name : </label>
                                <input placeholder="Enter First Name" name="firstName" className="form-control"
                                    value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label className='form-label'>Last Name : </label>
                                <input placeholder="Enter Last Name" name="lastName" className="form-control"
                                    value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label className='form-label'>Email Id : </label>
                                <input placeholder="Enter Email Address" name="emailId" className="form-control"
                                    value={emailId} onChange={(e) => setEmailId(e.target.value)} />
                            </div>

                            <button className="btn btn-success my-3" onClick={(e) => saveOrUpdateEmployee(e)} >Save</button>
                            <Link to='/employees' className="btn btn-danger mx-2">Cancel</Link>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    )
}
