import Link from 'next/link';
import Header from  '../components/header';
import ImportProjection from '../components/importprojection.js';
import SlatePicker from '../components/slatepicker';
import StackBuilder from '../components/stackbuilder';
import Stacks from '../components/stacks';
import { withRedux } from '../lib/redux';
import fetch from 'isomorphic-unfetch';

const slates = {};

const getPlayers = async function (slate) {
  const draftGroupId = slate.DraftGroupId;
  if (!slates[draftGroupId]) {
    //Handle errrrrsssds
    console.log(`http://api.draftkings.com/draftgroups/v1/draftgroups/${draftGroupId}/draftables?format=json`)
    const playersRes = await fetch(`http://api.draftkings.com/draftgroups/v1/draftgroups/${draftGroupId}/draftables?format=json`, { mode: 'no-cors' });

    const playerIds = [];
    const rawPlayers = await playersRes.json();

    const players = rawPlayers && rawPlayers.draftables && rawPlayers.draftables.filter((player) => {
      const id = player.playerId;
      if (playerIds.includes(id)) {
        return false;
      }

      playerIds.push(id);
      return true;
    });

    slates[draftGroupId] = {
      ...slate,
      players
    };
  }
};

const Index = () => {
  return (
    <div>
      <Header />
      <SlatePicker />
      <ImportProjection />
      <StackBuilder />
      <Stacks />
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </div>
  );
}

// This is to try and stop spamming DK
let fetched = false;
let fetching = false;
Index.getInitialProps = async ({ reduxStore }) => {
  if (!fetched && !fetching) {
    fetching = true;
    // Handle errrrrs
    // Get all slates
    // Needs to be improved such that each request doesn't trigger an outgoing request
    console.log('getting slates')
    const res = await fetch('https://www.draftkings.com/lineup/getupcomingcontestinfo', { method: 'post', mode: 'no-cors' });
    const rawSlates = await res.json();

    // Get players from slate
    await Promise.all(rawSlates.map(getPlayers));
    fetched = true;
  }

  const { dispatch } = reduxStore;
  dispatch({
    type: 'SET_SLATES',
    payload: slates
  });

  return {};
};

export default withRedux(Index);
