import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getData } from "../redux/action/Action";
function Article() {
   const dispatch = useDispatch();
   const nav = useNavigate();
   const { artikel } = useSelector((state) => state);
      console.log("ini dari article", artikel);
//    console.log("state article", article);
   // console.log("ini dari homepage", event);
   function handleDetail(id) {
    nav(`/detailartikel/${id}`);
 }
   useEffect(() => {
      dispatch(getData());
   }, []);
   return (
      <div>
        
         <div className="container">
            <h1 className="judul">Artikel</h1>
            <div className="content-event">
               {artikel.slice(0, 3).map((item) => {
                  return (
                     <div
                        onClick={() => handleDetail(item.id)}
                        key={item.id}
                        className="card mb-3"
                     >
                        <div className="row g-0">
                           <div className="col-md-4">
                              <img
                                 src={item.imageArticle}
                                 alt=""
                                 className="img-fluid rounded-start image-event"
                                 style={{ height: "190px", width: "100%" }}
                              />
                           </div>
                           <div className="col-md-8">
                              <div className="card-body">
                                 <h4 className="card-title">
                                       {item.nameArticle}
                                    </h4>
                                 <p className="card-text">
                                    {item.descArticle.slice(0, 230)} ...
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
}

export default Article;
