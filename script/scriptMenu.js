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

  