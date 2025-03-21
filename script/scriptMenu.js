function createNavbar() {
    const navbarHTML = `
    
<div id="navbar-container" class="navbar-expand-lg" style="z-index: 999 !important; height: 120px;">
  <nav class="navbar navbar-expand-lg bg-body" style="z-index: 999; background-color: rgba(255, 255, 255, 0.53) !important; height: 120px;">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <!-- โลโก้ -->
      <a class="navbar-brand" href="./index.html">
        <img src="./Sorce/Logo/IMG_1450-1.png" style="border-radius: 0px;" width="80" height="90">
      </a>

      <!-- ปุ่ม "ติดต่อเรา" ย้ายมาไว้ข้างหน้า navbar-toggler บนมือถือ -->
      <a class="navbar-brand2 d-lg-none" href="https://line.me/ti/p/mdboY3IOZG" style="width: 120px; background-color:#f4b400; height: 40px; border-radius: 20px; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 600; color: #fff; margin-left: 10px;">
        ติดต่อเรา
      </a>

      <!-- ปุ่มเปิดเมนูบนมือถือ -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" style="color: #f4b400;">MENU</span>
      </button>

      <!-- กล่องเมนู -->
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item"><a id="lang_Home" class="nav-link a" href="./index.html">หน้าเเรก</a></li>
          <li class="nav-item"><a id="lang_about" class="nav-link b" href="./about_us.html">เกี่ยวกับเรา</a></li>
          <li class="nav-item dropdown">
            <a id="lang_Services" class="nav-link dropdown-toggle c" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              บริการเรา
            </a>
            <ul class="dropdown-menu" style="background: #f8f9fa; opacity:0.9;">
              <li><a id="lang_item1" class="dropdown-item c1" href="./Service1.html">รับดูแลบัญชี ครบวงจร</a></li>
              <li><a id="lang_item2" class="dropdown-item c2" href="">รับวางแผนภาษี</a></li>
              <li><a id="lang_item3" class="dropdown-item c3" href="">รับจดทะเบียนธุระกิจ</a></li>
              <li><a id="lang_item4" class="dropdown-item c4" href="">รับทําวีซ่า</a></li></ul>
          </li>
          <li class="nav-item"><a id="lang_contact" class="nav-link e" href="ติดต่อเรา.html">ติดต่อเรา</a></li>
        </ul>
      </div>

      <!-- ปุ่ม "ติดต่อเรา" แบบ PC -->
      <a class="navbar-brand2 d-none d-lg-flex" href="" style="width: 250px; background-color: #f4b400; height: 50px; border-radius: 50px; margin: 0 30px; display: flex; align-items: center; justify-content: center; font-size: 25px; font-weight: 600; color: #fff;">
        ติดต่อเรา
      </a>
    </div>
  </nav>
</div>
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

                          a {
    text-decoration: none;
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
            <h4>บริษัม วัน สต๊อป แอคเคาท์ติง </h4>
            <p></p>
            <p>โทร: 085 123 4567</p>
            <p>อีเมล: </p>
        </div>
    
        <!-- คอลัมน์สอง : เมนู -->
        <div class="footer-column">
            <h3>เมนู</h3>
            <a href="./index.html"><p>หน้าเเรก</p></a>
            <a href="./about_us.html"><p>เกี่ยวกับเรา</p></a>
            <a href="./ติดต่อเรา.html"><p>ติดต่อเรา</p></a>
        </div>
    
        <!-- คอลัมน์สาม : บริการของเรา -->
        <div class="footer-column">
            <h3>บริการเรา</h3>
            <a href="#"><p>● รับดูแลบัญชี ครบวงจร</p></a>
            <a href="#"><p>● รับวางแผนภาษี</p></a>
            <a href="#"><p>● รับจดทะเบียนธุระกิจ</p></a>
            <a href="#"><p>● รับทําวีซ่า</p></a>
        </div>
    
        <!-- คอลัมน์สี่ : ข้อมูลการติดต่อ -->
        <div class="footer-column contact">
            <h3>ติดต่อเรา</h3>
            <p style="margin: 0;">โทร: 085 123 4567</p>
            <p>Line ID: </p>
            <img class="qr-code" src="Sorce/qr.png" alt="QR Code">
            <a href="https://www.facebook.com/people/%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97-%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%99%E0%B8%AD%E0%B8%B2%E0%B8%A3%E0%B9%8C%E0%B8%9E%E0%B8%B5-%E0%B8%A1%E0%B8%B2%E0%B8%A2%E0%B9%81%E0%B8%AD%E0%B8%84%E0%B9%80%E0%B8%84%E0%B8%B2%E0%B8%97%E0%B9%8C-%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94/100070207682246/?rdid=DkqLQSuGREsL0orp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F19tFBpR9mQ%2F"><img src="Sorce/facebook1.png" alt="Facebook" style="border-radius: 20px;padding: 10px;"></a>
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