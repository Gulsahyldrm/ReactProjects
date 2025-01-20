import React from "react";
import { Outlet } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h2>İletişim</h2>
      <Outlet />
    </div>
  );
}

export default Contact;
