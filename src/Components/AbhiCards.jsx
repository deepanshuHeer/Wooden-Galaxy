import React from "react";
import MainCards from "./MainCards";
import { Link } from "react-router-dom";
// import Adata from "./Adata.js"/;
import img1 from "../assets/Mask.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
// import Image_1 from "../assets/Images_1.png";
// import Images_2 from "../assets/Images_2.png";
// import Images_3 from "../assets/Images_3.png";
// import Images_4 from "../assets/Images_4.png";
// import Images_5 from "../assets/Images_5.png";
// import Images_6 from "../assets/Images_6.png";

export default function AbhiCards() {
  return (
    <>
      <div className="flex  relative w-full flex-wrap px-[5%] ">
        <div className="basis-full shrink-0 text-center">
          <h1 className="font-bold font-poppins text-[#333333]  text-[32px] leading-[48px]">Browse The Range</h1>
          <p className=" text-[20px] leading-[30px] text-center text-[#666666] font-normal ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/*  first div for three div display  */}
        <div className="flex text-center  mt-10">
          <Link to="/dining">
            <Cards  imgLink={img1} title={"Dining"}  />
          </Link>

          <Link to="/living">
            {" "}
            <Cards imgLink={img2} title={"Living"} />
          </Link>
          <Link to="/bedroom">
            <Cards imgLink={img3} title={"Bedroom"} />{" "}
          </Link>
        </div>
      </div>

      {/*  Maincards */}

      <div className=" p-6 font-bold text-4xl text-center ">
        <h1>Our Products</h1>
      </div>

      <div>
        <MainCards />
      </div>

      <div className="p-6 ">
        <button className="border border-[#b88e2f] text-[#b88e2f] font-poppins font-semibold text-[16px] leading-6 px-16 py-2 flex mx-auto ">
          Show More
        </button>
      </div>
    </>
  );
}

// this is function for first div
const Cards = ({ imgLink, title }) => {
  return (
    <div className="card space-y-3 flex flex-col basis-full  sm:basis-1/4  p-3 md:basis-0 flex-1 shrink-0  justify-evenly font-bold">
      <img src={imgLink} className=" rounded-lg  " alt="" />
      <div className="font-semibold text-[24px] text-[#333333] leading-9 text-center font-poppins ">{title}</div>
    </div>
  );
};

// for second div which is for product display

// const Cards_1 = ({ imgLink, title }) => {
// return (
// <div className="card flex flex-col  sm:basis-1/4 md:p-5 p-3 shrink-0 bg-slate-400 ">
{
  /*  */
}
{
  /* images  */
}
// <div>
{
  /* <img src={imgLink} className=" rounded-lg w-60 min-h-60  "  /> */
}
{
  /* </div> */
}
//

{
  /* text  */
}
// <div>
{
  /* <h1>Respira</h1> */
}
{
  /* <p> Outdoor bar table and stool </p> */
}
{
  /* <h1>Rp.500.000</h1> */
}
{
  /* </div> */
}

// </div>
//  );
// };
