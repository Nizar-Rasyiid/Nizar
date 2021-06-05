import React from "react";
import banner from '../../images/header/banner.png'
export default function Banner(params) {
    return(
        <React.Fragment>
            <div style={{background: "#FFF7ED"}} className="flex justify-center items-center py-4 px-24 rounded-xl">
                <div className=" h-full">
                    <img className="w-44 h-24 " src={banner} alt={banner} />
                </div>
                    <div style={{color:"#FB6D3A"}} className=" ml-8 h-full font-poppins">
                        <h1 className="text-2xl font-extrablack">Promo Hari Ini</h1>
                        <h2 className="font-extrablack" >Perut Kenyang Hati Senang   </h2>
                    </div>
            </div>
            <div className="flex justify-center items-center">
                <ul className="flex items-center justify-between  w-1/12 mt-4">
                    <li>
                        <div className="w-2 h-2 rounded-full border bg-red-200"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border bg-red-200"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border bg-red-200"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full border bg-red-200"></div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}