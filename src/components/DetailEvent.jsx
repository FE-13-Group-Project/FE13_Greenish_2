import React, { useEffect, useState } from "react";
import {
   Button,
   Col,
   Container,
   Form,
   ProgressBar,
   Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getData } from "../redux/action/Action";
import Footer from "./Footer";
import Navbar from "./Navbar";

function DetailEvent() {
   const { id } = useParams();
   const { event,users } = useSelector((state) => state);
   const { pathname } = useLocation();
   const [hide, setHide] = useState();
   const [fname, setFname] = useState();
   const [lname, setLname] = useState();
   const [email, setEmail] = useState();


   useEffect(()=>{
      if (localStorage.getItem("id_user")) {
         users.map((item)=>{
            if (item.id == localStorage.getItem("id_user")) {
               setFname(item.firstName)
               setLname(item.lastName)
               setEmail(item.email)
            }
         })
      }
   },[])
   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(getData());
   }, []);
   useEffect(() => {
      document.documentElement.scrollTo({
         top: 0,
         left: 0,
         behavior: "instant", // Optional if you want to skip the scrolling animation
      });
   }, [pathname]);
   useEffect(() => {
      if (localStorage.getItem("isLogin") === "false") {
         setHide("HIDDEN");
      } else if (localStorage.getItem("isLogin") === "true") {
         setHide("SHOW");
      }
   }, []);

   return (
      <div>
         <Navbar />
         <div style={{ maxWidth: "100%", backgroundColor: "beige" }}>
            {event.map((item) => {
               if (item.id == id) {
                  const date = new Date(item.dateEvent).getDate();
                  const month = new Date(item.dateEvent).toLocaleString(
                     "en-US",
                     {
                        month: "long",
                     }
                  );
                  const year = new Date(item.dateEvent).getFullYear();

                  return (
                     <div key={item.id}>
                        <div
                           className="banner"
                           style={{
                              width: "100%",
                              height: "400px",
                              backgroundImage: `url(${item.posterEvent})`,
                              backgroundPosition: "center",
                              backgroundSize: "cover",
                              backgroundRepeat: "no-repeat",
                              position: "relative",
                           }}
                        >
                           <div
                              className="box-1"
                              style={{
                                 backgroundColor: "#d5e3ea",
                                 width: "100%",
                                 height: "400px",
                                 position: "absolute",
                                 opacity: "0.3",
                              }}
                           ></div>
                           <div
                              className="box-3"
                              style={{
                                 blur: "50px",
                                 backgroundColor: "black",
                                 width: "100%",
                                 height: "200px",
                                 position: "absolute",
                                 opacity: "0.5",
                                 bottom: 0,
                              }}
                           ></div>
                           <div
                              className="box-2"
                              style={{
                                 color: "white",
                                 padding: "10px",
                                 display: "flex",
                                 flexWrap: "wrap",
                                 justifyContent: "space-around",
                                 width: "100%",
                                 position: "absolute",
                                 bottom: "5px",
                              }}
                           >
                              <div className="title">
                                 <p
                                    style={{
                                       fontSize: "22px",
                                       fontWeight: "400",
                                    }}
                                 >
                                    {item.status}
                                 </p>
                                 <h3 className="title"
                                    // style={{
                                    //    fontSize: "45px",
                                    //    fontWeight: "600",
                                    // }}
                                 >
                                    {item.nameEvent}
                                 </h3>
                                 <p className="org"
                                    // style={{
                                    //    fontSize: "30px",
                                    //    fontWeight: "500",
                                    // }}
                                 >
                                    {item.organizer}
                                 </p>
                              </div>
                              <div
                                 className="date"
                                 style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "15px",
                                    height: "100px",
                                    alignSelf: "center",
                                    width: "100px",
                                    background: "rgb(55,26,245)",
                                    background:
                                       "radial-gradient(circle, rgba(55,26,245,1) 0%, rgba(166,75,221,0.9976365546218487) 100%)",
                                    borderRadius: "30px",
                                 }}
                              >
                                 <h3
                                    style={{
                                       fontSize: "24px",
                                       fontWeight: "600",
                                    }}
                                 >
                                    {month.slice(0, 3).toUpperCase()}
                                 </h3>
                                 <h3
                                    style={{
                                       fontSize: "20px",
                                       fontWeight: "400",
                                    }}
                                 >
                                    {date}
                                 </h3>
                              </div>
                           </div>
                        </div>
                        <section style={{ padding: "20px" }}>
                           <ProgressBar
                              style={{
                                 maxWidth: "700px",
                                 margin: "auto",
                                 backgroundColor: "#b3b3b3",
                                 height: "25px",
                              }}
                              variant="success"
                              now={item.personRegis}
                              max={item.maxPerson}
                           />
                           <div
                              className="person"
                              style={{
                                 padding: "5px 10px",
                                 maxWidth: "700px",
                                 margin: "auto",
                                 display: "flex",
                                 justifyContent: "space-between",
                              }}
                           >
                              <div className="person">
                                 <p
                                    style={{
                                       fontSize: "18px",
                                       fontWeight: "500",
                                    }}
                                 >
                                    {item.personRegis} / {item.maxPerson}{" "}
                                    pendaftar saat ini
                                 </p>
                              </div>
                              <div className="date">
                                 <p
                                    style={{
                                       fontSize: "18px",
                                       fontWeight: "500",
                                    }}
                                 >
                                    hingga {item.dateEvent}
                                 </p>
                              </div>
                           </div>
                           <Container
                              style={{
                                 marginTop: "20px",
                                 padding: "15px",
                                 width: "100%",
                              }}
                           >
                              <Row>
                                 <Col lg={4}>
                                    <h4>Organizer</h4>
                                 </Col>
                              </Row>
                              <Row style={{ marginTop: "20px" }}>
                                 <Col lg={"auto"}>
                                    <img
                                       src="https://www.w3schools.com/howto/img_avatar.png"
                                       alt=""
                                       style={{
                                          width: "50px",
                                          height: "50px",
                                          borderRadius: "50%",
                                       }}
                                    />
                                 </Col>
                                 <Col lg={"auto"}>
                                    <h5>{item.CP}</h5>
                                    <p>{item.noTelp}</p>
                                 </Col>
                              </Row>
                              <Row>
                                 <Col lg={4}>
                                    <h4>Time and Location</h4>
                                 </Col>
                              </Row>
                              <Row style={{ marginTop: "20px" }}>
                                 <Col
                                    style={{ paddingLeft: "20px" }}
                                    lg={"auto"}
                                 >
                                    <img
                                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABg0lEQVRIid2VPU7DQBCFP9mKG0hriSsE34GABCUKEcoVIiwE4RIo4gxQ8XMLClpEQ4IgBLgAZaAgBTHFzsqL8e46lHnSaKOdmfd2xzMbWHREQAe4AkbAp9gIuBRf9F/yNvAGZB57BXbmIQ6AE4PgHjgAGsCS2CpwCAyMuL7keqHJv4CuJykA9iRWizjRNsjXSvz6tEU0DZGWjTwir3nXEmMTAEjF9wLUygI65DW3lcUlEAJD8e/qTZNId8IpMLOQuPANnMnv0jI9i3rDQeK6AajuylBz8gcTcdYrCMQWf138E71RqW8NPMh67RCxokqJYvIPOSwRSSiUyLzBnaybDoF3YEPIE+AGWDH8W7LeliXrNh3gL515k1T2QlQJf7WpiQj1cGWo8fchLsTtS+4Yy6CBmgX9VDQriGisA1PU/Gz7gvuGSIq6ug0h6uRTyTmucprAENHd0kMN0bJYAhyR13wm5HO1fQv1cPn+cMZUKIsNNVRHXABPwIfYI3AuPusHXQz8AE5Yfbda1m0KAAAAAElFTkSuQmCC"
                                       alt=""
                                    />
                                 </Col>
                                 <Col lg={"auto"}>:</Col>
                                 <Col
                                    style={{ paddingLeft: "10px" }}
                                    lg={"auto"}
                                 >
                                    {date} {month} {year}
                                 </Col>
                              </Row>
                              <Row style={{ marginTop: "5px" }}>
                                 <Col
                                    style={{ paddingLeft: "20px" }}
                                    lg={"auto"}
                                 >
                                    <img
                                       src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAABFklEQVRIie3Vvy5EQRQG8J9/FYrdyiNYBRIqhUQj4QlEq1BoNhHPQKL1CipeQFZ0ulXYSNQS7W4iCpVcxVzJZFh3710afMkU882c75s599w5/KMAI8l8EceoVdTr4QC3/QxaWMF9RYMGrrH+TownG2q5+HJFgzbqMTFaUWhg/LhBmiJYQjaE5k08+Z0pSnGBB+xgTEjfmVDrDWwNqINQZlk0djGRr73k3Amm87UpHCYx7ViwKEWzOEq4NVxiDzNFJy4yaGIy4eaEG2zgGavDGHyGc9zhEfPY/26DJ2wLD+MVNssEpx85y0/awmvEdXAq/FTp/vYH1QKDsuPLKuqVuW4fdONJ2g8WhIZTVw1doeF0Ksb/RbwBaUlLX3tWyicAAAAASUVORK5CYII="
                                       alt=""
                                    />
                                 </Col>
                                 <Col lg={"auto"}>:</Col>
                                 <Col
                                    style={{ paddingLeft: "10px" }}
                                    lg={"auto"}
                                 >
                                    {item.locationEvent}
                                 </Col>
                              </Row>
                              <Row style={{ marginTop: "20px" }}>
                                 <Col lg={12}>
                                    <h4>Description Event</h4>
                                 </Col>
                                 <Col lg={12} style={{ paddingLeft: "20px" }}>
                                    <p style={{ textAlign: "justify" }}>
                                       {item.descEvent}
                                    </p>
                                 </Col>
                              </Row>
                           </Container>
                           <hr />
                           <hr style={{ width: "50%", margin: "auto" }} />
                        </section>
                        <h2 style={{ margin: "auto", textAlign: "center" }}>
                           Ayo daftarkan dirimu sekarang
                        </h2>
                        <Container style={{ padding: "20px" }}>
                           <Form style={{ position: "relative" }}>
                              <div
                                 className={hide}
                                 style={{
                                    blur: "50px",
                                    backgroundColor: "black",
                                    width: "100%",
                                    height: "100%",
                                    position: "absolute",
                                    opacity: "0.8",
                                 }}
                              >
                                 <div
                                    className="text"
                                    style={{
                                       display: "hidden",
                                       height: "fit-content",
                                       width: "fit-content",
                                       position: "absolute",
                                       color: "white",
                                       left: "0",
                                       right: "0",
                                       top: "0",
                                       bottom: "0",
                                       margin: "auto",
                                    }}
                                 >
                                    <h2>MAAF BELUM LOGIN</h2>
                                 </div>
                              </div>
                              <Row className="mb-3">
                                 <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control
                                       type="text"
                                       placeholder="Your first name"
                                       value={fname}
                                       disabled
                                    />
                                 </Form.Group>

                                 <Form.Group
                                    as={Col}
                                    controlId="formGridPassword"
                                 >
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                       type="text"
                                       placeholder="Your last name"
                                       value={lname}
                                       disabled
                                    />
                                 </Form.Group>
                              </Row>

                              <Form.Group
                                 className="mb-3"
                                 controlId="formGridAddress1"
                              >
                                 <Form.Label>Address</Form.Label>
                                 <Form.Control placeholder="Jl. Mangga no 4" />
                              </Form.Group>

                              <Form.Group
                                 className="mb-3"
                                 controlId="formGridAddress2"
                              >
                                 <Form.Label>Email</Form.Label>
                                 <Form.Control
                                    type="email"
                                    placeholder="Youremai@gmail.com"
                                    value={email}
                                       disabled
                                 />
                              </Form.Group>

                              <Form.Group
                                 className="mb-3"
                                 controlId="formGridAddress2"
                              >
                                 <Form.Label>phone</Form.Label>
                                 <Form.Control
                                    type="number"
                                    placeholder="085..."
                                 />
                              </Form.Group>

                              <Row className="mb-3">
                                 <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control />
                                 </Form.Group>

                                 <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control />
                                 </Form.Group>
                              </Row>

                              <Button
                                 style={{ width: "100%" }}
                                 variant="primary"
                                 type="submit"
                              >
                                 Submit
                              </Button>
                           </Form>
                        </Container>
                     </div>
                  );
               }
            })}
         </div>
         <Footer />
      </div>
   );
}

export default DetailEvent;
