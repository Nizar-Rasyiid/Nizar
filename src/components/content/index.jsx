import React from "react";
import Nav from "./nav"
import {Switch,Route} from 'react-router-dom'
import Popup from 'reactjs-popup'
import Category from './category'
import Populer from './populer'
import Banner from "./banner"

export default function Content (props){
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
            <header className="h-2/10 w-full pr-5">
                <Banner />
                </header>
            <nav className="h-3/10 w-full mb-5"><Nav/></nav>
            <section className="h-7/10 w-full "> 
                <Switch>
                    <Route path="/category/:id">
                        <Category getSemua={getSemua}/>
                    </Route>
                    <Route path="/">
                        <Populer getSemua={getSemua}/>
                    </Route>
                </Switch>
            </section>
        </React.Fragment>
    )
}