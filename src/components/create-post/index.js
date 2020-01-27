import React from "react";
import MarkdownIt from "markdown-it";
import MarkdownEmoji from "markdown-it-emoji";

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
            content: "",
            imageURL: "",
            minutes: "1",
            tag: ""
        }
        this.mdParser = new MarkdownIt(/* Markdown options*/).use(MarkdownEmoji);
    }

    publishPost = () => {
        const { title, content, imageURL, minutes, tag } = this.state;
        const postBody = {
            slug: this.createSlug(title),
            title,
            content,
            imageURL,
            minutes,
            tag
        };
        ApiPost("posts", postBody)
            .then(response => {
                if (response.status >= 200 && response.status < 300) {
                    console.log("Post created successfully ", response);
                    alert("Post created", response);
                } else {
                    console.log("Post create failed", response);
                    alert("Post create failed", response);
                }
            })
            .catch(err => {
                console.log("Post create error: ", err);
            })
    }

    createSlug = (title = "") => {
        return title.replace(/[^a-zA-Z1-9 ]/g, "")  // Remove non-alphanumeric characters
            .replace(/\s+/g, "-")                   // Replace spaces with -
            .toLowerCase();                         // Convert to lower case
    }

    render() {
        return (
            <div className="create-post">
                <div className="header-wrapper">
                    <input
                        className="form-input"
                        type="text"
                        onChange={() => this.setState({ title: event.target.value })}
                        placeholder="Post Header"
                    />
                    <input
                        className="form-input post-image"
                        type="text"
                        onChange={() => this.setState({ imageURL: event.target.value })}
                        placeholder="Image URL"
                    />
                    <div className="h-block">
                        <input
                            className="form-input post-minutes"
                            type="number"
                            onChange={() => this.setState({ minutes: event.target.value })}
                            placeholder="Minutes"
                        />
                        <div className="post-tag-wrapper">
                            <input
                                type="text"
                                list="tags"
                                className="form-input post-tag-input"
                                placeholder="Tag"
                                onChange={() => this.setState({ tag: event.target.value })}
                            />
                            <datalist id="tags">
                                <option> Technology </option>
                                <option> Lifestyle </option>
                                <option> Programming </option>
                                <option> University </option>
                            </datalist>
                        </div>
                    </div>
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