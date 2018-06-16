import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { TextField, Button } from '@material-ui/core';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 200
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: 100,
    width: 100,
  },
  button: {
    marginLeft: theme.spacing.unit,
    margin: theme.spacing.unit,
    marginRight: 50,
    width: 150
  },
  displayText: {
    margin: theme.spacing.unit
  }
});

// initialize the things
let num_array = [];
let reverse_num_array = [];

class App extends React.Component {

  // keep track of what number is currently on the screen
  state = {
    num: ""
  };
  handleChange = num => event => {
    this.setState({
      [num]: event.target.value
    });
  };

  // add number to the array
  handleAddNum = () => {

    //make sure reverse_num_array is empty so it doesn't
    //hang around on the screen
    if (reverse_num_array.length > 0) {
      reverse_num_array = [];
    }

    // put number in the array and clear the value in
    // the textfield
    num_array.push(this.state.num);
    this.setState({
      num: ""
    });
  };

  handleReverse = () => {
    // reverse num_array starting from num_array.length-1
    // because otherwise it will put in an empty value
    for (let i = num_array.length - 1; i >= 0; i--) {
      reverse_num_array.push(num_array[i]);
    }

    // clear the textfield
    this.setState({
      num: ""
    });
  };

  render() {
    const { classes } = this.props;
    let print_reverse = "";

    // if this is true, then the user pressed the reverse button
    if (reverse_num_array.length > 0) {
      print_reverse =
        <div>
          Reverse value of array is: {reverse_num_array.toString()}
        </div>
    }

    return (
      <div>

        <div className={classes.container}>
          <form noValidate autoComplete="off">
            <TextField
              id="num_textfield"
              label="Number"
              className={classes.textField}
              value={this.state.num}
              onChange={this.handleChange('num')}
              margin="normal"
            />
          </form>
        </div>

        <div className={classes.container}>
          <Button variant="outlined" className={classes.button} onClick={() => this.handleAddNum()}>
            Add Number
          </Button>
          <Button variant="outlined" className={classes.button} onClick={() => this.handleReverse()}>
            Reverse
          </Button>
        </div>

        <div className={classes.container}>
          <div className={classes.displayText}>
            Current value of array: {num_array.toString()}
          </div>
          <div className={classes.displayText}>
            {print_reverse}
          </div>
        </div>

      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
