import React, { Component } from 'react';
import './App.css';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 200
  },
  button: {
    marginLeft: theme.spacing.unit,
    marginRight: 200
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: 200,
    width: 150
  },
  formControl: {
    marginLeft: theme.spacing.unit,
    width: 200
  }
});

class App extends Component {
  state = {
    answer: "",
    num1: "",
    num2: ""
  };

  handleChange = event => {
    this.setState({
      value: event.target.value,
      answer: "",
      num1: "",
      num2: ""
    });
  };

  handleSubmit = () => {
    this.setState({
      answer: `The answer is: ${Number(this.state.num1) + Number(this.state.num2)}`
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.container}>
        <form className={classes.formControl}>
          <TextField className={classes.textField} id="num1" label="Number 1" value={this.state.num1} margin="normal" onChange={e => this.setState({ num1: e.target.value })} />
          <TextField className={classes.textField} id="num1" label="Number 2" value={this.state.num2} margin="normal" onChange={e => this.setState({ num2: e.target.value })} />
          <Button className={classes.button} variant="outlined" onClick={() => this.handleSubmit()}>
            Submit
        </Button>
          {this.state.answer}
        </form>
      </div>
    );
  }
}

export default withStyles(styles)(App);
