import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function FrontendLayout(props) {
  return (
    <div>
      <Head>
        <title>Nextshop</title>
        <link href="/static/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/static/fonts/font-awesome-4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        <link href="/static/fonts/themify/themify-icons.css" rel="stylesheet" />
        <link href="/static/css/hamburgers.min.css" rel="stylesheet" />
        <link href="/static/css/main.min.css" rel="stylesheet" />
        <link href="/static/css/util.min.css" rel="stylesheet" />
      </Head>

      <Header />

      {props.children}

      <Footer />
    </div>
  );
}
