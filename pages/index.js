import Link from 'next/link';
import Header from  '../components/header';
import ImportProjection from '../components/importprojection.js';
import SlatePicker from '../components/slatepicker';
import fetch from 'isomorphic-unfetch';

const Index = props => (
  <div>
    <Header />
    <SlatePicker slates={props.slates} />
    <ImportProjection />
    <Link href="/about">
      <a>About Page</a>
    </Link>
  </div>
);

Index.getInitialProps = async function() {

  //Handle errrrrs
  const res = await fetch('https://www.draftkings.com/lineup/getupcomingcontestinfo', { method: 'post', mode: 'no-cors' });
  const slates = await res.json();
  return {
    slates
  };
};

export default Index;
