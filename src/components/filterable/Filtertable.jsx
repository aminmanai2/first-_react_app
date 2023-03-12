import React from "react";
import Searchbar from "../searchbar/searchbar";
import "./filtertable.css"
// import productable from "../productab/productable"
 function Filtertable(){
    return (
        <div className="filtertable">
            <Searchbar></Searchbar>
            <Productab></Productab>
        </div>
    );
}
export default Filtertable;