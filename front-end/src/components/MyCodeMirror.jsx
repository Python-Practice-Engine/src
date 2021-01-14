import React from 'react';
import '../style/style.css';

// Auxiliary helper
const mirror = require('codemirror');

// Component defining the CodeMirror instance to be used by the IDE
class MyCodeMirror extends React.Component {
  // Load in the relevant third-party plugin
  componentDidMount() {
    // Initialize CodeMirror
    const options = {
      mode: 'python',
      theme: 'icecoder',
      lineNumbers: true,
    };
    this.codeMirror = mirror.fromTextArea(
      document.getElementById('code-input'),
      options,
    );
    this.codeMirror.setSize('100%', '100%');
    this.codeMirror.on('change', this.onEdit);
  }

  // Unload thrid-party plugin after finished
  componentWillUnmount() {
    // initialize CodeMirror once done
    if (this.codeMirror) {
      this.codeMirror.toTextArea();
      this.codeMirror = null;
    }
  }

  // Update the Ui when user changes something in the code editor
  onEdit = (editor) => {
    // Modifies editor
    const change = this.props;
    document.getElementById('code-input').value = editor.getValue();
    if (change.onChange) {
      change.onChange(editor.getValue());
    }
  };

  // Display the UI overlay to the IDE
  render() {
    return (
      <textarea id="code-input" name="code-input" margin="0">
        #Your Code Here
      </textarea>
    );
  }
}

export default MyCodeMirror;
