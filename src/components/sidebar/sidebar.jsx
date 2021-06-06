import React from "react";
import Car from "../../images/navbar/car.png"
export default function Sidebar(props) {
    let data = [
        {   Image: props.img,
            Jumlah: props.jumlah,
            Total: props.total,
            Nama: props.nama,
        }
    ]
    console.log(data)

    
return(
    <React.Fragment>
            <nav className="fixed w-1/4 h-full">
        <p className="font-extrablack text-2xl">Pesanan Saya</p>
<div style={{background:'#6455C2'}} className="rounded-xl mt-8 py-5 mr-5">
<p className="text-white font-medium px-3 top-0 text-sm">Nizar Rasyiid</p>
<h1 className="mt-4 px-5 font-bold text-white">Rp. 1.000.000,-</h1>
<p className="mt-5 px-5 font-medium text-sm text-white">378********8913</p>
</div>
    <div className="mt-5 bg-gray-100 rounded-lg w-50 px-3 mr-3 h-1/10 flex justify-around items-center">

        <ul>
            <div className="mb-5">
            {data.map((dt,i)=>(
                            dt.Jumlah*dt.Total === 0 ? "" :<li key={i} className="flex items-center justify-between w-full h-24 relative">  
                            <img className="rounded-xl w-2/12 h-8 " src={dt.Image} alt={dt.Image} />
                        <div className="flex">
                           {dt.Total}
                        </div>
                        <div>x</div>
                        <div className="font-bold">{props.nama}</div>
                        <div>
                            {dt.Jumlah * dt.Total}
                        </div>
                      </li>
                            
                        ))}
            </div>
        </ul>
        </div>

<div className="mt-5 flex justify-around items-center ">
<img src={Car} className="h-7 bg-gray-300 rounded-lg py-2 px-3" alt={Car} />
    <p className='font-bold text-sm'>Cilincing,Jakarta</p>
    <p className="text-xs text-gray-400">free</p>
 
</div>
    <div className="mt-5 bg-gray-100 rounded-lg w-50 px-3 mr-3 h-1/10 flex justify-between items-center">
    <p className='text-xs font-semibold'>Total
    
    </p>
    <p className='font-extrablack text-xl'>
    {props.jumlah * props.total}
    </p>
    </div>
    <div className="mt-5 bg-gray-100 rounded-lg w-50 px-3 mr-3 h-1/10 flex justify-center items-center">
    <button className="bg-yellow-300 px-3 rounded-lg font-bold py-3 w-full">Pesan </button>
    </div>

    </nav>
    </React.Fragment>
)
}