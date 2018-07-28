import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "components/CustomButtons/Button.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class UploadImage extends React.Component {

    state = { images: [] }

    render() {
        return (
            <div>
                <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    hidden
                />
                <label htmlFor="contained-button-file">
                    <Button variant="contained" component="span">
                        Upload
            </Button>
                </label>
            </div>
        )
    }
}

export default withStyles(productStyle)(UploadImage);