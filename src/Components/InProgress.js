import React from 'react'
import Sidebar from './Sidebar'

const InProgress = () => {
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

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default InProgress