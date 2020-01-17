import React from "react";
import MarkdownIt from "markdown-it";
import dynamic from "next/dynamic";

const ApiPost = require("../../helpers/api-helper");

const MdEditor = dynamic({
    loader: () => import("react-markdown-editor-lite"),
    loading: () => <p>Loading caused by client page transition ...</p>
}, {
    ssr: false
})

class CreatePost extends React.Component {
    mdParser = null;
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            content: ""
        }
        this.mdParser = new MarkdownIt(/* Markdown options*/);
    }

    publishPost = () => {
        const { title, content } = this.state;
        const postBody = {
            slug: this.createSlug(title),
            title,
            content,
        };
        ApiPost("posts", postBody)
            // .then(response => response.json())
            .then(json => {
                console.log("Post created successfully ", json);
            })
            .catch(err => {
                console.log("Post couldn't created", err);
            })
    }

    createSlug = (title="") => {
        return title.replace(/[^a-zA-Z1-9 ]/g, "")  // Remove non-alphanumeric characters
            .replace(/\s+/g, "-")                   // Replace spaces with -
            .toLowerCase();                         // Convert to lower case
    }

    render() {
        return (
            <div className="create-post">
                <div className="header-wrapper">
                    <input className="form-input" type="text" onChange={() => this.setState({ title: event.target.value })} />
                </div>
                <div className="md-editor-wrapper">
                    <MdEditor
                        value={""}
                        renderHTML={(text) => this.mdParser.render(text)}
                        onChange={({ text }) => this.setState({ content: text })}
                    />
                </div>
                <div className="button-group">
                    <button className="btn" onClick={this.publishPost}>
                        Publish
                </button>
                    <button className="btn">
                        Archive
                </button>
                </div>
            </div>

        )
    }
}

export default CreatePost;