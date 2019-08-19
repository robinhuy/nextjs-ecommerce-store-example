import FrontendLayout from 'components/frontend/FrontendLayout';

export default function Contact() {
  return (
    <FrontendLayout>
      <main>
        <section
          className="bg-title-page p-t-40 p-b-50 flex-col-c-m"
          style={{ backgroundImage: 'url(/static/imagesheading-pages-06.jpg)' }}
        >
          <h2 className="l-text2 t-center">Contact</h2>
        </section>

        <section className="bgwhite p-t-66 p-b-60">
          <div className="container">
            <div className="row">
              <div className="col-md-6 p-b-30">
                <div className="p-r-20 p-r-0-lg">
                  <div
                    className="contact-map size21"
                    id="google_map"
                    data-map-x="40.614439"
                    data-map-y="-73.926781"
                    data-pin="/static/imagesicons/icon-position-map.png"
                    data-scrollwhell={0}
                    data-draggable={1}
                  />
                </div>
              </div>
              <div className="col-md-6 p-b-30">
                <form className="leave-comment">
                  <h4 className="m-text26 p-b-36 p-t-15">
                    Send us your message
                  </h4>
                  <div className="bo4 of-hidden size15 m-b-20">
                    <input
                      className="sizefull s-text7 p-l-22 p-r-22"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                    />
                  </div>
                  <div className="bo4 of-hidden size15 m-b-20">
                    <input
                      className="sizefull s-text7 p-l-22 p-r-22"
                      type="text"
                      name="phone-number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="bo4 of-hidden size15 m-b-20">
                    <input
                      className="sizefull s-text7 p-l-22 p-r-22"
                      type="text"
                      name="email"
                      placeholder="Email Address"
                    />
                  </div>
                  <textarea
                    className="dis-block s-text7 size20 bo4 p-l-22 p-r-22 p-t-13 m-b-20"
                    name="message"
                    placeholder="Message"
                    defaultValue={''}
                  />
                  <div className="w-size25">
                    <button className="flex-c-m size2 bg1 bo-rad-23 hov1 m-text3 trans-0-4">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </FrontendLayout>
  );
}
