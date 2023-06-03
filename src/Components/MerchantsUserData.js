import React from 'react'
import Sidebar from './Sidebar'

import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
const MerchantsUserData = () => {
    const [users, setusers] = useState([]);
    const [mer, setmer] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        axios.get('https://stekpayout.onrender.com/users', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
                setusers(response.data);
                setIsLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setIsLoading(false);
            });
    }, []);

    const handle = (item) => {
        setmer(true)
        axios.get('https://stekpayout.onrender.com/users', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(function (response) {
                console.log(response);
                setusers(response.data);
                setIsLoading(false);
            })
            .catch(function (error) {
                console.log(error);
                setIsLoading(false);
            });
        setusers()
    };
    return (
        <div>
            <Sidebar />
            <div className="card  table-outer">
                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Select Merchants</button>
                    <ul className="dropdown-menu">
                        {users.map(item => (
                            <li><Link className="dropdown-item" onclick={handle(item.id)}>{item.beneficiaryName}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table id="example2" className="table table-striped table-bordered">
                            <thead>
                                <tr>
                                    <th>Sr Number</th>
                                    <th>Customer Code</th>
                                    <th>Customer Name</th>
                                    <th>Debit Account Number</th>
                                    <th>Dealer Code</th>
                                    <th>Beneficiary Name</th>
                                    <th>Credit Account No</th>
                                    <th>Beneficiary Branch Code</th>
                                    <th>Amount</th>
                                    <th>Remarks 1.</th>
                                    <th>Txn. Status</th>
                                    <th>Utr No</th>
                                </tr>
                            </thead>
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MerchantsUserData