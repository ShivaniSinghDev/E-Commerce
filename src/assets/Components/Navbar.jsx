
function Navbar() {
  function themeChanger(){
   document.querySelector("body").classList.toggle('light');
   let label=document.querySelector(".form-check label") 
   if(label.innerText=='Dark Mode'){
    label.innerText='Light Mode'
  } 
  else{
     label.innerText='Dark Mode'

   }
  }
  return (
    <>
      <header>
       

        <nav className="navbar">
            <div className="logo"><img src="https://cdn.pixabay.com/photo/2017/03/01/09/11/shop-2107911_960_720.png" alt="" /></div>
            <div className="selectbox  ">
                   <div class="dropdown">
                           <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      All
                            </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Action</a></li>
                          <li><a class="dropdown-item" href="#">Another action</a></li>
                          <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                     </div>
                     <div className="inputtype "><input type="text" placeholder="Search Your Favourite Product"  /></div>
                     <div className="btn search bg-info " > <i class="fa-solid fa-magnifying-glass " ></i> </div>
                     
              </div>
              <div className="ecart">
                
              <div className="cart"> <i class="fa-solid fa-cart-shopping"></i> Cart</div>
                     <div class="form-check form-switch">
                      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={themeChanger}/>
                      <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode</label>
                     </div>


              </div>

              <i class="fa-solid fa-bars menu-icon"></i>
       </nav>
      </header>

    </>
  )
}

export default Navbar
