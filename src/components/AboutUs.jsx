import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Navi from './Navi'
function AboutUs() {
  return (
    <div className='aboutus-background'>
      <Navi />
      <div className='aboutus-background'>
        <div className="container-fluid banner">
          <div className="container-fluid overlay-image overlay-image-aboutus"></div>
          <div className="container-fluid boxtext-aboutus">

          </div>
        </div>
      </div>
      <div className="container container-about-us">
        <div className="content-aboutus">
          <h1>Apa Itu "GREENISH" ?</h1>
            <p className='teks-1' >Greenish hadir karena bumi yang rapuh ini perlu suara. Butuh solusi. Butuh perubahan. Butuh aksi. Greenish memiliki landasan prinsip dan nilai-nilai dasar yang tercermin dalam setiap aksi kampanye lingkungan kami..</p>
        </div>
        <div className="content-aboutus">
          <h1 id="content2">Apa saja gerakan greenish?</h1>

          <div className="group-card group-card-aboutus">
            <div className="card" style={{width: "18rem"}}>
              <img src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1666364375/Ecology_Isometric_avcaq8.png" className="card-img-top" alt="..."/> 
                <div className="card-body">
                  <div className="tittle">
                    <h5>Kami menjaga lingkungan kita</h5>
                  </div>
                  <p className="card-text">Selama bertahun-tahun, Greenish telah melakukan suatu perubahan positif untuk lingkungan dunia dan juga termasuk Asia Tenggara. Terima kasih atas bantuanmu.</p>
                </div>
            </div>
            <div className="card" style={{width: "18rem",margin: "5px 0px"}}>
              <img src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1666364423/Recycling__Monochromatic_tcathb.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5>Membantu meningkatkan awarness terhadap sesama</h5>
                  <p className="card-text">Sebagai organisasi kampanye yang independen, kami mengajak dan membantu teman teman untuk bersama sama mendukung setiap event dan kampanye yang ada..

                  </p>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}}>
              <img src="https://res.cloudinary.com/dk55ik2ah/image/upload/v1666364446/Customer_Service_Monochromatic_atbaq1.png" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5>Kami menjamin komunikasi antar sesama</h5>
                  <p className="card-text">Kami mengutamakan komunikasi antar penggiat lingkungan, aktivis, orang umum, serta kami sebagai perantara yang menjamin kualitas komunikasinya.
                  </p>
                </div>
            </div>
          </div>
        </div>
        <div className="content-aboutus">
          <h1>Dokumentasi kegiatan kami</h1>
          <div className="picture-aboutus">
            <img src="https://images.unsplash.com/photo-1598335624134-5bceb5de202d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGxhbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
              <img src="https://images.unsplash.com/photo-1588106832140-87523dd73ed0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                <img src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" alt=""/>
                  <img src="https://images.unsplash.com/photo-1559223607-a43c990c692c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt=""/>
                    <img src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGxhbnRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt=""/>
                      <img src="https://images.unsplash.com/photo-1618477461062-00c999edbfca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MTB8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt=""/>
                      </div>
                    </div>
                  </div>
                  <Footer />
                </div>
                )
}

                export default AboutUs