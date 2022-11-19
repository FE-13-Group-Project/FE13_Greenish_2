import React from "react";

function News() {
   return (
      <div className="container">
         <center>
            <h1>News</h1>
         </center>
         <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
               <div className="card h-100">
                  <iframe
                     src="https://www.youtube.com/embed/ePF92sge3Xw"
                     title="YouTube video player"
                     frameBorder="0"
                     // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     // allowFullScreen
                  ></iframe>
                  <div className="card-body">
                     <h5 className="card-title">
                        Aksi Proyeksi Pesan Greenpeace Jelang KTT G20 di Bali!
                     </h5>
                     <p className="card-text">
                        Menjelang pertemuan akbar G20, Greenpeace menggelar aksi
                        damai kreatif dengan memproyeksikan pesan berbunyi
                        “Saatnya Transisi Energi Berkeadilan” di Pantai Melasti,
                        Bali, pada Senin petang, 14 November 2022.
                     </p>
                  </div>
                 
               </div>
            </div>
            <div className="col">
               <div className="card h-100">
                  <iframe
                     // width=""
                     // height="315"
                     src="https://www.youtube.com/embed/MrvPYiU4HZw"
                     title="YouTube video player"
                     frameBorder="0"
                     // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     // allowFullScreen
                  ></iframe>
                  <div className="card-body">
                     <h5 className="card-title">
                        Ada Apa dengan Banjir di Palangkaraya
                     </h5>
                     <p className="card-text">
                        Banjir di Palangkaraya, Kalimantan Tengah, perlahan
                        surut setelah sepekan lebih meski belum signifikan.
                        Sebelumnya BPBD mencatat sebanyak 9907 orang terkena
                        dampak banjir yang merendam 17 kelurahan di
                        Palangkaraya, Kalimantan Tengah.
                     </p>
                  </div>
                 
               </div>
            </div>
            <div className="col">
               <div className="card h-100">
                  <iframe
                     src="https://www.youtube.com/embed/DKuXBPbrOaU"
                     title="YouTube video player"
                     frameBorder="0"
                     // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     // allowFullScreen
                  ></iframe>
                  <div className="card-body">
                     <h5 className="card-title">
                        Bersepeda Melawan Krisis Iklim & Membuat Kota yang Kita
                        Inginkan!
                     </h5>
                     <p className="card-text">
                        Kemacetan, polusi udara, acapkali tak lepas dari keadaan
                        yang melekat dari sebuah kota. Tapi sebenarnya kita bisa
                        menciptakan kota yang bebas macet dan bebas dari polusi
                        udara kok, tinggal bagaimana kita merencanakan
                        pembangunan kota kita saja
                     </p>
                  </div>
               
               </div>
            </div>
         </div>
      </div>
   );
}

export default News;
