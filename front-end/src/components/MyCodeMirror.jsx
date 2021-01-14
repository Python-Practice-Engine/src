import React from 'react';

const mirror = require('codemirror');

class MyCodeMirror extends React.Component {
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

  componentWillUnmount() {
    // initialize CodeMirror once done
    if (this.codeMirror) {
      this.codeMirror.toTextArea();
      this.codeMirror = null;
    }
  }

    onEdit = (editor) => {
      // Modifies editor
      const change = this.props;
      document.getElementById('code-input').value = editor.getValue();
      if (change.onChange) {
        change.onChange(editor.getValue());
      }
    };

    render() {
      return (
        <textarea id="code-input" name="code-input" margin="0">
          #Your Code Here
        </textarea>
      );
    }
}

export default MyCodeMirror;
