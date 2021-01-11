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
            var output = document.getElementById("output-area");
            output.style.display = "block";
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
                <div>
                    <Input.Group compact size="large" className="mock-input">
                    <MyCodeMirror></MyCodeMirror>
                    </Input.Group>
                </div>
                <div className="submit-btns">
                    <Button type="primary" size="medium" onClick={this.execute}>
                        Run
                    </Button>{' '}
                    <Button size="medium">
                        Submit
                    </Button>{' '}
                </div>
                <div id="output-area" style={{display:"none"}}>
                    <textarea readonly="true" class="output" id="code-output" name="output">
                    </textarea>
                </div>
            </div>
        );
    }

    componentDidUnmount () {
        document.body.removeScript("../skulpt.js");
    }
}

export default Skulpt;
