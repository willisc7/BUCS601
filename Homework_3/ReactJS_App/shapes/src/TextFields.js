import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  menu: {
    width: 200,
  },
});

class TextFields extends React.Component {
  state = {
    circle: '',
    triangle: '',
    rectangle: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="circle"
          label="Radius"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('circle')}
          margin="normal"
        />
        <TextField
          id="triangle"
          label="Base to height"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('triangle')}
          margin="normal"
        />
        <TextField
          id="triangle"
          label="Base length"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('triangle')}
          margin="normal"
        />
        <TextField
          id="rectangle"
          label="Height"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('rectangle')}
          margin="normal"
        />
        <TextField
          id="rectangle"
          label="Width"
          className={classes.textField}
          value={this.state.name}
          onChange={this.handleChange('rectangle')}
          margin="normal"
        />
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
