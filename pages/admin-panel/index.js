import React from "react";

//Components
import BasePage from "../../src/components/base-page";
import MDEditor from "../../src/components/create-post";

const AdminPanel = ({ props }) => {

    return (
        <BasePage
            title="Admin Panel"
            icon="/favicon.ico"
        >
            <MDEditor />
        </BasePage>
    )
}

export default AdminPanel;