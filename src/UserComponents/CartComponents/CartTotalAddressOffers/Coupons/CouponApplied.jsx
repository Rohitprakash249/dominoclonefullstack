import React from "react";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch } from "react-redux";
export default function CouponApplied({ couponInfo }) {
  const dispatch = useDispatch();
  console.log();
  function removeCoupon() {
    console.log("working");
    dispatch({ type: "cart/deleteCoupon" });
  }
  return (
    <>
      <div className="bg-white shadow-md flex justify-between items-center pl-2 pr-4 py-4  rounded-sm">
        <div className="flex items-center justify-center ">
          <div className="px-3 flex ">
            <img
              className="h-[18px] pr-5"
              src="/icons/coupon.png"
              alt="couponimage"
            ></img>
          </div>
          <div>
            <div className="flex text-sm md:text-[0.9rem] gap-1">
              <p className=" text-black font-semibold">Offer Applied</p>
              <p className="bg-[#eef4fe] px-1 font-semibold">
                {couponInfo.couponCode}
              </p>
            </div>

            <p className="text-black text-xs md:text-[0.8rem]">
              Up to ₹{couponInfo.discount} Off on orders of ₹
              {couponInfo.minimumOrderValue} or more
            </p>
            <button className="text-[#4f8fe9] text-[0.8rem]  uppercase font-semibold">
              More Details
            </button>
          </div>
        </div>
        <button
          onClick={() => removeCoupon()}
          className="uppercase md:font-bold text-[#bababa] bg-white text-xs md:text-sm font-semibold px-1 rounded-sm md:py-[5px]"
        >
          <DeleteForeverIcon />
        </button>
      </div>
    </>
  );
}
// import React from "react";

// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
// export default function CouponApplied(props) {
//   return (
//     <>
//       <div className="bg-white shadow-md flex justify-between items-center pl-2 pr-4 py-4  rounded-sm">
//         <div className="flex items-center justify-center ">
//           <div className="px-3 flex ">
//             <img
//               className="h-[18px] pr-5"
//               src="/icons/coupon.png"
//               alt="couponimage"
//             ></img>
//           </div>
//           <div>
//             <div className="flex text-sm md:text-[0.9rem] gap-1">
//               <p className=" text-black font-semibold">Offer Applied</p>
//               <p className="bg-[#eef4fe] px-2 font-semibold">PIZZA30</p>
//             </div>

//             <p className="text-black text-xs md:text-[0.8rem]">
//               Up to ₹30 Off on orders of ₹200 or more
//             </p>
//             <button className="text-[#4f8fe9] text-[0.8rem]  uppercase font-semibold">
//               More Details
//             </button>
//           </div>
//         </div>
//         <button className="uppercase md:font-bold text-[#bababa] bg-white text-xs md:text-sm font-semibold px-1 rounded-sm md:py-[5px]">
//           <DeleteForeverIcon />
//         </button>
//       </div>
//     </>
//   );
// }
