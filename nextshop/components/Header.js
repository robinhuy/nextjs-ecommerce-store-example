import Link from 'next/link'

export default function Header() {
  return (
    <header class="header1">
      <div class="container-menu-header">
        <div class="topbar">
          <div class="topbar-social">
            <a href="#" class="topbar-social-item fa fa-facebook"></a>
            <a href="#" class="topbar-social-item fa fa-instagram"></a>
            <a href="#" class="topbar-social-item fa fa-pinterest-p"></a>
            <a href="#" class="topbar-social-item fa fa-snapchat-ghost"></a>
            <a href="#" class="topbar-social-item fa fa-youtube-play"></a>
          </div>

          <span class="topbar-child1">
            Free shipping for standard order over $100
				</span>

          <div class="topbar-child2">
            <span class="topbar-email">
              fashe@example.com
					</span>

            <div class="topbar-language rs1-select2">
              <select class="selection-1" name="time">
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        </div>

        <div class="wrap_header">
          <a href="index.html" class="logo">
            <img src="images/icons/logo.png" alt="IMG-LOGO" />
          </a>

          <div class="wrap_menu">
            <nav class="menu">
              <ul class="main_menu">
                <li>
                  <a href="index.html">Home</a>
                  <ul class="sub_menu">
                    <li><a href="index.html">Homepage V1</a></li>
                    <li><a href="home-02.html">Homepage V2</a></li>
                    <li><a href="home-03.html">Homepage V3</a></li>
                  </ul>
                </li>

                <li>
                  <a href="product.html">Shop</a>
                </li>

                <li class="sale-noti">
                  <a href="product.html">Sale</a>
                </li>

                <li>
                  <a href="cart.html">Features</a>
                </li>

                <li>
                  <a href="blog.html">Blog</a>
                </li>

                <li>
                  <a href="about.html">About</a>
                </li>

                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div class="header-icons">
            <a href="#" class="header-wrapicon1 dis-block">
              <img src="images/icons/icon-header-01.png" class="header-icon1" alt="ICON" />
            </a>

            <span class="linedivide1"></span>

            <div class="header-wrapicon2">
              <img src="images/icons/icon-header-02.png" class="header-icon1 js-show-header-dropdown" alt="ICON" />
              <span class="header-icons-noti">0</span>

              <div class="header-cart header-dropdown">
                <ul class="header-cart-wrapitem">
                  <li class="header-cart-item">
                    <div class="header-cart-item-img">
                      <img src="images/item-cart-01.jpg" alt="IMG" />
                    </div>

                    <div class="header-cart-item-txt">
                      <a href="#" class="header-cart-item-name">
                        White Shirt With Pleat Detail Back
										</a>

                      <span class="header-cart-item-info">
                        1 x $19.00
										</span>
                    </div>
                  </li>

                  <li class="header-cart-item">
                    <div class="header-cart-item-img">
                      <img src="images/item-cart-02.jpg" alt="IMG" />
                    </div>

                    <div class="header-cart-item-txt">
                      <a href="#" class="header-cart-item-name">
                        Converse All Star Hi Black Canvas
										</a>

                      <span class="header-cart-item-info">
                        1 x $39.00
										</span>
                    </div>
                  </li>

                  <li class="header-cart-item">
                    <div class="header-cart-item-img">
                      <img src="images/item-cart-03.jpg" alt="IMG" />
                    </div>

                    <div class="header-cart-item-txt">
                      <a href="#" class="header-cart-item-name">
                        Nixon Porter Leather Watch In Tan
										</a>

                      <span class="header-cart-item-info">
                        1 x $17.00
										</span>
                    </div>
                  </li>
                </ul>

                <div class="header-cart-total">
                  Total: $75.00
							</div>

                <div class="header-cart-buttons">
                  <div class="header-cart-wrapbtn">
                    <a href="cart.html" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                      View Cart
									</a>
                  </div>

                  <div class="header-cart-wrapbtn">
                    <a href="#" class="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                      Check Out
									</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
