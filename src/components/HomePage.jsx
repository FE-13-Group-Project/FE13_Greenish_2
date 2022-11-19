import React from "react";
import { useEffect } from "react";
import { Button, Card, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action/Action";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navi from "./Navi";
import News from "./News";
function HomePage() {
   const dispatch = useDispatch();
   const nav = useNavigate();
   const { event } = useSelector((state) => state);
   // console.log("ini dari homepage", event);

   useEffect(() => {
      dispatch(getData());
   }, []);

   function handleDetail(id) {
      nav(`/detail/${id}`);
   }
   return (
      <div>
         <Navi />
         <div className="container-homepage">
           <div className="carro" style={{maxWidth:'100%',height:'39rem'}}>
           <Carousel fade >
      <Carousel.Item style={{height:'39rem',position:'relative',objectFit:'cover'}}>
         <div style={{backgroundColor:'black',position:'absolute',height:"100%",width:'100%',opacity:'0.5'}}>

         </div>
        <img
        style={{height:'39rem',maxWidth:'100%'}}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1581922814484-0b48460b7010?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt="First slide"
        />
        <Carousel.Caption style={{position:'absolute',top:0,right:0,bottom:"-80px",margin:'auto',left:0,height:'fit-content',maxWidth:'60%',textAlign:'left'}}>
          <h1 className="texted" style={{fontSize:'40px',textAlign:'left',fontWeight:'700'}}>Mari Berkontribusi bersama Greenish</h1>
          <p className="texted2" style={{fontSize:'20px',textAlign:'left',fontWeight:'400'}}>donasi kamu sangat berarti untuk mendukung setiap kampanye yang kami lakukan..</p>
            <Button style={{textAlign:'left'}}>Explore</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'39rem',position:'relative',objectFit:'cover'}}>
         <div style={{backgroundColor:'black',position:'absolute',height:"100%",width:'100%',opacity:'0.5'}}>

         </div>
        <img
        style={{height:'39rem',maxWidth:'100%'}}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1591543620767-582b2e76369e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=587&q=80"
          alt="Second slide"
        />
        <Carousel.Caption style={{position:'absolute',top:0,right:0,bottom:"-80px",margin:'auto',left:0,height:'fit-content',maxWidth:'60%',textAlign:'left'}}>
          <h1 className="texted" style={{fontSize:'40px',textAlign:'left',fontWeight:'700'}}>Mari Berkontribusi bersama Greenish</h1>
          <p className="texted2" style={{fontSize:'20px',textAlign:'left',fontWeight:'400'}}>donasi kamu sangat berarti untuk mendukung setiap kampanye yang kami lakukan..</p>
            <Button style={{textAlign:'left'}}>Explore</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{height:'39rem',position:'relative',objectFit:'cover'}}>
         <div style={{backgroundColor:'black',position:'absolute',height:"100%",width:'100%',opacity:'0.5'}}>

         </div>
        <img
        style={{height:'39rem',maxWidth:'100%'}}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1501168624770-d67200f0ccb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
          alt="Second slide"
        />
        <Carousel.Caption style={{position:'absolute',top:0,right:0,bottom:"-80px",margin:'auto',left:0,height:'fit-content',maxWidth:'60%',textAlign:'left'}}>
          <h1 className="texted" style={{fontSize:'40px',textAlign:'left',fontWeight:'700'}}>Mari Berkontribusi bersama Greenish</h1>
          <p className="texted2" style={{fontSize:'20px',textAlign:'left',fontWeight:'400'}}>donasi kamu sangat berarti untuk mendukung setiap kampanye yang kami lakukan..</p>
            <Button style={{textAlign:'left'}}>Explore</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
           </div>
           <section>
               
           </section>
            <div className="container">
               <h1 className="judul">Event</h1>
               <div className="content-event">
                  {event.slice(0, 3).map((item) => {
                     return (
                        <div onClick={() => handleDetail(item.id)} key={item.id} className="card mb-3">
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
                                    <p className="card-text">
                                       {item.descEvent.slice(0, 230)} ...
                                    </p>
                                    <p
                                       className="date"
                                       style={{ color: "gray" }}
                                    >
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
            <center>
               <button onClick={() => nav('/event')} id="load" className="btn btn-primary" type="button">
                  Load More
               </button>
            </center>
         </div>
         <News />
         <Footer />
      </div>
   );
}

export default HomePage;
