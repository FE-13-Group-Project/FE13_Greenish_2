import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postEvent } from "../redux/action/Action";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Navi from "./Navi";
function AddEvent() {
   const dispatch = useDispatch()
   const [name,setName] = useState("")
   const [poster,setPoster] = useState("")
   const [organizer,setOrganizer] = useState("")
   const [CP,setCP] = useState("")
   const [status,setStatus] = useState("")
   const [location,setLocation] = useState("")
   const [max,setMax] = useState("")
   const [desc,setDesc] = useState("")
   const [date,setDate] = useState("")
   const [telp,setTelp] = useState("")
   const data = {
      "nameEvent": name,
      "posterEvent": poster,
      "organizer": organizer,
      "CP": CP,
      "status": status,
      "locationEvent": location,
      "personRegis": 0,
      "maxPerson": max,
      "descEvent": desc,
      "dateEvent": date,
      "noTelp": telp
    }
    function Reset() {
      setName("")
      setPoster("")
      setOrganizer("")
      setCP("")
      setStatus("")
      setLocation("")
      setMax("")
      setDesc("")
      setDate("")
      setTelp("")
    }
    function handleSubmit(e) {
      e.preventDefault()
      dispatch(postEvent(data))
      alert("berhasil menambahkan event !")
      Reset()
      
      
    }
   // const dispatch = useDispatch()
   // function testing(dt) {
   //    // dispatch(postEvent(dt))
   // }
   return (
      <div>
         <Navi />
         <div className="container-addevent">
            <div className="container ">
               <center>
                  <h1>Form Add Event</h1>
               </center>
               <form id="forme" onSubmit={handleSubmit}>
                  <div className="mb-3">
                     <label htmlFor="nama-event" className="form-label">
                        Nama Event
                     </label>
                     <input
                        required
                        type="text"
                        className="form-control"
                        id="nama-event"
                        placeholder="masukkan nama event"
                        value={name}
                        onChange={(e)=>{setName(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="gambar-event" className="form-label">
                        Gambar Event
                     </label>
                     <input
                     required
                        type="text"
                        className="form-control"
                        id="gambar-event"
                        placeholder="Masukan link gambar event"
                        value={poster}
                        onChange={(e)=>{setPoster(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="organizer" className="form-label">
                        Organizer
                     </label>
                     <input
                     required
                        type="text"
                        className="form-control"
                        id="organizer"
                        placeholder="Masukkan nama organizer"
                        value={organizer}
                        onChange={(e)=>{setOrganizer(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="cp" className="form-label">
                        PIC
                     </label>
                     <input
                     required
                        type="text"
                        className="form-control"
                        id="pic"
                        placeholder="Masukkan nama pic acara"
                        value={CP}
                        onChange={(e)=>{setCP(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="cp" className="form-label">
                        CP PIC
                     </label>
                     <input
                     required
                        type="number"
                        className="form-control"
                        id="cp"
                        placeholder="Masukkan telp PIC"
                        value={telp}
                        onChange={(e)=>{setTelp(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="status" className="form-label">
                        Status
                     </label>
                     <input
                     required
                        type="text"
                        className="form-control"
                        id="status"
                        placeholder="Masukkan status"
                        value={status}
                        onChange={(e)=>{setStatus(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="location-event" className="form-label">
                        Location Event
                     </label>
                     <input
                     required
                        type="text"
                        className="form-control"
                        id="location-event"
                        placeholder="Masukkan lokasi event"
                        value={location}
                        onChange={(e)=>{setLocation(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="tanggal">Waktu Pelakasanaan</label>
                     <input
                        required
                        type="date"
                        id="tanggal"
                        name="tanggal"
                        className="form-control"
                        placeholder="Masukkan waktu event"
                        value={date}
                        onChange={(e)=>{setDate(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="max-person" className="form-label">
                        Max person
                     </label>
                     <input
                     required
                        type="number"
                        className="form-control"
                        id="max-person"
                        placeholder="Masukkan jumlah maksimal partisipant event"
                        value={max}
                        onChange={(e)=>{setMax(e.target.value)}}
                     />
                  </div>
                  <div className="mb-3">
                     <label htmlFor="desc-event" className="form-label">
                        Description Event
                     </label>
                     <textarea
                     required
                        className="form-control"
                        id="desc-event"
                        rows="3"
                        value={desc}
                        onChange={(e)=>{setDesc(e.target.value)}}
                     ></textarea>
                  </div>
                  <center>
                     <button type="submit"  className="btn btn-primary">
                        Submit
                     </button>
                  </center>
               </form>
            </div>
         </div>
         <Footer />
      </div>
   );
}

export default AddEvent;
