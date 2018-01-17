import React from 'react';

const Sidebar =()=>{
    return(
    <div className="sidebar">
    <div className="logo">
    <p>Logo Here..</p>
    </div>
    <a className="new-note" href="/notes">/
  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
    </a>

    <div className="signOut">
    <i className="fa fa-sign-out"></i>
    </div>

    </div>
    )
};

export default Sidebar;