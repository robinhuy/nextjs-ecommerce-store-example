import Header from './Header'
import Footer from './Footer'

import '../../static/vendor/bootstrap/css/bootstrap.min.css'
import '../../static/fonts/font-awesome-4.7.0/css/font-awesome.min.css'
import '../../static/fonts/themify/themify-icons.css'
import '../../static/css/hamburgers.min.css'
import '../../static/css/main.min.css'
import '../../static/css/util.min.css'

export default function Layout(props) {
  return (
    <div>
      <Header />

      {props.children}

      <Footer />
    </div>
  )
}
