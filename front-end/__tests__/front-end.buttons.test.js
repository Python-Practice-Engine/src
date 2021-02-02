import React from 'react';
import renderer from 'react-test-renderer';
import TutorialContent from '../src/components/TutorialContent';

it('renders the Tutorial content correctly', () => {
  const tree = renderer
    .create(<TutorialContent contents={
        {
            name: "tut1",
            description: "description"
        }

    } >

    </TutorialContent>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});