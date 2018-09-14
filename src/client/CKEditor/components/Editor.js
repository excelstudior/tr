import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Editor.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Editor extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (

            <div className='Editor'>
                <div>
                    <li>SAVE</li>
                </div>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor 5!</p>"
                    onInit={editor => {
                        // You can store the "editor" and use when it's needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                    }}
                />
            </div>

        )
    }
}

// Editor.PropTypes={
//     Editor:PropTypes.array.isRequired
// }

export default Editor
