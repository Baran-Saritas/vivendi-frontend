import React, { useEffect } from "react";
import CustomCard from "../component/card";
import Hcard from "../component/hcard";
import CategoryCarousel from "../component/mainCarousel";
import CustomCarousel from "../component/carousel";
import { getCircularProgressUtilityClass } from "@mui/material";
import { useDispatch } from "react-redux";

export default function Main() {
  let arr = ["item-span-3", "item-span-4", "item-span-5", "item-span-6"].sort(
    () => Math.random() - 0.5
  );
  function setSpan(index) {
    if (index % 4 === 0) {
      arr = ["item-span-3", "item-span-4", "item-span-5", "item-span-6"];
      arr = arr.sort(() => Math.random() - 0.5);
    }
    let res = arr[arr.length - 1];
    arr.pop();
    return res;
  }

  return (
    <div className="main">
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <div style={{ width: "80%" }}>
          <h3 style={{ fontWeight: "500" }}>Campaigns</h3>
        </div>
      </div>
      <div className="categoryCarousel-div">
        <div className="Carousel-div">
          <CategoryCarousel />
        </div>
      </div>
      <div
        className="b-carousel-div"
        style={{
          width: "100%",
          display: "flex",
          marginTop: "20px",
          justifyContent: "center",
        }}
      >
        <div
          className="b-carousel-side-div"
          style={{ width: "90%", borderRadius: "10px" }}
        >
          <CustomCarousel />
        </div>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",

          marginTop: "20px",
        }}
      >
        <div style={{width:"90%" , display:"flex" , flexDirection:"row",columnGap: "20px"}}>
          <div style={{ overflow: "hidden", width: "500px" }}>
            <a href="">
              <div className="h-card-body">
                <div className="h-card-img">
                  <img
                    style={{ width: "100%", objectFit: "cover" }}
                    src="https://img.made.com/image/upload/c_pad,d_madeplusgrey.svg,dpr_2,f_auto,q_auto:good,w_350/v1/mws-critical/d8179eb5-65ed-4bfd-9a6a-1e8bc0c9e0e9_Homepage_wK11_Morland_1280x1536.jpg"
                    alt=""
                  />
                </div>
                <div className="h-card-info">
                  {" "}
                  <p>
                    {" "}
                    <strong> Living Room </strong>
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div style={{ overflow: "hidden", width: "500px" }}>
            <a href="">
              <div className="h-card-body">
                <div className="h-card-img">
                  <img
                    style={{ width: "100%", objectFit: "cover"  }}
                    src="./image/bedroom_img.jpg"
                    alt=""
                  />
                </div>
                <div className="h-card-info">
                  {" "}
                  <p>
                    {" "}
                    <strong> Bedroom </strong>
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div style={{ overflow: "hidden", width: "500px" }}>
            <a href="">
              <div className="h-card-body">
                <div className="h-card-img">
                  <img
                    style={{ width: "100%", objectFit: "cover"  }}
                    src="./image/Diningroom.jpg"
                    alt=""
                  />
                </div>
                <div className="h-card-info">
                  {" "}
                  <p>
                    {" "}
                    <strong> Dining Room </strong>
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* 
      <div className="img-con">
        {items.map((item, i) => (
          <div className={setSpan(i)}>
            <CustomCard />
          </div>
        ))}
        </div>  */}
    </div>
  );
}
let items = [
  {
    item: "https://s3.us-west-1.amazonaws.com/vivendi-image/f5bcad34-306c-4b7b-b32e-6f850041387b.png",
  },
  {
    item: "https://s3.us-west-1.amazonaws.com/vivendi-image/f5bcad34-306c-4b7b-b32e-6f850041387b.png",
  },
  {
    item: "https://s3.us-west-1.amazonaws.com/vivendi-image/f5bcad34-306c-4b7b-b32e-6f850041387b.png",
  },
  {
    item: "https://s3.us-west-1.amazonaws.com/vivendi-image/f5bcad34-306c-4b7b-b32e-6f850041387b.png",
  },
  {
    item: "https://s3.us-west-1.amazonaws.com/vivendi-image/f5bcad34-306c-4b7b-b32e-6f850041387b.png",
  },
  {
    item: "https://s3.us-west-1.amazonaws.com/vivendi-image/f5bcad34-306c-4b7b-b32e-6f850041387b.png",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
  {
    item: "/image/okyo.jpg",
  },
];

function Main2() {
  return (
    <div className="main">
      {/*
      <div className="categoryCarousel-div">
        <div className="Carousel-div">
          <CategoryCarousel />
        </div>
      </div>
      <div
        className="b-carousel-div"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <div className="b-carousel-side-div" style={{ width: "70%" }}>
          <CustomCarousel />
        </div>
      </div>

      <h1 style={{ textAlign: "center", margin: "50px 0 30px" }}>
        Best Sellers
      </h1>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div
          className="all-best-sellers"
          style={{
            width: "80%",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <div
          className="category-divs"
          style={{
            width: "80%",
            display: "flex",
            gap: "25px",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <div className="asd" style={{ width: "50%", overflow: "hidden" }}>
            <Hcard />
          </div>
          <div className="asd" style={{ width: "50%", overflow: "hidden" }}>
            <Hcard />
          </div>
        </div>
      </div>

      <h1 style={{ textAlign: "center", margin: "50px 0 30px" }}>
        Seller's Choices
      </h1>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div
          className="all-best-sellers"
          style={{
            width: "80%",
            flexDirection: "row",
            display: "flex",
          }}
        >
          <CustomCard />
          <CustomCard />
          <CustomCard />
          <CustomCard />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <div
          className="category-divs"
          style={{
            width: "80%",
            display: "flex",
            gap: "25px",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <div className="asd" style={{ width: "50%", overflow: "hidden" }}>
            <Hcard />
          </div>
          <div className="asd" style={{ width: "50%", overflow: "hidden" }}>
            <Hcard />
          </div>
        </div>
      </div>
        */}
    </div>
  );
}
