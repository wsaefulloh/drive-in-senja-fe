import React from "react";
import { withRouter } from "next/router";
// core components
import AdminNavbar from "components/Navbars/HomeNavbar.js";
import AdminFooter from "components/Footers/HomeFooter.js";

function Admin({ children }) {
  return (
    <>
      <div className="main-content">
        <AdminNavbar />
        {children}
        <AdminFooter />
      </div>
    </>
  );
}

export default withRouter(Admin);
