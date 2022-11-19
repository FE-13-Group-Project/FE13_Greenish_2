import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getData, regisEvent } from "../redux/action/Action";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Navi from "./Navi";
function DetailArticle() {
   const { id } = useParams();
   const { artikel } = useSelector((state) => state);
   return (
      <div>
         <Navi />
         {artikel.map((item) => {
            if (item.id == id) {
               return (
                  <div className="container  mb-3" key={item.id}>
                     <center>
                        <img
                           className="image-article card-img-top"
                           src={item.imageArticle}
                           alt=""
                        />
                     </center>
                     <div className="card-body">
                        <center>
                           <h1 className="card-title judul-artikel">{item.nameArticle}</h1>
                        </center>
                        <p className="card-text">{item.descArticle}</p>
                        <p className="card-text">{item.descArticle2}</p>
                        <p className="card-text">{item.descArticle3}</p>
                        <p className="card-text">{item.descArticle4}</p>
                     </div>
                  </div>
               );
            }
         })}
         <Footer />
      </div>
   );
}

export default DetailArticle;
