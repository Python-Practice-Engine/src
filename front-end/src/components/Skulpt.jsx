import React from 'react';

// React component library imports
import {
  Input,
  Button,
  Row,
  Tooltip,
  Space,
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
/* File consists of auxiliary functions for IDE rendering */
// Used to output computed code
function outf(text) {
  const mypre = document.getElementById('code-output');
  const output = document.getElementById('output-area');
  output.style.display = 'block';
  mypre.innerHTML += text;
}

// Used by thrid-party plugin to compute sent code
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
    script.onload = () => this.execute();

    document.body.appendChild(script);
  }

  // Auxiliary function that allows the user to run their code without running the questions tests
  execute = () => {
    // Variable declarations
    const codeOutput = document.getElementById('code-input');

    if (codeOutput.value !== null) {
      // DOM elements to be used by Skulpt
      const prog = codeOutput.value;
      const mypre = codeOutput;

      // Auxiliary preperations for Skulpt
      mypre.innerHTML = '';
      window.Sk.python3 = true;
      window.Sk.pre = 'output';
      window.Sk.configure({ output: outf, read: builtinRead });

      // Use Skulpt to execute code
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
        console.log('success');
      },
      // Error in code, output error message
      (error) => {
        const errMsg = error.toString();
        const lineNum = parseInt(errMsg.substr(errMsg.length - 1), 10) - 1;
        const msg = errMsg.slice(0, -1) + lineNum.toString();
        outf(msg);
      });
    }
  }

  // Auxiliary function that allows the user to run the given questions test-cases
  submit = () => {
    // Varaibles declarations
    let i;
    const idAux = '#Test Case #';
    const tests = this.props.testCases;
    const codeOutput = document.getElementById('code-input');

    if (codeOutput.value !== null) {
      // Loop through test-cases for given question
      for (i = 0; i < tests.length; i += 1) {
        // Append tests individually to code then execute
        const prog = codeOutput.value + tests[i].code.replaceAll('"', '\\"');
        const mypre = codeOutput;
        const tag = document.getElementById(idAux + tests[i].TCid);

        // Auxiliary preperations for Skulpt
        mypre.innerHTML = '';
        window.Sk.python3 = true;
        window.Sk.pre = 'output';
        window.Sk.configure({ output: outf, read: builtinRead });

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
          tag.style.display = '';
          console.log('success');
        },
        // Error in code, output error message
        (error) => {
          const errMsg = error.toString();
          const lineNum = parseInt(errMsg.substr(errMsg.length - 1), 10) - 1;
          const msg = errMsg.slice(0, -1) + lineNum.toString();
          outf(msg);
        });
      }
    }
  }

  // Used to Display the IDE portion of the IDE page
  render() {
    return (
      <div className="ide-card">
        <div>
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
              to={`/IDE/${this.props.id - 1}`}
            >
              <Tooltip
                placement="left"
                title="Easier"
              >
                <Button
                  type="primary"
                  size="medium"
                  style={{
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  icon={<LeftOutlined />}
                  onClick={this.props.handleEasyClick}
                />
              </Tooltip>
            </NavLink>
            <Space>
              <Button
                type="primary"
                size="medium"
                onClick={this.execute}
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Run
              </Button>
              <Button
                size="medium"
                onClick={this.submit}
                style={{
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                Submit
              </Button>
            </Space>
            <NavLink
              tag={Link}
              to={`/IDE/${this.props.id + 1}`}
            >
              <Tooltip
                placement="right"
                title="Harder"
              >
                <Button
                  type="primary"
                  size="medium"
                  style={{
                    display: 'inline-flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  icon={<RightOutlined />}
                  onClick={this.props.handleHardClick}
                />
              </Tooltip>
            </NavLink>
          </Row>
        </HashRouter>
        <div id="output-area" style={{ display: 'none' }}>
          <textarea
            readOnly="true"
            className="output"
            id="code-output"
            name="output"
          />
        </div>
      </div>
    );
  }
}

export default Skulpt;
