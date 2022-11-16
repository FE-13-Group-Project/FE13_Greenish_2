import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/action/Action";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function ListEvent() {
  const dispatch = useDispatch();
  const nav = useNavigate()
  const { event } = useSelector((state) => state);
  // console.log(event);

  useEffect(() => {
    dispatch(getData());
  }, []);

  function handleDetail(id) {
    nav(`/detail/${id}`)
  }
  return (
    <div style={{ maxWidth: "100%" }}>
      <div
        className="banner"
        style={{
          width: "100%",
          height: "800px",
          backgroundImage: `url(https://images.unsplash.com/photo-1616680214084-22670de1bc82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          position: "relative",
        }}
      >
        <div
          className="box-1"
          style={{
            backgroundColor: "black",
            width: "100%",
            height: "800px",
            position: "absolute",
            opacity: "0.7",
          }}
        ></div>
        <div
          className="box-2"
          style={{
            color: "white",
            position: "absolute",
            bottom: "180px",
            padding: "20px",
            maxWidth: "800px",
          }}
        >
          <h3 style={{ fontSize: "38px", fontWeight: "700" }}>
            Ambil Peranmu Untuk Lindungi Bumi
          </h3>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>
            kami percaya bahwa dukungan masyarakat adalah kunci dari
            keberhasilan Kampanye
          </p>
          <p
            className="desctit"
            style={{ fontSize: "16px", fontWeight: "400" }}
          >
            Disini kamu bisa ikut event event yang kami tampung untuk kamu agar
            bisa ikut dengan teman teman lainnya dalam ikut mendukung,
            berpartisipasi dalam melestarikan bumi kita.
          </p>
          <Button
            style={{
              letterSpacing: "0.5px",
              fontSize: "18px",
              fontWeight: "700",
            }}
          >
            <a style={{ color: "white", textDecoration: "none" }} href="#">
              Jelajahi
            </a>
          </Button>
        </div>
      </div>
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "500",
          marginTop: "50px",
        }}
      >
        Ayo jelajahi Event !
      </h2>
      <div
        className="wrapper"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          padding: "20px",
        }}
      >
        {event.map((item) => {
          const date = new Date(item.dateEvent).getDate();
          const month = new Date(item.dateEvent).toLocaleString("en-US", {
            month: "long",
          });
          return (
            <Card
              className="card"
              onClick={()=>handleDetail(item.id)}
              key={item.id}
              style={{
                margin: "20px auto",
                maxWidth: "20rem",
                height: "28.5rem",
                backgroundColor: "wheat",
                borderRadius: "30px",
                cursor:'pointer'
              }}
            >
              <Card.Header style={{padding: 0,borderRadius:'30px 30px 0 0'}}>
                <Card.Img
                  variant="top"
                  height={200}
                  src={item.posterEvent}
                  style={{ width: "100%", borderRadius: "30px 30px 0 0" }}
                />
              </Card.Header>
              <Card.Body
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  padding: "0 0",
                  height: "fit-content",
                }}
              >
                <div
                  className="date"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "20px 10px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "20px",
                      fontWeight: "500",
                      color: "blue",
                    }}
                  >
                    {month.slice(0, 3).toUpperCase()}
                  </p>
                  <p style={{ fontSize: "20px", fontWeight: "700" }}> {date}</p>
                </div>
                <div className="desc" style={{ padding: "20px" }}>
                  <Card.Title
                    style={{
                      fontSize: "20px",
                      width: "100%",
                      fontWeight: "500",
                    }}
                  >
                    {item.nameEvent}
                  </Card.Title>
                  <Card.Text
                    style={{
                      textAlign: "justify",
                      fontSize: "18px",
                      width: "100%",
                      fontWeight: "300",
                    }}
                  >
                    {item.descEvent.slice(0, 80)}...
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default ListEvent;
