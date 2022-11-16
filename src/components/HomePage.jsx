import React from "react";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action/Action";

function HomePage() {
   const dispatch = useDispatch();
   const { event } = useSelector((state) => state);
   console.log("ini dari homepage", event);

   useEffect(() => {
      dispatch(getData());
   }, []);
   return (
      <div className="container-homepage">
         <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
         >
            <div className="carousel-indicators">
               <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
               ></button>
               <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
               ></button>
               <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
               ></button>
            </div>
            <div className="carousel-inner">
               <div className="carousel-item active">
                  <img
                     src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                     className="d-block w-100"
                     alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                     <h5>Mari bergabung bersama Greenish</h5>
                     <p>Sayangi lingkungan kita yang indah ini</p>
                  </div>
               </div>
               <div className="carousel-item">
                  <img
                     src="https://images.unsplash.com/photo-1523810192022-5a0fb9aa7ff8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80"
                     className="d-block w-100"
                     alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                     <h5>Mari bergabung bersama Greenish</h5>
                     <p>Menanam pohon untuk kelestarian alam</p>
                  </div>
               </div>
               <div className="carousel-item">
                  <img
                     src="https://images.unsplash.com/photo-1610093674388-cee0337f2684?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                     className="d-block w-100"
                     alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                     <h5>Mari bergabung bersama kami</h5>
                     <p>Membuang sampah pada tempatnya</p>
                  </div>
               </div>
            </div>
            <button
               className="carousel-control-prev"
               type="button"
               data-bs-target="#carouselExampleCaptions"
               data-bs-slide="prev"
            >
               <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
               ></span>
               <span className="visually-hidden">Previous</span>
            </button>
            <button
               className="carousel-control-next"
               type="button"
               data-bs-target="#carouselExampleCaptions"
               data-bs-slide="next"
            >
               <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
               ></span>
               <span className="visually-hidden">Next</span>
            </button>
         </div>





         <div className="container">
            <h1 className="judul">Event</h1>
            <div className="content-event">
               {event.slice(0, 3).map((item) => {
                  return (
                     <div key={item.id} className="card mb-3">
                        <div className="row g-0">
                           <div className="col-md-4">
                              <img
                                 src={item.posterEvent}
                                 alt=""
                                 className="img-fluid rounded-start image-event"
                                 style={{ height: "190px", width: "100%" }}
                              />
                           </div>
                           <div className="col-md-8">
                              <div className="card-body">
                                 <h4 className="card-title">
                                    {item.nameEvent}
                                 </h4>
                                 <p className="card-text">{item.descEvent.slice(0, 230)} ...</p>
                                 <p className="date" style={{ color: "gray" }}>
                                    {item.dateEvent}
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
         <center><button id="load" className="btn btn-primary" type="button">Load More</button></center>
      </div>
   );
}

export default HomePage;
