const footerGenerator = () => {
  const footerElement = document.querySelector("footer");
  footerElement.innerHTML = `
    <div class="footer-content">
            <img src="images/atrangi-logo.png" alt="Logo" class="logo" />
            <div class="footer-ul-container">
              <ul class="category">
                <li class="category-title">Category Heading 1</li>
                <li><a href="" class="footer-link">Link 1</a></li>
                <li><a href="" class="footer-link">Link 2</a></li>
                <li><a href="" class="footer-link">Link 3</a></li>
                <li><a href="" class="footer-link">Link 4</a></li>
                <li><a href="" class="footer-link">Link 5</a></li>
                <li><a href="" class="footer-link">Link 6</a></li>
                <li><a href="" class="footer-link">Link 7</a></li>
                <li><a href="" class="footer-link">Link 8</a></li>
                <li><a href="" class="footer-link">Link 9</a></li>
                <li><a href="" class="footer-link">Link 10</a></li>
              </ul>
              <ul class="category">
                <li class="category-title">Category Heading 2</li>
                <li><a href="" class="footer-link">Link 1</a></li>
                <li><a href="" class="footer-link">Link 2</a></li>
                <li><a href="" class="footer-link">Link 3</a></li>
                <li><a href="" class="footer-link">Link 4</a></li>
                <li><a href="" class="footer-link">Link 5</a></li>
                <li><a href="" class="footer-link">Link 6</a></li>
                <li><a href="" class="footer-link">Link 7</a></li>
                <li><a href="" class="footer-link">Link 8</a></li>
                <li><a href="" class="footer-link">Link 9</a></li>
                <li><a href="" class="footer-link">Link 10</a></li>
              </ul>
            </div>
          </div>
          <p class="footer-title">about company</p>
          <p class="company-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quam
            voluptates iste minima quae, suscipit, cumque obcaecati reprehenderit
            soluta corporis voluptas alias? Corporis eum, optio eos deserunt dolor
            voluptates aliquam dolorum doloribus, iste temporibus sapiente sequi,
            ullam exercitationem consequatur laboriosam vero sed nesciunt veritatis
            unde eaque aut! Soluta, explicabo quidem, repellendus veniam ea
            dignissimos esse repudiandae velit provident magni eos deleniti earum
            similique assumenda deserunt ad sit corporis architecto temporibus eum
            sed reiciendis minus? In commodi beatae accusantium. Earum sequi eius id
            possimus nam, consequuntur nemo modi aspernatur. Ullam, sequi. Ratione
            sequi qui omnis nobis deleniti? Expedita numquam nesciunt ab!
          </p>
          <p class="company-info">
            support emails : gautam@iwiz.in, atrangi@atrangi.in
          </p>
          <p class="company-info">Mobile : 9885478910</p>
          <div class="footer-social-container">
            <div>
              <a href="#" class="social-link">Terms & service</a>
              <a href="#" class="social-link">privacy</a>
            </div>
            <div>
              <a href="#" class="social-link">instagram</a>
              <a href="#" class="social-link">facebook</a>
              <a href="#" class="social-link">twitter</a>
            </div>
          </div>
          <p class="footer-credit">
              Atrangi - rare and hand-picked products
          </p>
    `;
};

footerGenerator();
