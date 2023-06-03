import React from 'react'
import Sidebar from './Sidebar'

const AcceptUser = () => {
    return (
        <div>
            <Sidebar />
            <div className="card  table-outer">
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
                                <tr>
                                    <td>Tiger Nixon</td>
                                    <td>System Architect</td>
                                    <td>Edinburgh</td>
                                    <td>61</td>
                                    <td>2011/04/25</td>
                                    <td>$320,800</td>
                                </tr>
                                <tr>
                                    <td>Garrett Winters</td>
                                    <td>Accountant</td>
                                    <td>Tokyo</td>
                                    <td>63</td>
                                    <td>2011/07/25</td>
                                    <td>$170,750</td>
                                </tr>
                                <tr>
                                    <td>Ashton Cox</td>
                                    <td>Junior Technical Author</td>
                                    <td>San Francisco</td>
                                    <td>66</td>
                                    <td>2009/01/12</td>
                                    <td>$86,000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AcceptUser