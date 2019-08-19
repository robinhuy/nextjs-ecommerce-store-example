import FrontendLayout from 'components/frontend/FrontendLayout';

export default function Shop() {
  return (
    <FrontendLayout>
      <main>
        <section
          className="bg-title-page p-t-50 p-b-40 flex-col-c-m"
          style={{ backgroundImage: 'url(/static/images/heading-pages-02.jpg)' }}
        >
          <h2 className="l-text2 t-center">Women</h2>
          <p className="m-text13 t-center">
            New Arrivals Women Collection 2018
          </p>
        </section>

        <section className="bgwhite p-t-55 p-b-65">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
                <div className="leftbar p-r-20 p-r-0-sm">

                  <h4 className="m-text14 p-b-7">Categories</h4>
                  <ul className="p-b-54">
                    <li className="p-t-4">
                      <a href="#" className="s-text13 active1">
                        All
                      </a>
                    </li>
                    <li className="p-t-4">
                      <a href="#" className="s-text13">
                        Women
                      </a>
                    </li>
                    <li className="p-t-4">
                      <a href="#" className="s-text13">
                        Men
                      </a>
                    </li>
                    <li className="p-t-4">
                      <a href="#" className="s-text13">
                        Kids
                      </a>
                    </li>
                    <li className="p-t-4">
                      <a href="#" className="s-text13">
                        Accesories
                      </a>
                    </li>
                  </ul>

                  <h4 className="m-text14 p-b-32">Filters</h4>
                  <div className="filter-price p-t-22 p-b-50 bo3">
                    <div className="m-text15 p-b-17">Price</div>
                    <div className="wra-filter-bar">
                      <div id="filter-bar" />
                    </div>
                    <div className="flex-sb-m flex-w p-t-16">
                      <div className="w-size11">
                        
                        <button className="flex-c-m size4 bg7 bo-rad-15 hov1 s-text14 trans-0-4">
                          Filter
                        </button>
                      </div>
                      <div className="s-text3 p-t-10 p-b-10">
                        Range: $<span id="value-lower">610</span> - $
                        <span id="value-upper">980</span>
                      </div>
                    </div>
                  </div>
                  <div className="filter-color p-t-22 p-b-50 bo3">
                    <div className="m-text15 p-b-12">Color</div>
                    <ul className="flex-w">
                      <li className="m-r-10">
                        <input
                          className="checkbox-color-filter"
                          id="color-filter1"
                          type="checkbox"
                          name="color-filter1"
                        />
                        <label
                          className="color-filter color-filter1"
                          htmlFor="color-filter1"
                        />
                      </li>
                      <li className="m-r-10">
                        <input
                          className="checkbox-color-filter"
                          id="color-filter2"
                          type="checkbox"
                          name="color-filter2"
                        />
                        <label
                          className="color-filter color-filter2"
                          htmlFor="color-filter2"
                        />
                      </li>
                      <li className="m-r-10">
                        <input
                          className="checkbox-color-filter"
                          id="color-filter3"
                          type="checkbox"
                          name="color-filter3"
                        />
                        <label
                          className="color-filter color-filter3"
                          htmlFor="color-filter3"
                        />
                      </li>
                      <li className="m-r-10">
                        <input
                          className="checkbox-color-filter"
                          id="color-filter4"
                          type="checkbox"
                          name="color-filter4"
                        />
                        <label
                          className="color-filter color-filter4"
                          htmlFor="color-filter4"
                        />
                      </li>
                      <li className="m-r-10">
                        <input
                          className="checkbox-color-filter"
                          id="color-filter5"
                          type="checkbox"
                          name="color-filter5"
                        />
                        <label
                          className="color-filter color-filter5"
                          htmlFor="color-filter5"
                        />
                      </li>
                      <li className="m-r-10">
                        <input
                          className="checkbox-color-filter"
                          id="color-filter6"
                          type="checkbox"
                          name="color-filter6"
                        />
                        <label
                          className="color-filter color-filter6"
                          htmlFor="color-filter6"
                        />
                      </li>
                      <li className="m-r-10">
                        <input
                          className="checkbox-color-filter"
                          id="color-filter7"
                          type="checkbox"
                          name="color-filter7"
                        />
                        <label
                          className="color-filter color-filter7"
                          htmlFor="color-filter7"
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="search-product pos-relative bo4 of-hidden">
                    <input
                      className="s-text7 size6 p-l-23 p-r-50"
                      type="text"
                      name="search-product"
                      placeholder="Search Products..."
                    />
                    <button className="flex-c-m size5 ab-r-m color2 color0-hov trans-0-4">
                      <i className="fs-12 fa fa-search" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">

                <div className="flex-sb-m flex-w p-b-35">
                  <div className="flex-w">
                    <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                      <select className="selection-2" name="sorting">
                        <option>Default Sorting</option>
                        <option>Popularity</option>
                        <option>Price: low to high</option>
                        <option>Price: high to low</option>
                      </select>
                    </div>
                    <div className="rs2-select2 bo4 of-hidden w-size12 m-t-5 m-b-5 m-r-10">
                      <select className="selection-2" name="sorting">
                        <option>Price</option>
                        <option>$0.00 - $50.00</option>
                        <option>$50.00 - $100.00</option>
                        <option>$100.00 - $150.00</option>
                        <option>$150.00 - $200.00</option>
                        <option>$200.00+</option>
                      </select>
                    </div>
                  </div>
                  <span className="s-text8 p-t-5 p-b-5">
                    Showing 1–12 of 16 results
                  </span>
                </div>

                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                    
                    <div className="block2">
                      <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                        <img src="/static/images/item-02.jpg" alt="IMG-PRODUCT" />
                        <div className="block2-overlay trans-0-4">
                          <a
                            href="#"
                            className="block2-btn-addwishlist hov-pointer trans-0-4"
                          >
                            <i
                              className="icon-wishlist icon_heart_alt"
                              aria-hidden="true"
                            />
                            <i
                              className="icon-wishlist icon_heart dis-none"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="block2-btn-addcart w-size1 trans-0-4">
                            
                            <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="block2-txt p-t-20">
                        <a
                          href="product-detail.html"
                          className="block2-name dis-block s-text3 p-b-5"
                        >
                          Herschel supply co 25l
                        </a>
                        <span className="block2-price m-text6 p-r-5">
                          $75.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                    
                    <div className="block2">
                      <div className="block2-img wrap-pic-w of-hidden pos-relative">
                        <img src="/static/images/item-03.jpg" alt="IMG-PRODUCT" />
                        <div className="block2-overlay trans-0-4">
                          <a
                            href="#"
                            className="block2-btn-addwishlist hov-pointer trans-0-4"
                          >
                            <i
                              className="icon-wishlist icon_heart_alt"
                              aria-hidden="true"
                            />
                            <i
                              className="icon-wishlist icon_heart dis-none"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="block2-btn-addcart w-size1 trans-0-4">
                            
                            <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="block2-txt p-t-20">
                        <a
                          href="product-detail.html"
                          className="block2-name dis-block s-text3 p-b-5"
                        >
                          Denim jacket blue
                        </a>
                        <span className="block2-price m-text6 p-r-5">
                          $92.50
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                    
                    <div className="block2">
                      <div className="block2-img wrap-pic-w of-hidden pos-relative">
                        <img src="/static/images/item-05.jpg" alt="IMG-PRODUCT" />
                        <div className="block2-overlay trans-0-4">
                          <a
                            href="#"
                            className="block2-btn-addwishlist hov-pointer trans-0-4"
                          >
                            <i
                              className="icon-wishlist icon_heart_alt"
                              aria-hidden="true"
                            />
                            <i
                              className="icon-wishlist icon_heart dis-none"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="block2-btn-addcart w-size1 trans-0-4">
                            
                            <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="block2-txt p-t-20">
                        <a
                          href="product-detail.html"
                          className="block2-name dis-block s-text3 p-b-5"
                        >
                          Coach slim easton black
                        </a>
                        <span className="block2-price m-text6 p-r-5">
                          $165.90
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                    
                    <div className="block2">
                      <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                        <img src="/static/images/item-07.jpg" alt="IMG-PRODUCT" />
                        <div className="block2-overlay trans-0-4">
                          <a
                            href="#"
                            className="block2-btn-addwishlist hov-pointer trans-0-4"
                          >
                            <i
                              className="icon-wishlist icon_heart_alt"
                              aria-hidden="true"
                            />
                            <i
                              className="icon-wishlist icon_heart dis-none"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="block2-btn-addcart w-size1 trans-0-4">
                            
                            <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="block2-txt p-t-20">
                        <a
                          href="product-detail.html"
                          className="block2-name dis-block s-text3 p-b-5"
                        >
                          Frayed denim shorts
                        </a>
                        <span className="block2-oldprice m-text7 p-r-5">
                          $29.50
                        </span>
                        <span className="block2-newprice m-text8 p-r-5">
                          $15.90
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                    
                    <div className="block2">
                      <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                        <img src="/static/images/item-01.jpg" alt="IMG-PRODUCT" />
                        <div className="block2-overlay trans-0-4">
                          <a
                            href="#"
                            className="block2-btn-addwishlist hov-pointer trans-0-4"
                          >
                            <i
                              className="icon-wishlist icon_heart_alt"
                              aria-hidden="true"
                            />
                            <i
                              className="icon-wishlist icon_heart dis-none"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="block2-btn-addcart w-size1 trans-0-4">
                            
                            <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="block2-txt p-t-20">
                        <a
                          href="product-detail.html"
                          className="block2-name dis-block s-text3 p-b-5"
                        >
                          Herschel supply co 25l
                        </a>
                        <span className="block2-price m-text6 p-r-5">
                          $75.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                    
                    <div className="block2">
                      <div className="block2-img wrap-pic-w of-hidden pos-relative">
                        <img src="/static/images/item-14.jpg" alt="IMG-PRODUCT" />
                        <div className="block2-overlay trans-0-4">
                          <a
                            href="#"
                            className="block2-btn-addwishlist hov-pointer trans-0-4"
                          >
                            <i
                              className="icon-wishlist icon_heart_alt"
                              aria-hidden="true"
                            />
                            <i
                              className="icon-wishlist icon_heart dis-none"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="block2-btn-addcart w-size1 trans-0-4">
                            
                            <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="block2-txt p-t-20">
                        <a
                          href="product-detail.html"
                          className="block2-name dis-block s-text3 p-b-5"
                        >
                          Denim jacket blue
                        </a>
                        <span className="block2-price m-text6 p-r-5">
                          $92.50
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">

                    <div className="block2">
                      <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                        <img src="/static/images/item-06.jpg" alt="IMG-PRODUCT" />
                        <div className="block2-overlay trans-0-4">
                          <a
                            href="#"
                            className="block2-btn-addwishlist hov-pointer trans-0-4"
                          >
                            <i
                              className="icon-wishlist icon_heart_alt"
                              aria-hidden="true"
                            />
                            <i
                              className="icon-wishlist icon_heart dis-none"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="block2-btn-addcart w-size1 trans-0-4">

                            <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="block2-txt p-t-20">
                        <a
                          href="product-detail.html"
                          className="block2-name dis-block s-text3 p-b-5"
                        >
                          Herschel supply co 25l
                        </a>
                        <span className="block2-price m-text6 p-r-5">
                          $75.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">

                    <div className="block2">
                      <div className="block2-img wrap-pic-w of-hidden pos-relative">
                        <img src="/static/images/item-08.jpg" alt="IMG-PRODUCT" />
                        <div className="block2-overlay trans-0-4">
                          <a
                            href="#"
                            className="block2-btn-addwishlist hov-pointer trans-0-4"
                          >
                            <i
                              className="icon-wishlist icon_heart_alt"
                              aria-hidden="true"
                            />
                            <i
                              className="icon-wishlist icon_heart dis-none"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="block2-btn-addcart w-size1 trans-0-4">
                            
                            <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="block2-txt p-t-20">
                        <a
                          href="product-detail.html"
                          className="block2-name dis-block s-text3 p-b-5"
                        >
                          Denim jacket blue
                        </a>
                        <span className="block2-price m-text6 p-r-5">
                          $92.50
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">

                    <div className="block2">
                      <div className="block2-img wrap-pic-w of-hidden pos-relative">
                        <img src="/static/images/item-10.jpg" alt="IMG-PRODUCT" />
                        <div className="block2-overlay trans-0-4">
                          <a
                            href="#"
                            className="block2-btn-addwishlist hov-pointer trans-0-4"
                          >
                            <i
                              className="icon-wishlist icon_heart_alt"
                              aria-hidden="true"
                            />
                            <i
                              className="icon-wishlist icon_heart dis-none"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="block2-btn-addcart w-size1 trans-0-4">

                            <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="block2-txt p-t-20">
                        <a
                          href="product-detail.html"
                          className="block2-name dis-block s-text3 p-b-5"
                        >
                          Coach slim easton black
                        </a>
                        <span className="block2-price m-text6 p-r-5">
                          $165.90
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">

                    <div className="block2">
                      <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                        <img src="/static/images/item-11.jpg" alt="IMG-PRODUCT" />
                        <div className="block2-overlay trans-0-4">
                          <a
                            href="#"
                            className="block2-btn-addwishlist hov-pointer trans-0-4"
                          >
                            <i
                              className="icon-wishlist icon_heart_alt"
                              aria-hidden="true"
                            />
                            <i
                              className="icon-wishlist icon_heart dis-none"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="block2-btn-addcart w-size1 trans-0-4">

                            <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="block2-txt p-t-20">
                        <a
                          href="product-detail.html"
                          className="block2-name dis-block s-text3 p-b-5"
                        >
                          Frayed denim shorts
                        </a>
                        <span className="block2-oldprice m-text7 p-r-5">
                          $29.50
                        </span>
                        <span className="block2-newprice m-text8 p-r-5">
                          $15.90
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                    <div className="block2">
                      <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                        <img src="/static/images/item-12.jpg" alt="IMG-PRODUCT" />
                        <div className="block2-overlay trans-0-4">
                          <a
                            href="#"
                            className="block2-btn-addwishlist hov-pointer trans-0-4"
                          >
                            <i
                              className="icon-wishlist icon_heart_alt"
                              aria-hidden="true"
                            />
                            <i
                              className="icon-wishlist icon_heart dis-none"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="block2-btn-addcart w-size1 trans-0-4">
                            
                            <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="block2-txt p-t-20">
                        <a
                          href="product-detail.html"
                          className="block2-name dis-block s-text3 p-b-5"
                        >
                          Herschel supply co 25l
                        </a>
                        <span className="block2-price m-text6 p-r-5">
                          $75.00
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-4 p-b-50">
                    
                    <div className="block2">
                      <div className="block2-img wrap-pic-w of-hidden pos-relative">
                        <img src="/static/images/item-15.jpg" alt="IMG-PRODUCT" />
                        <div className="block2-overlay trans-0-4">
                          <a
                            href="#"
                            className="block2-btn-addwishlist hov-pointer trans-0-4"
                          >
                            <i
                              className="icon-wishlist icon_heart_alt"
                              aria-hidden="true"
                            />
                            <i
                              className="icon-wishlist icon_heart dis-none"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="block2-btn-addcart w-size1 trans-0-4">
                            
                            <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                              Add to Cart
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="block2-txt p-t-20">
                        <a
                          href="product-detail.html"
                          className="block2-name dis-block s-text3 p-b-5"
                        >
                          Denim jacket blue
                        </a>
                        <span className="block2-price m-text6 p-r-5">
                          $92.50
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pagination flex-m flex-w p-t-26">
                  <a
                    href="#"
                    className="item-pagination flex-c-m trans-0-4 active-pagination"
                  >
                    1
                  </a>
                  <a href="#" className="item-pagination flex-c-m trans-0-4">
                    2
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </FrontendLayout>
  );
}
