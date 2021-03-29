import React from 'react';

// React component library imports
import {
  Input,
  Button,
  Row,
  Typography,
  Card,
} from 'antd';
import {
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons';

// Imports for React routing
import {
  Link,
  HashRouter,
  NavLink,
} from 'react-router-dom';

// Code mirror imports
import 'codemirror/mode/python/python';

// Personal component imports
import MyCodeMirror from './MyCodeMirror';

const { Title } = Typography;
/* File consists of auxiliary functions for IDE rendering */
// Used by third-party plugin to compute sent code
function builtinRead(x) {
  if (
    window.Sk.builtinFiles === undefined
    || window.Sk.builtinFiles.files[x] === undefined
  ) {
    throw new Error(`File not found: '${x}'`);
  }
  return window.Sk.builtinFiles.files[x];
}

// Component to be used by the IDE to execute any user created code
class Skulpt extends React.Component {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);
    this.submit = this.submit.bind(this);
    this.outf = this.outf.bind(this);
    this.state = {
      output: '',
    };

    // Facing issues with code when adding state
    // this.state = {
    //   id: 0,
    // };
  }

  // loading relvant third-party plugin
  componentDidMount() {
    const script = document.createElement('script');
    script.src = '../skulpt.js';
    script.async = true;
  }

  // Used to output computed code
  outf = (text) => {
    const mypre = document.getElementById('code-output');
    const output = document.getElementById('output-area');
    output.style.display = 'block';
    this.setState((state) => ({
      output: state.output + text,
    }));
    mypre.innerHTML += text;
  }

  // Auxiliary function that allows the user to run
  // the given questions test-cases
  submit() {
    // Variables declarations
    let i;
    const tests = this.props.testCases;
    const codeOutput = document.getElementById('code-input');

    if (codeOutput) {
      // Loop through test-cases for given question
      for (i = 0; i < tests.length; i += 1) {
        // Append tests individually to code then execute
        const codeTR = tests[i].code;
        const expect = tests[i].expected;
        const prog = codeOutput.value + codeTR.replaceAll('\\', '');
        const tag = document.getElementById(tests[i].id.toString());

        // Auxiliary preperations for Skulpt
        this.setState({ output: '' });
        window.Sk.python3 = true;
        window.Sk.pre = 'output';
        window.Sk.configure({
          output: this.outf,
          read: builtinRead,
          killableWhile: true,
          yieldLimit: 100,
          execLimit: 5000,
          timeoutMsg: 'your program timed out',
          python3: true,
        });

        // Feed code into Skulpt to execute
        const myPromise = window.Sk.misceval.asyncToPromise(
          () => window.Sk.importMainWithBody(
            '<stdin>',
            true,
            prog,
            true,
          ),
        );
        // Code executes
        myPromise.then(() => {
          // Display 'Passed' tag if test passes
          const scrollingElement = (
            document.scrollingElement || document.body
          );
          scrollingElement.scrollTop = scrollingElement.scrollHeight;

          const result = expect.split('\n');
          let test = false;
          for (let item = 0; item < result.length; item += 1) {
            if (this.state.output.includes(result[item])) {
              test = true;
            } else {
              test = false;
              break;
            }
          }
          if (test) {
            tag.style.display = 'unset';
          }
          console.log('success');
        },
        // Error in code, output error message
        (error) => {
          const errMsg = error.toString();
          this.outf(errMsg);
        });
      }
    }
  }

  // Auxiliary function that allows the user to run their code without
  // running the questions tests
  execute() {
    // Variable declarations
    const codeOutput = document.getElementById('code-input');

    if (codeOutput) {
      // DOM elements to be used by Skulpt
      const prog = codeOutput.value;

      // Auxiliary preperations for Skulpt
      this.setState({ output: '' });
      window.Sk.python3 = true;
      window.Sk.pre = 'output';
      window.Sk.configure({
        output: this.outf,
        read: builtinRead,
        killableWhile: true,
        yieldLimit: 100,
        execLimit: 5000,
        timeoutMsg: 'your program timed out',
        python3: true,
      });

      // Feed code into Skulpt to execute
      const myPromise = window.Sk.misceval.asyncToPromise(
        () => window.Sk.importMainWithBody(
          '<stdin>',
          true,
          prog,
          true,
        ),
      );
      // Code executes properly
      myPromise.then(() => {
        const scrollingElement = (
          document.scrollingElement || document.body
        );
        scrollingElement.scrollTop = scrollingElement.scrollHeight;
        console.log('success');
        return 'success';
      },
      // Error in code, output error message
      (error) => {
        const errMsg = error.toString();
        this.outf(errMsg);
      });
    }
  }

  // Used to Display the IDE portion of the IDE page
  render() {
    return (
      <div className="ide-card">
        <div className="text-editor">
          <Input.Group compact size="large" className="mock-input">
            <MyCodeMirror />
          </Input.Group>
        </div>
        <HashRouter>
          <Row
            type="flex"
            align="middle"
            className="submit-btns"
            justify="space-between"
          >
            <NavLink
              tag={Link}
              to={`/question/${this.props.id - 1}`}
            >
              <Button
                type="primary"
                size="large"
                icon={<LeftOutlined />}
              />
            </NavLink>
            <NavLink
              tag={Link}
              to={`/question/${this.props.id + 1}`}
            >
              <Button
                type="primary"
                size="large"
                icon={<RightOutlined />}
              />
            </NavLink>
            <Button
              id="Run"
              type="primary"
              size="large"
              onClick={this.execute}
              className="run-btn"
            >
              Run
            </Button>
            <Button
              id="Submit"
              size="large"
              onClick={this.submit}
            >
              Submit
            </Button>
          </Row>
          <Row>
            <Title
              level={5}
              style={{ marginLeft: '2.25%', fontWeight: 'normal' }}
            >
              Difficulty
            </Title>
          </Row>
        </HashRouter>
        <div id="output-area">
          <Card
            type="inner"
            title="Output"
            style={{ padding: '0', margin: '0' }}
          >
            <textarea
              value={this.state.output}
              readOnly="{true}?"
              className="output"
              id="code-output"
              name="output"
            />
          </Card>
        </div>
      </div>
    );
  }
}

export default Skulpt;
