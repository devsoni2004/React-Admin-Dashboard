import React from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import { useState, useEffect } from 'react'
import { useDownloadExcel } from 'react-export-table-to-excel'
import { useRef } from 'react'
import { utils, read } from 'xlsx'
import { Modal, ModalBody, ModalHeader } from 'reactstrap'
import { addmerchantsdetail } from './Service/Api';

const Merchantsdata = () => {
    const [ExcelData, setExcelData] = useState([]);
    const [merchants, setmerchants] = useState([]);
    const [modal, setmodal] = useState(false);
    const [view, setview] = useState(false);
    useEffect(() => {

        axios.get('https://exuberant-fatigues-jay.cyclic.app/SinghTek/merchants', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDc1Y2ZmMDAzOWM1NDMzMjhhMmQyZWIiLCJpYXQiOjE2ODU1MTIwOTJ9.y6qGj1pIybV8rLXBDSsR7P_kU6WxT4nuXK9Zw0Ae9MI'
            },
        })
            .then(function (response) {
                console.log(response);
                setmerchants(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);

    const tableRef = useRef(null);
    //--------------------------Export Excel Sheet Data -------------------------------
    const { onDownload } = useDownloadExcel({
        currentTableRef: tableRef.current,
        filename: "All Merchant Data.xls",
        sheet: "All Merchant Data.xls",
    });

    //--------------------------Import Excel Sheet Data -------------------------------f
    // const file_type = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    // const handlechange = (e) => {
    //     const selected_file = e.target.files[0];
    //     if (selected_file) {
    //         if (selected_file && file_type.includes(selected_file.type)) {
    //             let reader = new FileReader();
    //             reader.onload = (e) => {
    //                 const workbook = read(e.target.result);
    //                 const sheet = workbook.SheetNames;
    //                 if (
    //                     sheet.length
    //                 ) {
    //                     const data = utils.sheet_to_json(workbook.Sheets[sheet[0]]);
    //                     console.log(data)
    //                     setmerchants(merchants => merchants.concat(data))

    //                 }
    //             }
    //             reader.readAsArrayBuffer(selected_file)
    //         } else {

    //             setExcelData([])
    //         }
    //     }
    // }
 
    const [merchant_name, setmerchant_name] = useState("");
    const [business_name, setbusiness_name] = useState("");
    const [business_type, setbusiness_type] = useState("");
    const [business_category, setbusiness_category] = useState("");
    const [business_sub_category, setbusiness_sub_category] = useState("");
    const [company_expenditure, setcompany_expenditure] = useState("");
    const [website, setwebsite] = useState("");
    const [bank_name, setbank_name] = useState("");
    const [bank_account_number, setbank_account_number] = useState("");
    const [bank_ifsc_code, setbank_ifsc_code] = useState("");
    const [address, setaddress] = useState("");
    const [pincode, setpincode] = useState("");
    const [city, setcity] = useState("");
    const [state, setstate] = useState("");
    const [country, setcountry] = useState("");
    const [company_pan_card, setcompany_pan_card] = useState("");
    const [company_gst, setcompany_gst] = useState("");
    const [bank_statement, setbank_statement] = useState("");
    const handleChange = (e) => {
        switch (e.target.name) {
            case "merchant_name":
                setmerchant_name(e.target.value);
                break;
            case "business_name":
                setbusiness_name(e.target.value);
                break;
            case "business_type":
                setbusiness_type(e.target.value);
                break;
            case "business_category":
                setbusiness_category(e.target.value);
                break;
            case "business_sub_category":
                setbusiness_sub_category(e.target.value);
                break;
            case "company_expenditure":
                setcompany_expenditure(e.target.value);
                break;
            case "website":
                setwebsite(e.target.value);
                break;
            case "bank_name":
                setbank_name(e.target.value);
                break;
            case "bank_account_number":
                setbank_account_number(e.target.value);
                break;
            case "bank_ifsc_code":
                setbank_ifsc_code(e.target.value);
                break;
            case "address":
                setaddress(e.target.value);
                break;
            case "pincode":
                setpincode(e.target.value);
                break;
            case "city":
                setcity(e.target.value);
                break;
            case "state":
                setstate(e.target.value);
                break;
            case "country":
                setcountry(e.target.value);
                break;
            case "company_pan_card":
                setcompany_pan_card(e.target.files[0]);
                break;
            case "company_gst":
                setcompany_gst(e.target.files[0]);
                break;
            case "bank_statement":
                setbank_statement(e.target.files[0]);
                break;
            default: ;

        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(merchant_name, business_name, business_type)
        const userData = {
            merchant_name,
            business_name,
            business_type,
            website,
            business_sub_category,
            bank_name,
            bank_account_number,
            bank_ifsc_code,
            pincode,
            business_category,
            company_expenditure,
            state,
            country,
            city,
            company_pan_card,
            company_gst,
            bank_statement,
            address
        }
        console.log(userData)

        const result = await addmerchantsdetail(userData);
        console.log(result)

    };
    return (
        <div>
            < Sidebar />
            <Modal size='lg' isOpen={modal} toggle={() => setmodal(!modal)} className="custom-modal-style">

                <ModalHeader toggle={() => setmodal(!modal)} className="text-center">
                    Add Merchants Details
                </ModalHeader>
                <ModalBody>
                    <div className="form-body">
                        <form className="row g-3" encType="multipart/form-data" onSubmit={handleSubmit}>
                            <div className="col-sm-6">
                                <label className="form-label">
                                    Merchant Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="merchant_name"
                                    placeholder="Enter Merchant Name"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">
                                    Business Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    // id="customername"
                                    name="business_name"
                                    required
                                    placeholder="Enter Business Name"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">
                                    Business Type
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="business_type"
                                    placeholder="Enter Business Type"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label
                                    className="form-label"
                                >
                                    Business Category
                                </label>
                                <div className="mb-3">
                                    <select
                                        className="single-select select2-hidden-accessible form-control"
                                        data-select2-id={1}
                                        tabIndex={-1}
                                        aria-hidden="true"
                                        name="business_category"
                                        onChange={handleChange}
                                    >
                                        <option value="Singhtek Users" data-select2-id={1}>
                                            Select
                                        </option>
                                        <option value="Singhtek Users" data-select2-id={2}>
                                            Singhtek Users
                                        </option>
                                        <option value="Merchants" data-select2-id={3}>
                                            Merchants
                                        </option>

                                    </select>
                                    <span
                                        className="select2 select2-container select2-container--bootstrap4 select2-container--below select2-container--focus"
                                        dir="ltr"
                                        data-select2-id={2}
                                    >
                                        <span className="selection">
                                            <span
                                                className="select2-selection select2-selection--single"
                                                role="combobox"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                tabIndex={0}
                                                aria-labelledby="select2-2yzs-container"
                                            >
                                                <span
                                                    className="select2-selection__rendered"
                                                    id="select2-2yzs-container"
                                                    role="textbox"
                                                    aria-readonly="true"
                                                    title="Afghanistan"
                                                >

                                                </span>
                                                <span className="select2-selection__arrow" role="presentation">
                                                    <b role="presentation" />
                                                </span>
                                            </span>
                                        </span>
                                        <span className="dropdown-wrapper" aria-hidden="true" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label
                                    className="form-label"
                                >
                                    Business Sub-Category
                                </label>
                                <div className="mb-3">
                                    <select
                                        className="single-select select2-hidden-accessible form-control"
                                        data-select2-id={1}
                                        tabIndex={-1}
                                        aria-hidden="true"
                                        name="business_sub_category"
                                        onChange={handleChange}
                                    >
                                        <option value="Singhtek Users" data-select2-id={1}>
                                            Select
                                        </option>
                                        <option value="Singhtek Users" data-select2-id={2}>
                                            Singhtek Users
                                        </option>
                                        <option value="Merchants" data-select2-id={3}>
                                            Merchants
                                        </option>

                                    </select>
                                    <span
                                        className="select2 select2-container select2-container--bootstrap4 select2-container--below select2-container--focus"
                                        dir="ltr"
                                        data-select2-id={2}
                                    >
                                        <span className="selection">
                                            <span
                                                className="select2-selection select2-selection--single"
                                                role="combobox"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                tabIndex={0}
                                                aria-labelledby="select2-2yzs-container"
                                            >
                                                <span
                                                    className="select2-selection__rendered"
                                                    id="select2-2yzs-container"
                                                    role="textbox"
                                                    aria-readonly="true"
                                                    title="Afghanistan"
                                                >

                                                </span>
                                                <span className="select2-selection__arrow" role="presentation">
                                                    <b role="presentation" />
                                                </span>
                                            </span>
                                        </span>
                                        <span className="dropdown-wrapper" aria-hidden="true" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label
                                    className="form-label"
                                >
                                    Company Expenditure
                                </label>
                                <div className="mb-3">
                                    <select
                                        className="single-select select2-hidden-accessible form-control"
                                        data-select2-id={1}
                                        tabIndex={-1}
                                        aria-hidden="true"
                                        name="company_expenditure"
                                        onChange={handleChange}
                                    >
                                        <option value="Singhtek Users" data-select2-id={1}>
                                            Less Then
                                        </option>
                                        <option value="Singhtek Users" data-select2-id={2}>
                                            Singhtek Users
                                        </option>
                                        <option value="Merchants" data-select2-id={3}>
                                            Merchants
                                        </option>

                                    </select>
                                    <span
                                        className="select2 select2-container select2-container--bootstrap4 select2-container--below select2-container--focus"
                                        dir="ltr"
                                        data-select2-id={2}
                                    >
                                        <span className="selection">
                                            <span
                                                className="select2-selection select2-selection--single"
                                                role="combobox"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                tabIndex={0}
                                                aria-labelledby="select2-2yzs-container"
                                            >
                                                <span
                                                    className="select2-selection__rendered"
                                                    id="select2-2yzs-container"
                                                    role="textbox"
                                                    aria-readonly="true"
                                                    title="Afghanistan"
                                                >

                                                </span>
                                                <span className="select2-selection__arrow" role="presentation">
                                                    <b role="presentation" />
                                                </span>
                                            </span>
                                        </span>
                                        <span className="dropdown-wrapper" aria-hidden="true" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">
                                    Website
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    // id="productCode"
                                    name="website"
                                    required
                                    placeholder="Enter Website URL"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">
                                    Bank Name
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="bank_name"
                                    placeholder="Enter Bank Name"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">
                                    Bank Account Number
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="bank_account_number"
                                    placeholder="Enter Bank Account Number"
                                    required
                                    onChange={handleChange}

                                />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">
                                    Ifsc Code
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="bank_ifsc_code"
                                    placeholder="Enter Ifsc Code"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <ModalHeader>
                                Busness Address
                            </ModalHeader>
                            <div className="col-sm-6">
                                <label className="form-label">
                                    Address
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="address"
                                    placeholder="Enter Address"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">
                                    Pin Code
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="pincode"
                                    placeholder="Enter Address"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">
                                    Pin Code
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="pincode"
                                    placeholder="Enter Address"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">
                                    City
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="city"
                                    placeholder="Enter City"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label className="form-label">
                                    State
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="state"
                                    placeholder="Enter State"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-sm-6">
                                <label
                                    className="form-label"
                                >
                                    Select Country
                                </label>
                                <div className="mb-3">
                                    <select
                                        className="single-select select2-hidden-accessible form-control"
                                        data-select2-id={1}
                                        tabIndex={-1}
                                        aria-hidden="true"
                                        name="country"
                                        onChange={handleChange}
                                    >
                                        <option value="Singhtek Users" data-select2-id={1}>
                                            Select
                                        </option>
                                        <option value="India" data-select2-id={2}>
                                            India
                                        </option>
                                        <option value="Dubai" data-select2-id={3}>
                                            Dubai
                                        </option>

                                    </select>
                                    <span
                                        className="select2 select2-container select2-container--bootstrap4 select2-container--below select2-container--focus"
                                        dir="ltr"
                                        data-select2-id={2}
                                    >
                                        <span className="selection">
                                            <span
                                                className="select2-selection select2-selection--single"
                                                role="combobox"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                                tabIndex={0}
                                                aria-labelledby="select2-2yzs-container"
                                            >
                                                <span
                                                    className="select2-selection__rendered"
                                                    id="select2-2yzs-container"
                                                    role="textbox"
                                                    aria-readonly="true"
                                                    title="Afghanistan"
                                                >

                                                </span>
                                                <span className="select2-selection__arrow" role="presentation">
                                                    <b role="presentation" />
                                                </span>
                                            </span>
                                        </span>
                                        <span className="dropdown-wrapper" aria-hidden="true" />
                                    </span>
                                </div>
                            </div>
                            <ModalHeader>
                                Upload Your Docs
                            </ModalHeader>
                            <div className="col-sm-6">

                                <label for="formFileMultiple" className="form-label">Company Pancard</label>
                                <input className="form-control" type="file" id="formFileMultiple" name="ompany_pan_card"
                                />

                            </div>
                            <div className="col-sm-6">

                                <label for="formFileMultiple" className="form-label">Company Gst</label>
                                <input className="form-control" type="file" id="formFileMultiple" name="company_gst"
                                />

                            </div>
                            <div className="col-12">
                                <label for="formFileMultiple" className="form-label">Bank Statement</label>
                                <input className="form-control" type="file" id="formFileMultiple" name="bank_statement"
                                />
                            </div>

                            <div className="col-12">
                                <div className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="flexSwitchCheckChecked"
                                    />
                                    <label
                                        className="form-check-label"
                                    >
                                        I read and agree to Terms &amp; Conditions
                                    </label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-light">
                                        <i className="bx bx-user" />
                                        Sign up
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </ModalBody>
            </Modal>

            <Modal size='lg' isOpen={view} toggle={() => setview(!view)}>
                <ModalHeader toggle={() => setview(!view)} className="text-center">
                    Show Merchants Details
                </ModalHeader>
                <ModalBody>
                    <table className="table mb-0">
                        <thead>
                            <tr>
                                <th scope="col">Merchant Name</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Mobile</th>
                                <th scope="col">Password</th>
                                <th scope="col">Texn. Limit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                merchants.map(item => (
                                    <tr>
                                        <td>{item.business_detail.merchant_name}</td>
                                        <td>{item.user_name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.mobile}</td>
                                        <td>{item.beneficiary_code}</td>
                                        <td>{item.amount}</td>
                                    </tr>
                                )
                                )
                            }
                        </tbody>
                    </table>
                </ModalBody>
            </Modal>
            <div className="card  table-outer">
                <div className="card-body">
                    <div className="button-outers d-flex align-item-center">
                        <button className="btn btn-light buttons-excel buttons-html5 export" onClick={onDownload} tabindex="0" aria-controls="example2" type="button"><span>Export Data Excel</span></button>
                        <div className="d-grid add-btn">
                            <button className="addmerchants  btn-light" onClick={() => setmodal(true)}>+ Add Merchants</button>
                        </div>


                    </div>

                    <br />
                    <div className="table-responsive">
                        <table id="example2" className="table table-striped table-bordered" ref={tableRef}>
                            <thead>
                                <tr>
                                    <th>SinghTek Id</th>
                                    {/* <th>id</th> */}
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Merchant Name</th>
                                    <th>Mobile No</th>
                                    <th>Business Category</th>
                                    <th>Website</th>
                                    <th>View Profile</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    merchants.map(item => (
                                        <tr>
                                            <td>  {item.singhtek_id} </td>
                                            <td>  {item.user_name}</td>
                                            <td>  {item.email} </td>
                                            <td>  {item.business_detail.merchant_name} </td>
                                            <td>  {item.mobile}</td>
                                            <td>  {item.business_detail.business_category} </td>
                                            <td>  {item.business_detail.website} </td>
                                            <td>
                                                <div className="d-grid view-btn">
                                                    <button className="btn btn-light" onClick={() => setview(true)}>View All</button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                    )
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Merchantsdata