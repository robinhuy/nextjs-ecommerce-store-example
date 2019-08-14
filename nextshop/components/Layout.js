import Header from './Header'

import '../static/fonts/font-awesome-4.7.0/css/font-awesome.css'
import '../static/css/main.min.css'


export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  )
}
