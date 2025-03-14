function createNavbar() {
    const navbarHTML = `
    
       <nav class="navbar navbar-expand-lg p-0 " style="position: sticky;top: 0;z-index: 999;">
        <div class="container-fluid p-0" style="display: flex;flex-direction: column;width: 100%;">


          <div id="navbarNav1"  class=" navbarNav collapse navbar-collapse w-100 " style="background: linear-gradient(to right,#053860 40%,#0b65ac,#053560 );justify-content: end;padding-right: 1rem; overflow: hidden; height: 0px; transition:height 0.5s ease-out;" >
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active p-1" aria-current="page" href="#">translate</a>
              </li>     
              <li class="nav-item">
                <a class="nav-link p-1" href="#">TH</a>
              </li>
            
              <li class="nav-item">
                <a class="nav-link p-1" href="#">EN</a>
              </li>
            
            </ul>
          </div>
         
          <div class="nav_small" >
           <div style="justify-content: center;display: flex;"> <img class="navbar-brand" src="./Sorce/Logo/IMG_1450-1.png" alt="" style="width: 4rem;margin-left: 5rem;"></div>
          
          <div class="jc-end navbar-toggler" style="border: none;">    
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>      
          </div>
          

           <div class="collapse navbar-collapse w-100" style="justify-content: end;" id="navbarNav">
             <ul class="navbar-nav manu_bar">
               <li class="nav-item">
                 <a class="mx-3 my-auto nav-link active" aria-current="page" href="./index.html">HOME</a>
               </li>
               <li class="nav-item">
                 <a class="mx-3 my-auto nav-link active" aria-current="page" href="./index.html#ABOUT">ABOUT US</a>
               </li>
               <li class="nav-item">
                 <a class="mx-3 my-auto nav-link" href="./index.html#OUR_TEAM">OUR TEAM</a>
               </li>
               <li class="nav-item">
                 <a class="mx-3 my-auto nav-link" href="./services.html">SERVICES</a>
               </li>
             
               <li class="nav-item">
                 <a class="mx-3 my-auto nav-link" href="./costumer.html">COSTUMER</a>
               </li>
             
               <li class="nav-item">
                 <a class="mx-3 my-auto nav-link" href="./contact.html">CONTACT</a>
               </li>
             
             </ul>
           </div>
          </div>
         
        </div>
      </nav>
    `;
    document.getElementById("navbar-container").innerHTML = navbarHTML;
  
    // Initialize Bootstrap JavaScript (สำคัญมาก)
    const navbar = document.querySelector('.navbar'); // เลือก element navbar
    new bootstrap.Collapse(navbar, { // สร้าง instance ของ Bootstrap Collapse
      toggle: false // หรือ true ถ้าต้องการให้เมนูเปิดตอนโหลดหน้าเว็บ
    });
  }

  


  function createfooter() {
    const footerHTML = `
      <style>
  
          .footer {
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              padding: 20px;
              background-color: #222;
              margin-left: 100px;
          }
  
          .footer-column {
              flex: 1;
              min-width: 200px;
              padding: 10px;
              text-align: left;
          }
  
          h3 {
              color: #f4b400;
              margin: 0;
              font-size: 35px;
              margin-bottom: 5px;
              font-weight: bold;
          }
  
          h4 {
              color: #ffffff;
              margin: 0;
              font-size: 18px;
              margin-bottom: 5px;
              font-weight: bold;
          }
  
          a {
            font-size: 19px;
            color: #ffffff;
            margin: 0;
            font-weight: bold;
          }
  
          p {
            font-size: 19px;
            color: #ffffff;
            margin: 0;
          }
  
          .logo {
            width: 140px;
            margin-bottom: 5px;
            margin-left: 52px;
          }
  
          .contact img {
            width: 139px;
            margin-right: 10px;
          }
  
          .qr-code {
              width: 80px;
              height: 139px;
          }
  
          /* สำหรับหน้าจอแคบลงเป็นแนวตั้ง */
          @media (max-width: 768px) {
              .footer {
                  flex-direction: column;
                  align-items: center;
                  margin-left: 0;
              }
  
              .footer-column {
                  width: 100%;
                  text-align: center;
              }
          }
  
          /* สำหรับหน้าจอมือถือแบ่งเป็น 2 แถว 2 คอลัมน์ */
          @media (max-width: 480px) {
              .footer {
                  flex-wrap: wrap;
                  flex-direction: row;
                  justify-content: center;
                  margin-left: 0;
              }
  
              .footer-column {
                  width: 45%;
                  text-align: left;
              }
  
    .logo {
      width: 155px;
      margin-bottom: 10px;
      margin-left: -6px;
    }
  
  p {
    font-size: 15px;
    color: #ffffff;
    margin:
  0;
  }
          }
      </style>
  
    <footer class="footer">
        <!-- คอลัมน์แรก : โลโก้และข้อมูลบริษัท -->
        <div class="footer-column">
            <img src="./Sorce/Logo/IMG_1450-1.png" alt="โลโก้บริษัท" class="logo">
            <h4>บริษัท เอ็นอาร์พี มายแอคเคานท์ จำกัด</h4>
            <p>115/8 หมู่บ้านพฤกษา รังสิต-วงแหวน</p>
            <p>โทร: 062-896-4535</p>
            <p>อีเมล: nrp.acc48@gmail.com</p>
        </div>
    
        <!-- คอลัมน์สอง : เมนู -->
        <div class="footer-column">
            <h3>เมนู</h3>
            <a href="./index.html"><p>หน้าเเรก</p></a>
            <a href="./Our_about.html"><p>เกี่ยวกับเรา</p></a>
            <a href="./info.html"><p><p>ข่าวสาร</p></p></a>
            <a href="./contact_us.html"><p>ติดต่อเรา</p></a>
        </div>
    
        <!-- คอลัมน์สาม : บริการของเรา -->
        <div class="footer-column">
            <h3>บริการเรา</h3>
            <a href="./รับทำบัญชี ปิดงบ ยืนภาษี.html"><p>● รับทำบัญชี ปิดงบ ยื่นภาษี</p></a>
            <a href="./บริการสอบบัญชี.html"><p>● บริการสอบบัญชี</p></a>
            <a href="./รับวางระบบภาษี.html"><p>● รับวางระบบภาษี</p></a>
            <a href="./บริการงานทะเบียน.html"><p>● บริการงานทะเบียน</p></a>
        </div>
    
        <!-- คอลัมน์สี่ : ข้อมูลการติดต่อ -->
        <div class="footer-column contact">
            <h3>ติดต่อเรา</h3>
            <p style="margin: 0;">โทร: 062-896-4535</p>
            <p>Line ID: nrp_myacc</p>
            <img class="qr-code" src="Source/Qr.jpg" alt="QR Code">
            <a href="https://www.facebook.com/people/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97-%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%9E%E0%B8%B5-%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B9%81%E0%B8%AD%E0%B8%84%E0%B9%80%E0%B8%84%E0%B8%B2%E0%B8%97%E0%B9%8C-%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94/100070207682246/?rdid=DkqLQSuGREsL0orp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19tFBpR9mQ%2F"><img src="Source/facebook1.png" alt="Facebook" style="border-radius: 20px;padding: 10px;"></a>
        </div>
    </footer>
    
    `;
    document.getElementById("footerHTML1").innerHTML = footerHTML;
  
    // Initialize Bootstrap JavaScript (สำคัญมาก)
    const footer = document.querySelector('.FooterHTML'); // เลือก element navbar
    new bootstrap.Collapse(footer, { // สร้าง instance ของ Bootstrap Collapse
      toggle: false // หรือ true ถ้าต้องการให้เมนูเปิดตอนโหลดหน้าเว็บ
    });
  }