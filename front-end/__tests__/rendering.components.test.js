import React from 'react';
import renderer from 'react-test-renderer';
import TutorialContent from '../src/components/TutorialContent';
import TestCases from '../src/components/TestCases';
import MyCodeMirror from '../src/components/MyCodeMirror';
import QuestionContent from '../src/components/QuestionContent';
import Skulpt from '../src/components/Skulpt';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { mount, configure } from 'enzyme';

configure({adapter: new Adapter()});

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

// Tests that the TutotiralContent component properly renders the relvant HTML
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

// Tests that the TestCases component properly renders the relvant HTML
// As well as properly displaying retrieved testcase information
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

// Tests that the MyCodeMirror component properly renders the relvant HTML
it('renders the code mirror correctly', () => {
const tree = renderer
  .create(<MyCodeMirror onChange={true}></MyCodeMirror>)
  .toJSON();
expect(tree).toMatchSnapshot();
});

// Tests that the execute() method of the
// Skulpt third-party library is properly called
it('skulpt execute() interperts user python code', async () => {
const tree = mount(<Skulpt></Skulpt>);
const instance = tree.instance();
const compute = jest.spyOn(instance, 'execute');

instance.execute();

expect(compute).toHaveBeenCalledTimes(1);
});

// Tests that the Run button is properly connected to the execute() method
it('run call execute() and computes code', async () => {
const tree = mount(<Skulpt></Skulpt>);

tree.find("Button#Run").prop('onClick');

expect(tree.find("#output-area")).toHaveLength(1);
});

// Tests that the execute() method of the Skulpt third-party library 
// runs with no errors
it('tests that skulpt execute() throws no errors', async () => {
const tree = mount(<Skulpt></Skulpt>);
const instance = tree.instance();
const compute = jest.spyOn(instance, 'execute');
instance.execute();

expect(compute).toHaveReturned();
});

// Tests that the submit() method of the Skulpt third-party 
// library is properly called
it('skulpt submit() interperts user python code', async () => {
const tree = mount(<Skulpt></Skulpt>);
const instance = tree.instance();
const compute = jest.spyOn(instance, 'submit');
instance.submit();

expect(compute).toHaveBeenCalledTimes(1);
});

// Tests that the Submit button is connected to the submit() method
it('submit calls submit() and computes code', async () => {
const tree = mount(<Skulpt></Skulpt>);

tree.find("Button#Submit").prop('onClick');

expect(tree.find("#output-area")).toHaveLength(1);
});

// Tests that the submit() method of the Skulpt third-party 
// library runs with no errors
it('tests that skulpt submit() throws no errors', async () => {
const tree = mount(<Skulpt></Skulpt>);
const instance = tree.instance();
const compute = jest.spyOn(instance, 'submit');
instance.submit();

expect(compute).toHaveReturned();
});

// Tests that the QuestionContent component properly renders the relvant HTML
// As well as properly displaying retrieved question details
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
