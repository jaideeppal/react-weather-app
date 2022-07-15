import React, { useEffect, useState } from "react";
import "./css/style.css";
const Tempapp =()=>{

const[city,setCity]=useState("null");
const[search,setSearch]=useState("Dewas");

useEffect(()=>{
const fetchApi =async()=>{
    const url =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=eae5effcdcdbd40f737bf0d03fb223bd`
   const response =await fetch(url) ;
  
const resJson = await response.json();
// eae5effcdcdbd40f737bf0d03fb223bd

setCity(resJson.main);

}

    fetchApi();
},[search])



    return  (
        <>
<div className="box">
<div className="inputData">
<input 
type="search"
value={search}
classname="inputField" 
   onChange={(event)=>{setSearch(event.target.value )

   }}
/>
<div/>
</div>
{!city ? (
    <p className="error message">No Data Found</p>
):(
    <div>
            <div className="info">
<h2 className="location ">
    <i className="fas fa-street-view"></i>{search}
</h2>
<h1 className="temp">
{city.temp}°Cel
</h1>
 <h3 className="tempmin_max">{city.temp_min} °Cel| {city.temp_max} °Cel</h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -two"></div>
            <div className="wave -three"></div>
            </div>
            
            
)}

            </div> 
            
            </>
    )
};


export default Tempapp;