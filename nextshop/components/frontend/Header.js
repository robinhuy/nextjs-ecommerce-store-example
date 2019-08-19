import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  const menu = [
    { title: 'Home', href: '/' },
    { title: 'Shop', href: '/shop' },
    { title: 'Blog', href: '/blog' },
    { title: 'About', href: '/about' },
    { title: 'Contact', href: '/contact' }
  ];

  let menuItems = [];

  for (const item of menu) {
    menuItems.push(
      <li
        key={item.href}
        className={item.href === router.pathname ? 'sale-noti' : ''}
      >
        <Link href={item.href} as={item.href}>
          <a>{item.title}</a>
        </Link>
      </li>
    );
  }

  return (
    <header className="header1">
      <div className="container-menu-header">
        <div className="wrap_header">
          <Link href="/" as="/">
            <a className="logo">
              <img src="/static/images/icons/logo.png" alt="IMG-LOGO" />
            </a>
          </Link>

          <div className="wrap_menu">
            <nav className="menu">
              <ul className="main_menu">{menuItems}</ul>
            </nav>
          </div>

          <div className="header-icons">
            <a href="#" className="header-wrapicon1 dis-block">
              <img
                src="/static/images/icons/icon-header-01.png"
                className="header-icon1"
                alt="ICON"
              />
            </a>

            <span className="linedivide1" />

            <div className="header-wrapicon2">
              <img
                src="/static/images/icons/icon-header-02.png"
                className="header-icon1 js-show-header-dropdown"
                alt="ICON"
              />
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

                      <span className="header-cart-item-info">1 x $19.00</span>
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

                      <span className="header-cart-item-info">1 x $39.00</span>
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

                      <span className="header-cart-item-info">1 x $17.00</span>
                    </div>
                  </li>
                </ul>

                <div className="header-cart-total">Total: $75.00</div>

                <div className="header-cart-buttons">
                  <div className="header-cart-wrapbtn">
                    <a
                      href="cart.html"
                      className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
                    >
                      View Cart
                    </a>
                  </div>

                  <div className="header-cart-wrapbtn">
                    <a
                      href="#"
                      className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
                    >
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
          <a className="logo-mobile">
            <img src="/static/images/icons/logo.png" alt="IMG-LOGO" />
          </a>
        </Link>

        <div className="btn-show-menu">
          <div className="header-icons-mobile">
            <a href="#" className="header-wrapicon1 dis-block">
              <img
                src="/static/images/icons/icon-header-01.png"
                className="header-icon1"
                alt="ICON"
              />
            </a>

            <span className="linedivide2" />

            <div className="header-wrapicon2">
              <img
                src="/static/images/icons/icon-header-02.png"
                className="header-icon1 js-show-header-dropdown"
                alt="ICON"
              />
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

                      <span className="header-cart-item-info">1 x $19.00</span>
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

                      <span className="header-cart-item-info">1 x $39.00</span>
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

                      <span className="header-cart-item-info">1 x $17.00</span>
                    </div>
                  </li>
                </ul>

                <div className="header-cart-total">Total: $75.00</div>

                <div className="header-cart-buttons">
                  <div className="header-cart-wrapbtn">
                    <a
                      href="cart.html"
                      className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
                    >
                      View Cart
                    </a>
                  </div>

                  <div className="header-cart-wrapbtn">
                    <a
                      href="#"
                      className="flex-c-m size1 bg1 bo-rad-20 hov1 s-text1 trans-0-4"
                    >
                      Check Out
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-show-menu-mobile hamburger hamburger--squeeze">
            <span className="hamburger-box">
              <span className="hamburger-inner" />
            </span>
          </div>
        </div>
      </div>

      <div className="wrap-side-menu">
        <nav className="side-menu">
          <ul className="main-menu">
            <li className="item-menu-mobile">
              <Link href="/" as="/">
                <a>Home</a>
              </Link>

              <i
                className="arrow-main-menu fa fa-angle-right"
                aria-hidden="true"
              />
            </li>

            <li className="item-menu-mobile">
              <Link href="/shop" as="/shop">
                <a>Shop</a>
              </Link>
            </li>

            <li className="item-menu-mobile">
              <Link href="/blog" as="/blog">
                <a>Blog</a>
              </Link>
            </li>

            <li className="item-menu-mobile">
              <Link href="/about" as="/about">
                <a>About</a>
              </Link>
            </li>

            <li className="item-menu-mobile">
              <Link href="/contact" as="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
