import React from "react";

const HomePage = () => {
  return (
    <>
      <div style={{ marginLeft: 50, marginTop: 30 }} className="row container ">
        <div className="col-6 ">
          <img
            src="https://i.ibb.co/5BCcDYB/Remote2.png"
            alt="image one"
            height="70%"
            style={{ backgroundBlendMode: "multiply" }}
          />
        </div>
        <div className="col-6">
          <h1>Lorem Ipsum</h1>
          <h3 style={{ marginLeft: 50 }}>
            dolor sit amet consectetur adipisicing elit. Unde ab pariatur porro,
            similique repudiandae cumque. Architecto harum totam non adipisci.
          </h3>
          <br />
          <span className="text-bg-primary shadow-sm p-2 rounded-2 m-4 ">
            downlod now
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <img
            src="https://i.ibb.co/2M7rtLk/Remote1.png"
            alt=" image2"
            height="60%"
          />
        </div>
        <div className="col-4"></div>
      </div>
    </>
  );
};

export default HomePage;
