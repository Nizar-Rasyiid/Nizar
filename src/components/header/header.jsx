import React from 'react';
import logo from '../../images/header/logo.png';
import Kotak from '../../images/header/kotak.png';
import Heart from '../../images/header/heart.png';
import Profpict from '../../images/header/profpict.png';
import Coin from '../../images/header/coin.png';

export default function Header() {
    const pict = [
        {
            Image:Kotak
        } ,    {
           
            Image:Heart
        } 
         ,   {
            Image:Coin
        }   ,
          {
            Image:Profpict
        }
    ]
    return(
        <React.Fragment>
           <nav className="fixed flex w-full z-20 top-fixed bg-white">
           <section className="w-5/6 flex items-center mt-0 bg-white">
                <div className="w-1/3">
                    <img src={logo} alt={logo}/>
                </div>
                <div className="w-2/3 relative">
                
                    <svg className="w-6 h-6 absolute top-4 left-5" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                     <input type="text" placeholder="Cari Makan Bang" className="w-4/6 text-md  pl-16 rounded-3xl bg-gray-100 pr-2 py-3"  />

                </div>
            </section>
            <section style={{background: 'rgba(252, 252, 252, 0.9)'}} className=" h-full w-1/6 pr-10 pl-10 flex items-center justify-between ">
          
              {pict.map((pct,gambar) => (
                  <div className =" flex items-center px-1  justify-between w-7  ">
                  <img key={gambar} className="" src={pct.Image} alt={pct.Image} />
          </div>
              ))}
              
      </section>
           </nav>
        </React.Fragment>
    );
}
