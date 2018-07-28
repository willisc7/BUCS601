import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";
import Button from "components/CustomButtons/Button.jsx";

class UploadImage extends React.Component {

    state = {}

    render() {
        return (
            <Button color="danger">Upload</Button >
        )
    }
}

export default withStyles(productStyle)(UploadImage);