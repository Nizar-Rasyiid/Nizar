import React from 'react';
import Header from '../header/header'
import Content from '../content'
import Sidebar from '../sidebar/sidebar.jsx'

function Layout() {
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
    return(
        <React.Fragment>
            <div className="h-screen w-screen pl-8 font-poppins">
                <header className=" flex items-center h-1/10 w-full">
                    <Header/>
                </header>
                <main className="h-9/10 w-full flex pt-10">
                    <section className="w-3/4 h-full mb-4">
                        <Content getSemua={getSemua}/>
                    </section>
                    <section  className="w-1/4  h-full rounded-xl ">
                        <Sidebar img={img} jumlah={jumlah} total={total} nama={nama}/>
                    </section>
                </main>
            </div>
        </React.Fragment>
    );
}

export default Layout;