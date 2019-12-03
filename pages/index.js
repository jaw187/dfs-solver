import Link from 'next/link';
import Header from  '../components/header';
import ImportProjection from '../components/importprojection.js';
import SlatePicker from '../components/slatepicker';
import fetch from 'isomorphic-unfetch';

const slates = {};

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

const getPlayers = async function (slate) {

  const draftGroupId = slate.DraftGroupId;
  if (!slates[draftGroupId]) {
    //Handle errrrrsssds
    console.log(`http://api.draftkings.com/draftgroups/v1/${draftGroupId}/draftables?format=json`)
    const playersRes = await fetch(`http://api.draftkings.com/draftgroups/v1/draftgroups/${draftGroupId}/draftables?format=json`, { mode: 'no-cors' });

    const players = await playersRes.json();

    slates[draftGroupId] = {
      ...slate,
      players
    };
  }
  console.log('got players')
};

Index.getInitialProps = async function() {
  //Handle errrrrs
  const res = await fetch('https://www.draftkings.com/lineup/getupcomingcontestinfo', { method: 'post', mode: 'no-cors' });
  const rawSlates = await res.json();
  const draftGroupIds = rawSlates.map((slate) => slate.draftGroupId);

  await Promise.all(rawSlates.map(getPlayers));

  return {
    slates
  }
};

export default Index;
