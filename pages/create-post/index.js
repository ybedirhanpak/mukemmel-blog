import React from "react";

//Components
import BasePage from "../../src/components/base-page";
import MDEditor from "../../src/components/md-editor";

const CreatePost = ({props}) => {

    return (
        <BasePage
            title="Create Post"
            icon="/favicon.ico"
        >
            <MDEditor/>
        </BasePage>
    )
} 

export default CreatePost;