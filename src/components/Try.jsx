import React, { useState } from "react";
import video from "../assets/video/jean.mp4";
import { Carousel } from "react-bootstrap";

function ConsolPrint() {
  const [Print, setPrint] = useState("");
  const myfunction = (e) => {
    e.preventDefault();
    console.log(Print); // alert(Print);
  };
  return (
    <div className="d-flex px-4 bg-dark flex-column justify-content-center mx-auto align-items-center min-vh-100 position-relative">
      <div className="row justify-content-center">
        <h1 className="text-center text-info">Adding Video On Page</h1>

        <div className="col-lg-4 d-none d-lg-flex">
          <iframe
            className="me-3"
            height="100%"
            width="100%"
            src="https://www.youtube.com/embed/-ft0D6pxiRc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div className="col-lg-4 d-none d-lg-flex">
          <video
            autoPlay="true"
            muted
            height="100%"
            width="100%"
            preload="metadata"
            poster="../assets/img/png/dragonz.png"
            controls
            src={video}
            allowfullscreen
          />
        </div>
        <div className="col-lg-4 d-none d-lg-flex">
          <iframe
            height="100%"
            width="100%"
            allowFullScreen
            src={video}
          ></iframe>
        </div>
        <Carousel className="d-lg-none">
          <Carousel.Item style={{ height: "400px" }}>
            <iframe
              className="me-3"
              height="100%"
              width="100%"
              src="https://www.youtube.com/embed/-ft0D6pxiRc"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            {" "}
            <video
              autoPlay="true"
              muted
              height="100%"
              width="100%"
              preload="metadata"
              poster="../assets/img/png/dragonz.png"
              controls
              src={video}
              allowfullscreen
            />
          </Carousel.Item>
          <Carousel.Item style={{ height: "400px" }}>
            {" "}
            <iframe
              height="100%"
              width="100%"
              allowFullScreen
              src={video}
            ></iframe>
          </Carousel.Item>
        </Carousel>
        <form
          action="search"
          onSubmit={myfunction}
          className="bg-black z_index2 px-4 py-3 w-25 "
        >
          <label htmlFor="search" className="d-flex gap-4">
            <input
              value={Print}
              onChange={(e) => setPrint(e.target.value)}
              className="w-100 border-0 px-2 py-1 fw-bold text-bg-danger"
              style={{ outline: "none" }}
              type="text"
              placeholder="Type here To print in consol .........."
            />
            <button
              type="submit"
              className=" bg-danger text-white fw-bold py-2 px-3 on_clickbtn border-0"
            >
              Search
            </button>
          </label>
        </form>
      </div>
    </div>
  );
}
export default ConsolPrint;
