import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

export default function FrontendLayout(props) {
  return (
    <div>
      <Head>
        <title>Nextshop</title>
        <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/fonts/themify/themify-icons.css" rel="stylesheet" />
        <link href="/css/hamburgers.min.css" rel="stylesheet" />
        <link href="/css/main.min.css" rel="stylesheet" />
        <link href="/css/util.min.css" rel="stylesheet" />
      </Head>

      <Header />

      {props.children}

      <Footer />
    </div>
  );
}
