import React from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    InputGroup,
    Button
  } from 'reactstrap';
import '../style/style.css';

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
            <Card >
                <CardHeader>Python Text Editor</CardHeader>
                <CardBody>
                <InputGroup size="lg" className="mock-input">
                <div>
                <textarea id="code-input" name="code-input" margin="0">Your Code Here</textarea>
                <pre id="code-output"></pre>
                </div>
                </InputGroup>
                </CardBody>
                
            </Card>
            <div className="submit-btns">
            <Button color="info" size="md" onClick={this.execute}>Run</Button>{' '}
            <Button color="outline-info" size="md">Submit</Button>{' '}
            </div>
            </div>
        );
    }

    componentDidUnmount () {
        document.body.removeScript("../skulpt.js");
    }
}

export default Skulpt;