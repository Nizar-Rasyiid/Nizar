import React from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import Star from '../../images/navbar/star.png'
export default function Nav() {

    const [category,setCategory] = React.useState([])
    const getCategory = async() => {
        try {
            const url =`https://belajar-react.smkmadinatulquran.sch.id/api/category/all`
            let response = await axios.get(url)
            console.log(response.data.data)
            setCategory(response.data.data)
        } catch (error) {
            console.log(error)
            
        }
    };
    React.useEffect( () =>{
        getCategory();
    },[])
    return(
        <React.Fragment>
            <div className="mt-10 pr-5 font-poppins">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-2xl ">Kategori</h1>
                <NavLink to='/category'>
                 <button style={{background:"#FB6D3A"}} className="text-xs text-white font-bold px-4 py-2 rounded-2xl">Lebih lengkap</button>
                </NavLink>

            </div>  
         <div className="mt-3">
            <ul className="flex items-center justify-between w-full flex-nowrap overflow-auto">
                {category.map((dt,index) => (
                    <li key={index} className={`flex-none ${category.length === 3 ? 'w-1/4' : 'w-2/10'} h-28 relative m-5`}>
                        <img className="rounded-xl w-full h-28" src={dt.img} alt={dt.img} />
                        <NavLink to={`/category/${dt.id}`}>
                            <p style={{background: "rgba(1,1,1,0.5)"}} className="absolute rounded-xl z-10 h-full flex items-center justify-center top-0 bottom-0 left-0 right-0 text-white font-black"
                            >
                                {dt.name}
                            </p>
                        </NavLink>
                    </li>
                                      
                 ))}
            </ul>
         </div>

            </div>

        </React.Fragment>
    )
}