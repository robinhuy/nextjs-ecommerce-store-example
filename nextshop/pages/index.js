import Layout from '../components/Layout.js'

export default function Home() {
  return (
    <Layout>
      <main>
        <section className="banner bgwhite p-t-40 p-b-40">
          <div className="container">
            <div className="row">
              <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">

                <div className="block1 hov-img-zoom pos-relative m-b-30">
                  <img src="/static/images/banner-02.jpg" alt="IMG-BENNER" />

                  <div className="block1-wrapbtn w-size2">

                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                      Dresses
							</a>
                  </div>
                </div>


                <div className="block1 hov-img-zoom pos-relative m-b-30">
                  <img src="/static/images/banner-05.jpg" alt="IMG-BENNER" />

                  <div className="block1-wrapbtn w-size2">

                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                      Sunglasses
							      </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">

                <div className="block1 hov-img-zoom pos-relative m-b-30">
                  <img src="/static/images/banner-03.jpg" alt="IMG-BENNER" />

                  <div className="block1-wrapbtn w-size2">

                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                      Watches
							      </a>
                  </div>
                </div>


                <div className="block1 hov-img-zoom pos-relative m-b-30">
                  <img src="/static/images/banner-07.jpg" alt="IMG-BENNER" />

                  <div className="block1-wrapbtn w-size2">

                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                      Footerwear
							      </a>
                  </div>
                </div>
              </div>

              <div className="col-sm-10 col-md-8 col-lg-4 m-l-r-auto">

                <div className="block1 hov-img-zoom pos-relative m-b-30">
                  <img src="/static/images/banner-04.jpg" alt="IMG-BENNER" />

                  <div className="block1-wrapbtn w-size2">

                    <a href="#" className="flex-c-m size2 m-text2 bg3 hov1 trans-0-4">
                      Bags
							      </a>
                  </div>
                </div>


                <div className="block2 wrap-pic-w pos-relative m-b-30">
                  <img src="/static/images/icons/bg-01.jpg" alt="IMG" />

                  <div className="block2-content sizefull ab-t-l flex-col-c-m">
                    <h4 className="m-text4 t-center w-size3 p-b-8">
                      Sign up & get 20% off
							      </h4>

                    <p className="t-center w-size4">
                      Be the frist to know about the latest fashion news and get exclu-sive offers
							      </p>

                    <div className="w-size2 p-t-25">
                      <a href="#" className="flex-c-m size2 bg4 bo-rad-23 hov1 m-text3 trans-0-4">
                        Sign Up
								      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="newproduct bgwhite p-t-45 p-b-105">
          <div className="container">
            <div className="sec-title p-b-60">
              <h3 className="m-text5 t-center">
                Featured Products
				      </h3>
            </div>

            <div className="wrap-slick2">
              <div className="slick2">

                <div className="item-slick2 p-l-15 p-r-15">

                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                      <img src="/static/images/item-02.jpg" alt="IMG-PRODUCT" />

                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                        </a>

                        <div className="block2-btn-addcart w-size1 trans-0-4">

                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
										</button>
                        </div>
                      </div>
                    </div>

                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Herschel supply co 25l
								      </a>

                      <span className="block2-price m-text6 p-r-5">
                        $75.00
								      </span>
                    </div>
                  </div>
                </div>

                <div className="item-slick2 p-l-15 p-r-15">

                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                      <img src="/static/images/item-03.jpg" alt="IMG-PRODUCT" />

                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                        </a>

                        <div className="block2-btn-addcart w-size1 trans-0-4">

                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
										</button>
                        </div>
                      </div>
                    </div>

                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Denim jacket blue
								      </a>

                      <span className="block2-price m-text6 p-r-5">
                        $92.50
								      </span>
                    </div>
                  </div>
                </div>

                <div className="item-slick2 p-l-15 p-r-15">

                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                      <img src="/static/images/item-05.jpg" alt="IMG-PRODUCT" />

                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                        </a>

                        <div className="block2-btn-addcart w-size1 trans-0-4">

                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
										</button>
                        </div>
                      </div>
                    </div>

                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Coach slim easton black
								</a>

                      <span className="block2-price m-text6 p-r-5">
                        $165.90
								</span>
                    </div>
                  </div>
                </div>

                <div className="item-slick2 p-l-15 p-r-15">

                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                      <img src="/static/images/item-07.jpg" alt="IMG-PRODUCT" />

                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                        </a>

                        <div className="block2-btn-addcart w-size1 trans-0-4">

                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
										      </button>
                        </div>
                      </div>
                    </div>

                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
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

                <div className="item-slick2 p-l-15 p-r-15">

                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelnew">
                      <img src="/static/images/item-02.jpg" alt="IMG-PRODUCT" />

                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                        </a>

                        <div className="block2-btn-addcart w-size1 trans-0-4">

                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
										      </button>
                        </div>
                      </div>
                    </div>

                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Herschel supply co 25l
								</a>

                      <span className="block2-price m-text6 p-r-5">
                        $75.00
								</span>
                    </div>
                  </div>
                </div>

                <div className="item-slick2 p-l-15 p-r-15">

                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                      <img src="/static/images/item-03.jpg" alt="IMG-PRODUCT" />

                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                        </a>

                        <div className="block2-btn-addcart w-size1 trans-0-4">

                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
										</button>
                        </div>
                      </div>
                    </div>

                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Denim jacket blue
								</a>

                      <span className="block2-price m-text6 p-r-5">
                        $92.50
								</span>
                    </div>
                  </div>
                </div>

                <div className="item-slick2 p-l-15 p-r-15">

                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative">
                      <img src="/static/images/item-05.jpg" alt="IMG-PRODUCT" />

                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                        </a>

                        <div className="block2-btn-addcart w-size1 trans-0-4">

                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
										</button>
                        </div>
                      </div>
                    </div>

                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
                        Coach slim easton black
								</a>

                      <span className="block2-price m-text6 p-r-5">
                        $165.90
								</span>
                    </div>
                  </div>
                </div>

                <div className="item-slick2 p-l-15 p-r-15">

                  <div className="block2">
                    <div className="block2-img wrap-pic-w of-hidden pos-relative block2-labelsale">
                      <img src="/static/images/item-07.jpg" alt="IMG-PRODUCT" />

                      <div className="block2-overlay trans-0-4">
                        <a href="#" className="block2-btn-addwishlist hov-pointer trans-0-4">
                          <i className="icon-wishlist icon_heart_alt" aria-hidden="true"></i>
                          <i className="icon-wishlist icon_heart dis-none" aria-hidden="true"></i>
                        </a>

                        <div className="block2-btn-addcart w-size1 trans-0-4">

                          <button className="flex-c-m size1 bg4 bo-rad-23 hov1 s-text1 trans-0-4">
                            Add to Cart
										</button>
                        </div>
                      </div>
                    </div>

                    <div className="block2-txt p-t-20">
                      <a href="product-detail.html" className="block2-name dis-block s-text3 p-b-5">
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
              </div>
            </div>

          </div>
        </section>
      </main>

    </Layout>
  )
}
