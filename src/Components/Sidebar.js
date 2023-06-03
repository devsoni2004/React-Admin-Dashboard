/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSignOut } from 'react-auth-kit'
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
    const [style, setStyle] = useState("sidebar-wrapper");
    const signOut = useSignOut()
    const { isAuthenticated, item } = useAuth0();
    const changeStyle = () => {
        console.log("you just clicked");
        setStyle("sidebar-wrapper");
    };
    return (
        <div>
            <div className="sidebar-wrapper" data-simplebar="true" onClick={changeStyle} >
                <div className="sidebar-header">
                    <div>
                        <img src="assets/images/justapay.png" width="210" height="40" />
                    </div>
                    <div>
                        <div className="logo">
                        </div>
                    </div>
                    <div className="toggle-icon ms-auto">
                        <i className="bx bx-arrow-to-left" />
                    </div>
                </div>
                {/*navigation*/}
                <ul className="metismenu" id="menu">
                    <li>
                        <Link to="/">
                            <div className="parent-icon">
                                <i className="bx bx-home-circle" />
                            </div>
                            <div className="menu-title">Dashboard</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="../Merchantsdata">
                            <div className="parent-icon">
                                <i className="bx bx-data" />
                            </div>
                            <div>All Merchants Data</div>
                        </Link>
                    </li>

                    <li>
                        <Link to="../MerchantsUserData">
                            <div className="parent-icon">
                                <i className="bx bx-user-pin" />
                            </div>
                            <div>Merchants User Data</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="../AcceptUser">
                            <div className="parent-icon">
                                <i className="bx bx-bookmark" />
                            </div>
                            <div>Sucess Payout Users</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="../FaildUser">
                            <div className="parent-icon">
                                <i className="bx bx-table" />
                            </div>
                            <div>Faild Payout Users</div>
                        </Link>
                    </li>
                    <li>
                        <Link to="../InProgress">
                            <div className="parent-icon">
                                <i className="bx bx-table" />
                            </div>
                            <div>In Progress Users</div>
                        </Link>
                    </li>


                    <li>
                        <Link to="../PayoutUser">
                            <div className="parent-icon">
                                <i className="bx bxl-paypal" />
                            </div>
                            <div>Payout Users</div>
                        </Link>
                    </li>
                </ul>
                {/*end navigation*/}
            </div>
            <header>
                <div className="topbar d-flex align-items-center">
                    <nav className="navbar navbar-expand">
                        <div className="mobile-toggle-menu">
                            <i className="bx bx-menu" />
                        </div>
                        <div className="search-bar flex-grow-1">
                            <div className="position-relative search-bar-box">
                                <input
                                    type="text"
                                    className="form-control search-control"
                                    placeholder="Type to search..."
                                />{' '}
                                <span className="position-absolute top-50 search-show translate-middle-y">
                                    <i className="bx bx-search" />
                                </span>
                                <span className="position-absolute top-50 search-close translate-middle-y">
                                    <i className="bx bx-x" />
                                </span>
                            </div>
                        </div>
                        <div className="top-menu ms-auto">
                            <ul className="navbar-nav align-items-center">
                                <li className="nav-item mobile-search-icon">
                                    <a className="nav-link" href="#">
                                      
                                        <i className="bx bx-search" />
                                    </a>
                                </li>
                                <li className="nav-item dropdown dropdown-large">
                                    <a
                                        className="nav-link dropdown-toggle dropdown-toggle-nocaret"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {' '}
                                        <i className="bx bx-category" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <div className="row row-cols-3 g-3 p-3">
                                            <div className="col text-center">
                                                <div className="app-box mx-auto">
                                                    <i className="bx bx-group" />
                                                </div>
                                                <div className="app-title">Teams</div>
                                            </div>
                                            <div className="col text-center">
                                                <div className="app-box mx-auto">
                                                    <i className="bx bx-atom" />
                                                </div>
                                                <div className="app-title">Projects</div>
                                            </div>
                                            <div className="col text-center">
                                                <div className="app-box mx-auto">
                                                    <i className="bx bx-shield" />
                                                </div>
                                                <div className="app-title">Tasks</div>
                                            </div>
                                            <div className="col text-center">
                                                <div className="app-box mx-auto">
                                                    <i className="bx bx-notification" />
                                                </div>
                                                <div className="app-title">Feeds</div>
                                            </div>
                                            <div className="col text-center">
                                                <div className="app-box mx-auto">
                                                    <i className="bx bx-file" />
                                                </div>
                                                <div className="app-title">Files</div>
                                            </div>
                                            <div className="col text-center">
                                                <div className="app-box mx-auto">
                                                    <i className="bx bx-filter-alt" />
                                                </div>
                                                <div className="app-title">Alerts</div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown dropdown-large">
                                    <a
                                        className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {' '}
                                        <span className="alert-count">7</span>
                                        <i className="bx bx-bell" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a >
                                            <div className="msg-header">
                                                <p className="msg-header-title">Notifications</p>
                                                <p className="msg-header-clear ms-auto">Marks all as read</p>
                                            </div>
                                        </a>
                                        <div className="header-notifications-list">
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-group" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New Customers
                                                            <span className="msg-time float-end">14 Sec ago</span>
                                                        </h6>
                                                        <p className="msg-info">5 new user registered</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-cart-alt" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New Orders{' '}
                                                            <span className="msg-time float-end">2 min ago</span>
                                                        </h6>
                                                        <p className="msg-info">You have recived new orders</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-file" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            24 PDF File
                                                            <span className="msg-time float-end">19 min ago</span>
                                                        </h6>
                                                        <p className="msg-info">The pdf files generated</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-send" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Time Response{' '}
                                                            <span className="msg-time float-end">28 min ago</span>
                                                        </h6>
                                                        <p className="msg-info">5.1 min avarage time response</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-home-circle" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New Product Approved{' '}
                                                            <span className="msg-time float-end">2 hrs ago</span>
                                                        </h6>
                                                        <p className="msg-info">Your new product has approved</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-message-detail" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New Comments{' '}
                                                            <span className="msg-time float-end">4 hrs ago</span>
                                                        </h6>
                                                        <p className="msg-info">New customer comments recived</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-check-square" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Your item is shipped{' '}
                                                            <span className="msg-time float-end">5 hrs ago</span>
                                                        </h6>
                                                        <p className="msg-info">Successfully shipped your item</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-user-pin" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            New 24 authors
                                                            <span className="msg-time float-end">1 day ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            24 new authors joined last week
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="notify">
                                                        <i className="bx bx-door-open" />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Defense Alerts{' '}
                                                            <span className="msg-time float-end">2 weeks ago</span>
                                                        </h6>
                                                        <p className="msg-info">45% less alerts last 4 weeks</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a >
                                            <div className="text-center msg-footer">
                                                View All Notifications
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown dropdown-large">
                                    <a
                                        className="nav-link dropdown-toggle dropdown-toggle-nocaret position-relative"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {' '}
                                        <span className="alert-count">8</span>
                                        <i className="bx bx-comment" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <a >
                                            <div className="msg-header">
                                                <p className="msg-header-title">Messages</p>
                                                <p className="msg-header-clear ms-auto">Marks all as read</p>
                                            </div>
                                        </a>
                                        <div className="header-message-list">
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-1.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Daisy Anderson{' '}
                                                            <span className="msg-time float-end">5 sec ago</span>
                                                        </h6>
                                                        <p className="msg-info">The standard chunk of lorem</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-2.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Althea Cabardo{' '}
                                                            <span className="msg-time float-end">14 sec ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Many desktop publishing packages
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-3.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Oscar Garner{' '}
                                                            <span className="msg-time float-end">8 min ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Various versions have evolved over
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-4.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Katherine Pechon{' '}
                                                            <span className="msg-time float-end">15 min ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Making this the first true generator
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-5.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Amelia Doe{' '}
                                                            <span className="msg-time float-end">22 min ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Duis aute irure dolor in reprehenderit
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-6.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Cristina Jhons{' '}
                                                            <span className="msg-time float-end">2 hrs ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            The passage is attributed to an unknown
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-7.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            James Caviness{' '}
                                                            <span className="msg-time float-end">4 hrs ago</span>
                                                        </h6>
                                                        <p className="msg-info">The point of using Lorem</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-8.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Peter Costanzo{' '}
                                                            <span className="msg-time float-end">6 hrs ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            It was popularised in the 1960s
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-9.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            David Buckley{' '}
                                                            <span className="msg-time float-end">2 hrs ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            Various versions have evolved over
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-10.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Thomas Wheeler{' '}
                                                            <span className="msg-time float-end">2 days ago</span>
                                                        </h6>
                                                        <p className="msg-info">
                                                            If you are going to use a passage
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a className="dropdown-item" >
                                                <div className="d-flex align-items-center">
                                                    <div className="user-online">
                                                        <img
                                                            src="assets/images/avatars/avatar-11.png"
                                                            className="msg-avatar"
                                                            alt="user avatar"
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="msg-name">
                                                            Johnny Seitz{' '}
                                                            <span className="msg-time float-end">5 days ago</span>
                                                        </h6>
                                                        <p className="msg-info">All the Lorem Ipsum generators</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a >
                                            <div className="text-center msg-footer">View All Messages</div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="user-box dropdown">
                            <a
                                className="d-flex align-items-center nav-link dropdown-toggle dropdown-toggle-nocaret"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="assets/images/avatars/avatar-2.png"
                                    className="user-img"
                                    alt="user avatar"
                                />
                                <div className="user-info ps-3">

                                    <p className="user-name mb-0">  {isAuthenticated && (<h2>{item.email}</h2>)}</p>
                                    {isAuthenticated && (
                                        <div>
                                            <img src={item.picture} alt={item.name} />
                                            <h2>{item.name}</h2>
                                            <p>{item.email}</p>
                                        </div>
                                    )}
                                </div>
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <Link to="../Userprofile" className="dropdown-item">
                                        <i className="bx bx-user" />
                                        <span>Profile</span>
                                    </Link>

                                </li>
                                <li>
                                    <a className="dropdown-item" >
                                        <i className="bx bx-cog" />
                                        <span>Settings</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" >
                                        <i className="bx bx-home-circle" />
                                        <span>Dashboard</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" >
                                        <i className="bx bx-dollar-circle" />
                                        <span>Earnings</span>
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" >
                                        <i className="bx bx-download" />
                                        <span>Downloads</span>
                                    </a>
                                </li>
                                <li>
                                    <div className="dropdown-divider mb-0" />
                                </li>
                                <li>

                                    <a class="dropdown-item" ><i class='bx bx-log-out-circle'></i><span onClick={() => signOut()}>Logout</span></a>
                                    {/* <a className="dropdown-item" >
                                        <i className="bx bx-log-out-circle" />
                                        <button >Sign Out</button>
                                    </a> */}
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
            {
                /*end header */
            }
        </div>
    )
}

export default Sidebar