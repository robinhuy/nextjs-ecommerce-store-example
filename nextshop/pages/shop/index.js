import fetch from 'isomorphic-unfetch';

import FrontendLayout from 'components/frontend/FrontendLayout';
import ShopSidebar from 'components/frontend/ShopSidebar';
import ShopFilter from 'components/frontend/ShopFilter';

const Shop = props => {
  let products = props.products || [];

  const productList = products.map((product, index) => (
    <div className="col-sm-12 col-md-6 col-lg-4 p-b-50" key={index}>
      <div className="block2">
        <div className="block2-img wrap-pic-w of-hidden pos-relative">
          <img
            src={product.fields.imageURLs.arrayValue.values[0].stringValue}
            alt={product.fields.name.stringValue}
          />

          <div className="block2-overlay trans-0-4">
            <a
              href="#"
              className="block2-btn-addwishlist hov-pointer trans-0-4"
            >
              <i className="icon-wishlist icon_heart_alt" aria-hidden="true" />
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
            {product.fields.name.stringValue}
          </a>

          <span className="block2-price m-text6 p-r-5">
            ${product.fields.price.stringValue}
          </span>
        </div>
      </div>
    </div>
  ));

  return (
    <FrontendLayout>
      <main>
        <section className="bgwhite p-t-55 p-b-65">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-4 col-lg-3 p-b-50">
                <ShopSidebar />
              </div>

              <div className="col-sm-6 col-md-8 col-lg-9 p-b-50">
                <ShopFilter />

                <div className="row">{productList}</div>

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
};

Shop.getInitialProps = async function() {
  const res = await fetch(
    'https://firestore.googleapis.com/v1/projects/nextshop-43afa/databases/(default)/documents/products'
  );
  const data = await res.json();

  return {
    products: data.documents
  };
};

export default Shop;
