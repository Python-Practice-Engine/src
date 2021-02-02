import React from 'react';
import renderer from 'react-test-renderer';
import TutorialContent from '../src/components/TutorialContent';
import TestCases from '../src/components/TestCases';
import MyCodeMirror from '../src/components/MyCodeMirror';
import QuestionContent from '../src/components/QuestionContent';

// Workaround source: https://stackoverflow.com/questions/39830580/jest-test-fails-typeerror-window-matchmedia-is-not-a-function
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

it('renders the tutorial content correctly', () => {
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

it('renders the test cases correctly', () => {
    const tree = renderer
      .create(<TestCases testCases={
          [
              {
                  test: "test 1",
                  TCid: 1,
              },
              {
                test: "test 2",
                TCid: 2,
            },
          ]
      }></TestCases>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the code mirror correctly', () => {
    const tree = renderer
      .create(<MyCodeMirror onChange={true}></MyCodeMirror>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders the question content correctly', () => {
    const tree = renderer
      .create(<QuestionContent contents={
          {
              name: "q1",
              question: "why is the sky blue?",
              tags: "easy",
          }
  
      } >
  
      </QuestionContent>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  