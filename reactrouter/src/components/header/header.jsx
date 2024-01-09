import React from "react";
import "./header-styles.css";
import { NavLink } from "react-router-dom";

const HeaderComp = () => {
  return (
    <>
      <div>
        <br />
        <header>
          <div
            style={{ width: 1500, marginLeft: 100 }}
            className="flex flex-wrap row justify-content-between  container-fluid  "
          >
            <div className=" col-4 ">
              <div
                className="flex flex-wrap row"
                style={{ width: 190, marginTop: 0 }}
              >
                <p
                  className="col-6 p-2 mx-0 pl-4 "
                  style={{
                    marginLeft: 5,
                    fontSize: 40,
                    fontWeight: 500,
                  }}
                >
                  your
                </p>
                <p
                  className="col-6 p-2 mx-0 "
                  style={{
                    fontSize: 40,
                    fontWeight: 500,
                    color: "orange",
                    marginBottom: 0,
                  }}
                >
                  logo
                </p>
              </div>
            </div>
            <div className=" col-4  ">
              <ul
                className="list-unstyled flex row   "
                style={{ width: 300, marginTop: 10 }}
              >
                <li
                  className="col-3 text-capitalize hovertext"
                  style={{ fontSize: 15, fontWeight: 400 }}
                >
                  <NavLink
                    to=""
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      `${isActive ? "text-danger " : " text-dark"}`
                    }
                  >
                    home
                  </NavLink>
                </li>
                <li
                  className="col-3 text-capitalize "
                  style={{ fontSize: 15, fontWeight: 400 }}
                >
                  <NavLink
                    to="about"
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      `${isActive ? "text-danger " : " text-dark"}`
                    }
                  >
                    about
                  </NavLink>
                </li>
                <li
                  className="col-3 text-capitalize hovertext"
                  style={{ fontSize: 15, fontWeight: 400 }}
                >
                  <NavLink
                    to="contact"
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      `${isActive ? "text-danger " : " text-dark"}`
                    }
                  >
                    contact
                  </NavLink>
                </li>
                <li
                  className="col-3 text-capitalize  "
                  style={{ fontSize: 15, fontWeight: 400 }}
                >
                  <NavLink
                    to="github"
                    style={{ textDecoration: "none" }}
                    className={({ isActive }) =>
                      `${isActive ? "text-danger " : " text-dark"}`
                    }
                  >
                    github
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className=" col-4 ">
              <div className="row" style={{ width: 300 }}>
                <button
                  className=" col-6 p-0 py-2 shadow-sm text-capitalize"
                  style={{ width: 100, height: 40, marginRight: 10 }}
                >
                  login
                </button>
                <button
                  className=" col-6 p-0 bg-success-subtle  shadow-sm text-capitalize"
                  style={{ width: 100, height: 40 }}
                >
                  get started
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>
      <hr />
    </>
  );
};

export default HeaderComp;
