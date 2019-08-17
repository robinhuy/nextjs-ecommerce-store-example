import Link from 'next/link';

export default function Header() {
  return (
    <header className="header1">
      <div className="container-menu-header">
        <div className="topbar">
          <div className="topbar-social">
            <a href="#" className="topbar-social-item fa fa-facebook"></a>
            <a href="#" className="topbar-social-item fa fa-instagram"></a>
            <a href="#" className="topbar-social-item fa fa-pinterest-p"></a>
            <a href="#" className="topbar-social-item fa fa-snapchat-ghost"></a>
            <a href="#" className="topbar-social-item fa fa-youtube-play"></a>
          </div>

          <span className="topbar-child1">
            Free shipping for standard order over $100
				</span>

          <div className="topbar-child2">
            <span className="topbar-email">
              fashe@example.com
					</span>

            <div className="topbar-language rs1-select2">
              <select className="selection-1" name="time">
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>
          </div>
        </div>

        <div className="wrap_header">
          <a href="index.html" className="logo">
            <img src="/static/images/icons/logo.png" alt="IMG-LOGO" />
          </a>

          <div className="wrap_menu">
            <nav className="menu">
              <ul className="main_menu">
                <li>
                  <Link href="/" as="/">
                    <a>Home</a>
                  </Link>
                </li>

                <li>
                  <a href="product.html">Shop</a>
                </li>

                <li className="sale-noti">
                  <a href="product.html">Sale</a>
                </li>

                <li>
                  <a href="cart.html">Features</a>
                </li>

                <li>
                  <a href="blog.html">Blog</a>
                </li>

                <li>
                  <Link href="/about" as="/about">
                    <a>About</a>
                  </Link>
                </li>

                <li>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="header-icons">
            <a href="#" className="header-wrapicon1 dis-block">
              <img src="/static/images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
            </a>

            <span className="linedivide1"></span>

            <div className="header-wrapicon2">
              <img src="/static/images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
              <span className="header-icons-noti">0</span>

              <div className="header-cart header-dropdown">
                <ul className="header-cart-wrapitem">
                  <li className="header-cart-item">
                    <div className="header-cart-item-img">
                      <img src="/static/images/item-cart-01.jpg" alt="Cart" />
                    </div>

                    <div className="header-cart-item-txt">
                      <a href="#" className="header-cart-item-name">
                        White Shirt With Pleat Detail Back
										</a>

                      <span className="header-cart-item-info">
                        1 x $19.00
										</span>
                    </div>
                  </li>

                  <li className="header-cart-item">
                    <div className="header-cart-item-img">
                      <img src="/static/images/item-cart-02.jpg" alt="Cart" />
                    </div>

                    <div className="header-cart-item-txt">
                      <a href="#" className="header-cart-item-name">
                        Converse All Star Hi Black Canvas
										</a>

                      <span className="header-cart-item-info">
                        1 x $39.00
										</span>
                    </div>
                  </li>

                  <li className="header-cart-item">
                    <div className="header-cart-item-img">
                      <img src="/static/images/item-cart-03.jpg" alt="Cart" />
                    </div>

                    <div className="header-cart-item-txt">
                      <a href="#" className="header-cart-item-name">
                        Nixon Porter Leather Watch In Tan
										</a>

                      <span className="header-cart-item-info">
                        1 x $17.00
										</span>
                    </div>
                  </li>
                </ul>

                <div className="header-cart-total">
                  Total: $75.00
							</div>

                <div className="header-cart-buttons">
                  <div className="header-cart-wrapbtn">
                    <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                      View Cart
									</a>
                  </div>

                  <div className="header-cart-wrapbtn">
                    <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                      Check Out
									</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap_header_mobile">
        <Link href="/" as="/">
          <a className="logo-mobile"><img src="/static/images/icons/logo.png" alt="IMG-LOGO" /></a>
        </Link>

        <div className="btn-show-menu">
          <div className="header-icons-mobile">
            <a href="#" className="header-wrapicon1 dis-block">
              <img src="/static/images/icons/icon-header-01.png" className="header-icon1" alt="ICON" />
            </a>

            <span className="linedivide2"></span>

            <div className="header-wrapicon2">
              <img src="/static/images/icons/icon-header-02.png" className="header-icon1 js-show-header-dropdown" alt="ICON" />
              <span className="header-icons-noti">0</span>


              <div className="header-cart header-dropdown">
                <ul className="header-cart-wrapitem">
                  <li className="header-cart-item">
                    <div className="header-cart-item-img">
                      <img src="/static/images/item-cart-01.jpg" alt="Cart" />
                    </div>

                    <div className="header-cart-item-txt">
                      <a href="#" className="header-cart-item-name">
                        White Shirt With Pleat Detail Back
										</a>

                      <span className="header-cart-item-info">
                        1 x $19.00
										</span>
                    </div>
                  </li>

                  <li className="header-cart-item">
                    <div className="header-cart-item-img">
                      <img src="/static/images/item-cart-02.jpg" alt="Cart" />
                    </div>

                    <div className="header-cart-item-txt">
                      <a href="#" className="header-cart-item-name">
                        Converse All Star Hi Black Canvas
										</a>

                      <span className="header-cart-item-info">
                        1 x $39.00
										</span>
                    </div>
                  </li>

                  <li className="header-cart-item">
                    <div className="header-cart-item-img">
                      <img src="/static/images/item-cart-03.jpg" alt="Cart" />
                    </div>

                    <div className="header-cart-item-txt">
                      <a href="#" className="header-cart-item-name">
                        Nixon Porter Leather Watch In Tan
										</a>

                      <span className="header-cart-item-info">
                        1 x $17.00
										</span>
                    </div>
                  </li>
                </ul>

                <div className="header-cart-total">
                  Total: $75.00
							</div>

                <div className="header-cart-buttons">
                  <div className="header-cart-wrapbtn">

                    <a href="cart.html" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                      View Cart
									</a>
                  </div>

                  <div className="header-cart-wrapbtn">

                    <a href="#" className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4">
                      Check Out
									</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </div>
        </div>
      </div>

      <div className="wrap-side-menu" >
        <nav className="side-menu">
          <ul className="main-menu">
            <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
              <span className="topbar-child1">
                Free shipping for standard order over $100
						</span>
            </li>

            <li className="item-topbar-mobile p-l-20 p-t-8 p-b-8">
              <div className="topbar-child2-mobile">
                <span className="topbar-email">
                  fashe@example.com
							</span>

                <div className="topbar-language rs1-select2">
                  <select className="selection-1" name="time">
                    <option>USD</option>
                    <option>EUR</option>
                  </select>
                </div>
              </div>
            </li>

            <li className="item-topbar-mobile p-l-10">
              <div className="topbar-social-mobile">
                <a href="#" className="topbar-social-item fa fa-facebook"></a>
                <a href="#" className="topbar-social-item fa fa-instagram"></a>
                <a href="#" className="topbar-social-item fa fa-pinterest-p"></a>
                <a href="#" className="topbar-social-item fa fa-snapchat-ghost"></a>
                <a href="#" className="topbar-social-item fa fa-youtube-play"></a>
              </div>
            </li>

            <li className="item-menu-mobile">
              <Link href="/" as="/">
                <a>Home</a>
              </Link>

              <i className="arrow-main-menu fa fa-angle-right" aria-hidden="true"></i>
            </li>

            <li className="item-menu-mobile">
              <a href="product.html">Shop</a>
            </li>

            <li className="item-menu-mobile">
              <a href="product.html">Sale</a>
            </li>

            <li className="item-menu-mobile">
              <a href="cart.html">Features</a>
            </li>

            <li className="item-menu-mobile">
              <a href="blog.html">Blog</a>
            </li>

            <li className="item-menu-mobile">
              <a href="about.html">About</a>
            </li>

            <li className="item-menu-mobile">
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
