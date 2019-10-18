import PlayerList from './PlayerList';
import React from 'react';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  shallow(<PlayerList players={[]} />);
});