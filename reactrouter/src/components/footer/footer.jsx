import React from "react";

const Footer = () => {
  return (
    <>
      <hr />
      <div className="row container " style={{ marginLeft: 100 }}>
        <div className="col-6">
          <div className="row">
            <div className=" col-4 ">
              <div className="flex flex-wrap row" style={{ width: 190 }}>
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
                    marginBottom: 10,
                  }}
                >
                  logo
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <table className="table ">
            <td>
              <th>resources </th>
              <tr>home</tr>
              <tr>about</tr>
            </td>

            <td>
              <th>follow us </th>
              <tr>hithub</tr>
              <tr>discord</tr>
            </td>
            <td>
              <th>legal </th>
              <tr>privacy policy</tr>
              <tr>terms and condition</tr>
            </td>
          </table>
        </div>
      </div>
    </>
  );
};

export default Footer;
