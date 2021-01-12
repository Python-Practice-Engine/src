import React from 'react';
import {
  Input,
  Button,
} from 'antd';
import '../style/style.css';
import MyCodeMirror from './MyCodeMirror';

/* File consists of auxiliary functions for IDE rendering */

class Skulpt extends React.Component {
  constructor(props) {
    super(props);
    this.execute = this.execute.bind(this);
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

    const prog = document.getElementById('code-input').value;
    const mypre = document.getElementById('code-output');
    mypre.innerHTML = '';
    window.Sk.python3 = true;
    window.Sk.pre = 'output';
    window.Sk.configure({ output: outf, read: builtinRead });
    const myPromise = window.Sk.misceval.asyncToPromise(
      () => window.Sk.importMainWithBody(
        '<stdin>',
        false,
        prog,
        true,
      ),
    );
    myPromise.then(() => {
      console.log('success');
    },
    (err) => {
      console.log(err.toString());
    });
  }

  render() {
    return (
      <div className="ide-card">
        <div>
          <Input.Group compact size="large" className="mock-input">
            <MyCodeMirror />
          </Input.Group>
        </div>
        <div className="submit-btns">
          <Button type="primary" size="medium" onClick={this.execute}>
            Run
          </Button>
          {' '}
          <Button size="medium">
            Submit
          </Button>
          {' '}
        </div>
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
