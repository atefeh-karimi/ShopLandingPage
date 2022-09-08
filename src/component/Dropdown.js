import React from "react";
import { FaUser, FaPen, FaSignInAlt } from "react-icons/fa";
function Dropdown() {
  return (
    <div>
      {" "}
      <div className="dropdown">
        <a
          style={{ color: "black" }}
          className="dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          href="/"
        >
          <FaUser size={30} />
          حساب کاربری
        </a>

        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a
              style={{ fontSize: "12px" }}
              className="dropdown-item  d-flex justify-content-between align-items-center"
              href="/"
            >
              <FaSignInAlt className="ms-2" size={20} />
              ورود به حساب کاربری
            </a>
          </li>

          <hr style={{ width: "80%", margin: "8px auto" }} />

          <li>
            <a
              style={{ fontSize: "12px" }}
              className="dropdown-item d-flex justify-content-start align-items-center"
              href="/"
            >
              <FaPen className="ms-2" size={20} />
              عضویت در سایت
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dropdown;
