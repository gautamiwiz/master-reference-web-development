console.log("gScript loaded!");

const createNav = () => {
  let nav = document.querySelector(".navbar");
  nav.innerHTML = `
            <div class="nav">
                <img
                src="images/atrangi-logo.png"
                class="brand-logo"
                alt="Atrangi Logo"
                />
                <div class="nav-items">
                <div class="search">
                    <input
                    type="text"
                    class="search-box"
                    placeholder="search brand, product"
                    />
                    <button class="search-button">Search</button>
                </div>
                <a href=""><img src="images/user.png" alt="" /></a>
                <a href=""><img src="images/shopping-cart.png" alt="" /></a>
                </div>
            </div>
            <ul class="links-container">
                <li class="link-item"><a href="#" class="link">Home</a></li>
                <li class="link-item"><a href="#" class="link">Women</a></li>
                <li class="link-item"><a href="#" class="link">Men</a></li>
                <li class="link-item"><a href="#" class="link">Kids</a></li>
                <li class="link-item"><a href="#" class="link">Accessories</a></li>
            </ul>
    `;
};

createNav();
