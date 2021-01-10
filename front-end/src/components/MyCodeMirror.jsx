import React from 'react';
import '../style/style.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/icecoder.css';
import 'codemirror/mode/python/python.js';

class MyCodeMirror extends React.Component {

    componentDidMount() {
        // Initialize CodeMirror
        var options = {
            mode: 'python',
            theme: 'icecoder',
            lineNumbers: true
        };
        this.codeMirror = require('codemirror').fromTextArea(document.getElementById("code-input"), options);
        this.codeMirror.setSize("100%", "100%");
        this.codeMirror.on('change', this.onEdit);
    }
  
    componentWillUnmount() {
        // Deinitialize CodeMirror once done
        if (this.codeMirror) {
            this.codeMirror.toTextArea();
            this.codeMirror = null;
        }
    }
  
    onEdit = (editor) => {
        // Modifys editor
        document.getElementById("code-input").value = editor.getValue();
        if (this.props.onChange) {
            this.props.onChange(editor.getValue());
        }
    };
  
    render() {
        return <textarea id="code-input" name="code-input" margin="0">Your Code Here</textarea>;
    }
}
  
export default MyCodeMirror;