import { Link } from "react-router-dom";
import ProductsData from "./ProductsData";

function Navbar({ cartProducts }) {
  function themeChanger() {
    document.querySelector("body").classList.toggle("light");
    let label = document.querySelector(".form-check label");
    if (label.innerText == "Dark Mode") {
      label.innerText = "Light Mode";
    } else {
      label.innerText = "Dark Mode";
    }
  }

  function handleSearch(e) {
    let box = document.querySelector(".search-product-box");
    if (e.target.value == "") {
      box.style.display = "none";
    } else {
      box.style.display = "block";
    }
    let inputValue = e.target.value;
    console.log(inputValue);
    let headings = document.querySelectorAll(".listed-products h4");
    headings.forEach((head) => {
      console.log(head.innerText);
      if (head.innerText.toLowerCase().includes(inputValue.toLowerCase())) {
        head.style.display = "block";
      } else {
        head.style.display = "none";
      }
    });
  }
  function clearSeacrhBox() {
    let box = document.querySelector(".search-product-box");
    box.style.display = "none";
    document.querySelector("#main-search").value = "";
  }
  return (
    <>
      <header>
        <nav className="navbar">
          <Link to="/">
            {" "}
            <div className="logo">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/01/09/11/shop-2107911_960_720.png"
                alt=""
              />
            </div>
          </Link>
          <div className="selectbox  ">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                All
              </button>
              <ul class="dropdown-menu">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
            <div className="inputtype  " onKeyUp={handleSearch}>
              <input type="text" placeholder="Search Your Favourite Product" />
            </div>
            <div className="btn search bg-info ">
              {" "}
              <i class="fa-solid fa-magnifying-glass "></i>{" "}
            </div>
          </div>
          <div className="ecart">
            <Link to="Cart">
              <div className="cart">
                {(cartProducts.length > 0) && 
                  <span class="badge text-bg-danger text-white">
                    {cartProducts.length}
                  </span>
                }
                <i class="fa-solid fa-cart-shopping"></i> Cart
              </div>
            </Link>
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={themeChanger}
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                Dark Mode
              </label>
            </div>
          </div>

          <i class="fa-solid fa-bars menu-icon"></i>
        </nav>
      </header>
      <div className="search-product-box">
        <h2>Products</h2>
        <div className="listed-products mt-3">
          {ProductsData.map((product) => {
            return (
              <Link
                to={`/productdetail/${product.id}`}
                onClick={clearSeacrhBox}
              >
                <h4>{product.name}</h4>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;
