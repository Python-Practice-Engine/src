import React from 'react';
import {
  Input,
  Button,
  Row,
  Tooltip,
  Space,
} from 'antd';
import {
  Link,
  HashRouter,
  NavLink,
} from 'react-router-dom';
import '../style/style.css';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import MyCodeMirror from './MyCodeMirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/icecoder.css';
import 'codemirror/mode/python/python';

/* File consists of auxiliary functions for IDE rendering */

// function delayReload() {
//   setTimeout(window.location.reload(), 5000);
// }
class Skulpt extends React.Component {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);

    // Facing issues with code when adding state
    // this.state = {
    //   id: 0,
    // };
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = '../skulpt.js';
    script.async = true;
    script.onload = () => this.execute();

    document.body.appendChild(script);
  }

  execute = () => {
    function outf(text) {
      const mypre = document.getElementById('code-output');
      const output = document.getElementById('output-area');
      output.style.display = 'block';
      mypre.innerHTML += text;
    }
    function builtinRead(x) {
      if (
        window.Sk.builtinFiles === undefined
        || window.Sk.builtinFiles.files[x] === undefined
      ) {
        throw new Error(`File not found: '${x}'`);
      }
      return window.Sk.builtinFiles.files[x];
    }
    const codeOutput = document.getElementById('code-input');
    if (codeOutput.value !== null) {
      const prog = codeOutput.value;
      const mypre = codeOutput;
      mypre.innerHTML = '';
      window.Sk.python3 = true;
      window.Sk.pre = 'output';
      window.Sk.configure({ output: outf, read: builtinRead });
      const myPromise = window.Sk.misceval.asyncToPromise(
        () => window.Sk.importMainWithBody(
          '<stdin>',
          true,
          prog,
          true,
        ),
      );
      myPromise.then(() => {
        console.log('success');
      },
      (error) => {
        const errMsg = error.toString();
        const lineNum = parseInt(errMsg.substr(errMsg.length - 1), 10) - 1;
        const msg = errMsg.slice(0, -1) + lineNum.toString();
        outf(msg);
      });
    }
  }

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
