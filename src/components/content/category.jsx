import axios from "axios"
import React from "react"
import {NavLink,useParams} from 'react-router-dom'
import Star from '../../images/navbar/star.png'
import Heart from '../../images/navbar/heart.png'
import Keranjang from '../../images/navbar/keranjang.png'
import Popup from 'reactjs-popup'
export default function Category(props) {
    const [img,setImg] = React.useState([])
    const [jumlah,setJumlah] = React.useState([])
    const [total,setTotal] = React.useState([])
    const [nama,setNama] = React.useState([])
    const getSemua = (image,jumlahs,totals,namas)=>{
        setImg(image)
        setJumlah(jumlahs)
        setTotal(totals)
        setNama(namas)
    }
    props.getSemua(img,jumlah,total,nama)

    const[jumlahStok,setJumlahStok] = React.useState(0);

    const incrementNumber = () => {
        setJumlahStok(jumlahStok + 1)
    }   
     const decrementNumber = () => {
        setJumlahStok(jumlahStok - 1)
    }

    const [minuman,setMinuman] = React.useState([])
    const getMinuman = async() => {
        try {
            const url3 = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/8?page=3`
            let hasil3 = await axios.get(url3)
            console.log(hasil3.data.data)
            setMinuman(hasil3.data.data)
        } catch (error) {
            console.log(error)
        }
    };
    React.useEffect(() => {
        getMinuman();
    },[]);
    const [makanan,setMakanan] = React.useState([])
    const getMakanan = async() => {
        try {
            const url1 = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/8`
            let hasil1 = await axios.get(url1)
            console.log(hasil1.data.data)
            setMakanan(hasil1.data.data)
        } catch (error) {
            console.log(error)
        }
    };
    React.useEffect(() => {
        getMakanan();
    },[]);

    const[pizza,setPizza] = React.useState([])
    const getPizza = async() => {
        try {
            const url2 = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/8?page=2`
            let hasil2 = await axios.get(url2)
            console.log(hasil2.data.data)
            setPizza(hasil2.data.data)
        } catch (error) {
            console.log(error)
        }
    };
    React.useEffect(() => {
        getPizza();
    },[]);
    let {id} = useParams();
    if (id==1) {
        return(
            <React.Fragment>
                     <div className="flex justify-start items-center mt-20">
                <h1 className="font-bold text-2xl ">Populer</h1>
            </div>  
         <div className="mt-0">
            <ul className="flex items-center justify-between w-full flex-wrap ">
                {makanan.map((pop,index) => (
                    // ${pop.length === 3 ? 'w-1/4' : 'w-2/10'}
                    <li key={index} className={`flex-none items-center w-1/4 h-48 relative m-5`}>
<Popup trigger={
                                    <div className="w-3/10 h-30 my-5">
                                    <img className="rounded-xl w-full h-36" src={pop.image} alt={pop.image} />
                                    <div  className="absolute rounded-xl z-10 pl-3  flex items-center justify-start top-24 bottom-0 left-0 right-0 text-white font-black ">
                                        <p style={{background: "white"}} className="text-black font-extrabold rounded-md text-xs p-1">{pop.waktu}  </p>
                                    </div>
                                    <p className="font-bold mt-2">{pop.name}</p>
                                    <div className="flex">
                                                <div className="flex"><img className="w-4 h-4 m-1" src={Star} alt={Star} /><p className="font-bold">{pop.rating}</p></div>
                                                <p className="font-bold px-20">Rp.{pop.harga}</p>
                                            </div>
                                    </div>
                                        } modal>
                                        {close => (
                                            <div style={{width:'500px'}}className="bg-white p-4 shadow-lg w-full rounded-2xl font-poppins">
                                                <img src={pop.image} className="rounded-xl w-full h-40" alt={pop.image} />
                                                <div className="flex justify-between mt-3 p-3">
                                                    <p className="font-extrabold text-2xl">{pop.name}</p>
                                                    <p className="font-extrabold text-2xl">Rp. {pop.harga}</p>
                                                </div>
                                                <div className="flex">
                                                    <div className="rounded-full ml-3 font-extrabold border-black">
                                                        <p>{pop.waktu}</p>
                                                    </div>
                                                    <div className="rounded-full ml-5 flex border-black">
                                                        <img src={Star} alt={Star} className="h-5 font-bold mr-2"/>
                                                        <p className="font-bold">{pop.rating}</p>

                                                        <img src={Heart} alt={Heart} className="h-5 font-bold ml-5"/>
                                                    </div>
                                                </div>
                                                <div className="mt-5">
                                                       <p className="font-bold">Stok {pop.jumlah}</p>
                                                       </div>
                                                <div className="flex justify-between mt-3 p-3">
                                                       <div className="mt-5 flex font-bold p-1">
                                                        <button className="px-3 font-bold" onClick={()=>{
                                                       pop.jumlah--
                                                       setJumlahStok(pop.pesan++)
                                                   }} disabled={jumlahStok == pop.jumlah}>+</button>
                                                        <p className="px-3">{jumlahStok}</p>

                                                        <button className="px-3 font-bold" disabled={pop.pesan === 0} onClick={()=>{
                                                        setJumlahStok(pop.pesan--)
                                                        pop.jumlah++
                                                   }}>-</button>
                                                       </div>
                                                   <div className="">
                                                       <button onClick={()=>{
                                                       setImg(pop.image)
                                                       setJumlah(pop.harga)
                                                       setTotal(pop.pesan)
                                                       setNama(pop.name)
                                                   }} className="bg-yellow-300  flex px-1 rounded-md py-4 font-bold"><img src={Keranjang} alt={Keranjang} className='h-5 mr-3'/> Tambah Pesanan</button>
                                                       </div>
                                                </div>
                                                
                                                {/* <a className="close" onClick={close}>
                                                &times;
                                                </a> */}
                                            </div>
                                            )}
                                        </Popup>
                        
                    </li>
                                      
                 ))}
            </ul>
         </div>
        </React.Fragment>
        )
    }    if (id == 2) {
        return(
            <React.Fragment>
            <div className="flex justify-start items-center mt-20">
       <h1 className="font-bold text-2xl ">Pizza Series</h1>
   </div>  
<div className="mt-0">
   <ul className="flex items-center justify-between w-full flex-wrap ">
       {pizza.map((pop,index) => (
           // ${pop.length === 3 ? 'w-1/4' : 'w-2/10'}
           <li key={index} className={`flex-none items-center w-1/4 h-48 relative m-5`}>
<Popup trigger={
                           <div className="w-3/10 h-30 my-5">
                           <img className="rounded-xl w-full h-36" src={pop.image} alt={pop.image} />
                           <div  className="absolute rounded-xl z-10 pl-3  flex items-center justify-start top-24 bottom-0 left-0 right-0 text-white font-black ">
                               <p style={{background: "white"}} className="text-black font-extrabold rounded-md text-xs p-1">{pop.waktu}  </p>
                           </div>
                           <p className="font-bold mt-2">{pop.name}</p>
                           <div className="flex">
                                       <div className="flex"><img className="w-4 h-4 m-1" src={Star} alt={Star} /><p className="font-bold">{pop.rating}</p></div>
                                       <p className="font-bold px-20">Rp.{pop.harga}</p>
                                   </div>
                           </div>
                               } modal>
                               {close => (
                                   <div style={{width:'500px'}}className="bg-white p-4 shadow-lg w-full rounded-2xl font-poppins">
                                       <img src={pop.image} className="rounded-xl w-full h-40" alt={pop.image} />
                                       <div className="flex justify-between mt-3 p-3">
                                           <p className="font-extrabold text-2xl">{pop.name}</p>
                                           <p className="font-extrabold text-2xl">Rp. {pop.harga}</p>
                                       </div>
                                       <div className="flex">
                                           <div className="rounded-full ml-3 font-extrabold border-black">
                                               <p>{pop.waktu}</p>
                                           </div>
                                           <div className="rounded-full ml-5 flex border-black">
                                               <img src={Star} alt={Star} className="h-5 font-bold mr-2"/>
                                               <p className="font-bold">{pop.rating}</p>

                                               <img src={Heart} alt={Heart} className="h-5 font-bold ml-5"/>
                                           </div>
                                       </div>
                                       <div className="mt-5">
                                              <p className="font-bold">Stok {pop.jumlah}</p>
                                              </div>
                                       <div className="flex justify-between mt-3 p-3">
                                              <div className="mt-5 flex font-bold p-1">
                                               <button className="px-3 font-bold" onClick={()=>{
                                              pop.jumlah--
                                              setJumlahStok(pop.pesan++)
                                          }} disabled={jumlahStok == pop.jumlah}>+</button>
                                               <p className="px-3">{jumlahStok}</p>

                                               <button className="px-3 font-bold" disabled={pop.pesan === 0} onClick={()=>{
                                               setJumlahStok(pop.pesan--)
                                               pop.jumlah++
                                          }}>-</button>
                                              </div>
                                          <div className="">
                                              <button onClick={()=>{
                                              setImg(pop.image)
                                              setJumlah(pop.harga)
                                              setTotal(pop.pesan)
                                              setNama(pop.name)
                                          }} className="bg-yellow-300  flex px-1 rounded-md py-4 font-bold"><img src={Keranjang} alt={Keranjang} className='h-5 mr-3'/> Tambah Pesanan</button>
                                              </div>
                                       </div>
                                       
                                       {/* <a className="close" onClick={close}>
                                       &times;
                                       </a> */}
                                   </div>
                                   )}
                               </Popup>
               
           </li>
                             
        ))}
   </ul>
</div>
</React.Fragment>
        )
    }else{
        return(
            <React.Fragment>
            <div className="flex justify-start items-center mt-20">
       <h1 className="font-bold text-2xl ">Jus</h1>
   </div>  
<div className="mt-0">
   <ul className="flex items-center justify-between w-full flex-wrap ">
       {minuman.map((pop,index) => (
           // ${pop.length === 3 ? 'w-1/4' : 'w-2/10'}
           <li key={index} className={`flex-none items-center w-1/4 h-48 relative m-5`}>
<Popup trigger={
                           <div className="w-3/10 h-30 my-5">
                           <img className="rounded-xl w-full h-36" src={pop.image} alt={pop.image} />
                           <div  className="absolute rounded-xl z-10 pl-3  flex items-center justify-start top-24 bottom-0 left-0 right-0 text-white font-black ">
                               <p style={{background: "white"}} className="text-black font-extrabold rounded-md text-xs p-1">{pop.waktu}  </p>
                           </div>
                           <p className="font-bold mt-2">{pop.name}</p>
                           <div className="flex">
                                       <div className="flex"><img className="w-4 h-4 m-1" src={Star} alt={Star} /><p className="font-bold">{pop.rating}</p></div>
                                       <p className="font-bold px-20">Rp.{pop.harga}</p>
                                   </div>
                           </div>
                               } modal>
                               {close => (
                                   <div style={{width:'500px'}}className="bg-white p-4 shadow-lg w-full rounded-2xl font-poppins">
                                       <img src={pop.image} className="rounded-xl w-full h-40" alt={pop.image} />
                                       <div className="flex justify-between mt-3 p-3">
                                           <p className="font-extrabold text-2xl">{pop.name}</p>
                                           <p className="font-extrabold text-2xl">Rp. {pop.harga}</p>
                                       </div>
                                       <div className="flex">
                                           <div className="rounded-full ml-3 font-extrabold border-black">
                                               <p>{pop.waktu}</p>
                                           </div>
                                           <div className="rounded-full ml-5 flex border-black">
                                               <img src={Star} alt={Star} className="h-5 font-bold mr-2"/>
                                               <p className="font-bold">{pop.rating}</p>

                                               <img src={Heart} alt={Heart} className="h-5 font-bold ml-5"/>
                                           </div>
                                       </div>
                                       <div className="mt-5">
                                              <p className="font-bold">Stok {pop.jumlah}</p>
                                              </div>
                                       <div className="flex justify-between mt-3 p-3">
                                              <div className="mt-5 flex font-bold p-1">
                                               <button className="px-3 font-bold" onClick={()=>{
                                              pop.jumlah--
                                              setJumlahStok(pop.pesan++)
                                          }} disabled={jumlahStok == pop.jumlah}>+</button>
                                               <p className="px-3">{jumlahStok}</p>

                                               <button className="px-3 font-bold" disabled={pop.pesan === 0} onClick={()=>{
                                               setJumlahStok(pop.pesan--)
                                               pop.jumlah++
                                          }}>-</button>
                                              </div>
                                          <div className="">
                                              <button onClick={()=>{
                                              setImg(pop.image)
                                              setJumlah(pop.harga)
                                              setTotal(pop.pesan)
                                              setNama(pop.name)
                                          }} className="bg-yellow-300  flex px-1 rounded-md py-4 font-bold"><img src={Keranjang} alt={Keranjang} className='h-5 mr-3'/> Tambah Pesanan</button>
                                              </div>
                                       </div>
                                       
                                       {/* <a className="close" onClick={close}>
                                       &times;
                                       </a> */}
                                   </div>
                                   )}
                               </Popup>
               
           </li>
                             
        ))}
   </ul>
</div>
</React.Fragment>
        )
    }

}