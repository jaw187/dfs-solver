import Head from 'next/head';
import Header from  '../components/header';
import ImportProjection from '../components/importprojection.js';
import SlatePicker from '../components/slatepicker';
import StackBuilder from '../components/stackbuilder';
import Generator from '../components/generator';
import Pool from '../components/pool';
import Navigation from '../components/navigation';
import Lineups from '../components/lineups';
import { withRedux } from '../lib/redux';
import fetch from 'isomorphic-unfetch';

const slates = {};

const supportedSports = ['NFL', 'GOLF'];
const supportedGameTypes = ['Classic'];

const getPlayers = async function (slate) {
  if (supportedSports.includes(slate.Sport) && slate.GameType && supportedGameTypes.includes(slate.GameType.Name)) {
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
  }
};

const containerStyle = {
  backgroundColor: '#f6f6f6',
  height: '100%',
  width: '100%'
};

const topBarStyle = {
  backgroundColor: '#ffffff',
  margin: '0px 0px 16px 0px',
  padding: 16,
  display: 'flex',
  flexDirection: 'row',
  boxShadow: '1px 1px 17px -1px hsla(0, 0%, 63%, .69)'
}

const Index = () => {
  return (
    <div style={containerStyle}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Ubuntu&display=swap" rel="stylesheet"></link>
      </Head>
      <style jsx global>{`
        body {
          background: #f6f6f6;
          color: #333;
          margin: 0;
          padding: 0;
          font-family: 'Ubuntu';
          overflow-x: scroll;
        }
      `}</style>
      <div style={topBarStyle}>
        <Header />
        <Navigation />
      </div>
      <SlatePicker />
      <ImportProjection />
      <Pool />
      <StackBuilder />
      <Generator />
      <Lineups />
      <img src="https://logs-01.loggly.com/inputs/8a465978-add2-4b58-9d57-02f8869b2f17.gif?source=pixel&data=wut" />
    </div>
  );
}

// This is to try and stop spamming DK
let fetched = false;
let fetching = false;
const refreshSlatesRate = 1000 * 60 * 60;
const clearSlates = () => {
  Object.keys(slates).forEach((slate) => {
    delete slates[slate];
  });

  fetched = false;
  fetching = false;
};
setInterval(clearSlates, refreshSlatesRate);

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
  console.log('setting slates')//, slates)
  dispatch({
    type: 'SET_SLATES',
    payload: slates
  });

  return {};
};

export default withRedux(Index);
