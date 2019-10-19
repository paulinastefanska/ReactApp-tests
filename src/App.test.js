import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import PlayerList from './components/PlayerList/PlayerList';
import AddPlayer from './components/AddPlayer/AddPlayer';

it('renders without crashing', () => {
  shallow(<App />);
});

it('should update player score', () => {
  const appComponent = shallow(<App />);

  const players = [
    {
      name: 'Kunegunda', 
      score: 5,
    },
    {
      name: 'Antoś',
      score: 0,
    },
  ];

  appComponent.setState({ players });

  const onScoreUpdate = appComponent.find(PlayerList).prop('onScoreUpdate');
  onScoreUpdate(0, 5);
  const playersAfterUpdate = appComponent.state('players');

  expect(playersAfterUpdate[0].score).toEqual(10);
});

it('should add player after call onPlayerAdd in AddPlayer', () => {
  const appComponent = shallow(<App />);

  const onPlayerAdd = appComponent.find(AddPlayer).prop('onPlayerAdd');
  onPlayerAdd('Ania');

  const players = appComponent.state('players');

  expect(players.length).toEqual(1);
  expect(players[0].name).toEqual('Ania');
  expect(players[0].score).toEqual(0);
});

it('should remove player from state after call onPlayerRemove', () => {
  const appComponent = shallow(<App />);

  const players = [
    {
      name: 'Kunegunda',
      score: 5,
    },
    {
      name: 'Antoś',
      score: 0,
    },
  ];

  appComponent.setState({ players });

  const onPlayerRemove = appComponent.find(PlayerList).prop('onPlayerRemove');
  onPlayerRemove(0);

  const playersAfterUpdate = appComponent.state('players');

  expect(playersAfterUpdate.length).toEqual(1);
  expect(playersAfterUpdate[0].name).toEqual('Antoś');
  expect(playersAfterUpdate[0].score).toEqual(0);
});