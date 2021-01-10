import React from 'react';
  import {
    Card,
    Input,
    Button,
} from 'antd';
import '../style/style.css';
import MyCodeMirror from './MyCodeMirror';
import 'antd/dist/antd.css';


/*File consists of auxiliary functions for IDE rendering*/

class Skulpt extends React.Component {
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "../skulpt.js";
        script.async = true;
        script.onload = () => this.execute();
      
        document.body.appendChild(script);
    }

    constructor(props) {
        super(props);
        this.execute = this.execute.bind(this);
    }

    execute() {       
        function outf(text) { 
            var mypre = document.getElementById("code-output"); 
            mypre.innerHTML = mypre.innerHTML + text; 
        } 
        function builtinRead(x) {
            if (window.Sk.builtinFiles === undefined || window.Sk.builtinFiles["files"][x] === undefined)
                    throw "File not found: '" + x + "'";
            return window.Sk.builtinFiles["files"][x];
        }

        var prog = document.getElementById("code-input").value; 
        var mypre = document.getElementById("code-output"); 
        mypre.innerHTML = ''; 
        window.Sk.python3 = true;
        window.Sk.pre = "output";
        window.Sk.configure({output:outf, read:builtinRead}); 
        var myPromise = window.Sk.misceval.asyncToPromise(function() {
            return window.Sk.importMainWithBody('<stdin>', false, prog, true);
        });
        myPromise.then(function(mod) {
            console.log('success');
        },
        function(err) {
            console.log(err.toString());
        });
    }
    
    render() {
        return (
            <div className="ide-card">
                <Card title="Python Text Editor">
                    <Input.Group size="large" className="mock-input">
                        <div>
                            <textarea id="code-input" name="code-input" margin="0">Your Code Here</textarea>
                            <MyCodeMirror></MyCodeMirror>
                            <pre id="code-output"></pre>
                        </div>
                    </Input.Group>
                    <textarea readonly="true" class="output" id="code-output"></textarea>
                </Card>
                <div className="submit-btns">
                    <Button type="primary" size="large" onClick={this.execute}>Run</Button>{' '}
                    <Button size="large">Submit</Button>{' '}
                </div>
            </div>
        );
    }

    componentDidUnmount () {
        document.body.removeScript("../skulpt.js");
    }
}

export default Skulpt;
