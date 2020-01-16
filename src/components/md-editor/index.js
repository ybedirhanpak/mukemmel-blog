import React from "react";
import MarkdownIt from "markdown-it";
import dynamic from "next/dynamic";

const MdEditor = dynamic({
    loader: () => import("react-markdown-editor-lite"),
    loading: () => <p>Loading caused by client page transition ...</p>
}, {
    ssr: false
})

const MOCK_DATA = "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it."

class MarkdownEditor extends React.Component {
    mdParser = null;
    constructor(props) {
        super(props);
        this.mdParser = new MarkdownIt(/* Markdown options*/);
    }

    handleEditorChange = ({ html, text }) => {
        console.log("handle editor change, ", html, text);
    }

    render() {
        return (
            <div class="create-post">
                <MdEditor
                    value={MOCK_DATA}
                    renderHTML={(text) => this.mdParser.render(text)}
                    onChange={this.handleEditorChange}
                />
            </div>
        )
    }
}

export default MarkdownEditor;