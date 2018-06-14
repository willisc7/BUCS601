import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Rectangle, Circle, Triangle } from './Shape';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 150
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
   },
  }
});

class ShapeUI extends React.Component {
  state = {
    answer: "",
    circle_radius: "",
    triangle_base_to_height: "",
    triangle_base_length: "",
    rectangle_width: "",
    rectangle_height: "",
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
    this.setState({ value: event.target.value });
  };

  handleSubmit = () => {
    if (this.state.value === 'circle') {
      let my_circle = new Circle(this.state.circle_radius);
      this.setState({
        answer: my_circle.calculateArea(),
      });
    }
    if (this.state.value === 'triangle') {
      let my_triangle = new Triangle(this.state.triangle_base_to_height, this.state.triangle_base_length);
      this.setState({
        answer: my_triangle.calculateArea(),
      });
    }
    if (this.state.value === 'rectangle') {
      let my_rectangle = new Rectangle(this.state.rectangle_height, this.state.rectangle_width);
      this.setState({
        answer: my_rectangle.calculateArea(),
      });
    }
  };

  render() {
    let form;
    const { classes } = this.props;

    if (this.state.value === 'circle') {
      form =
        <div>
          <form>
            <TextField id="circle_radius" label="Radius" value={this.state.name} margin="normal" className={classes.textField} onChange={e => this.setState({ circle_radius: e.target.value })} />
          </form>
        </div>
    }
    if (this.state.value === 'triangle') {
      form =
        <div>
          <form>
            <TextField id="triangle_base_to_height" label="Base to height" value={this.state.name} margin="normal" className={classes.textField} onChange={e => this.setState({ triangle_base_to_height: e.target.value })} />
            <TextField id="triangle_base_length" label="Base length" value={this.state.name} margin="normal" className={classes.textField} onChange={e => this.setState({ triangle_base_length: e.target.value })} />
          </form>
        </div>
    }
    if (this.state.value === 'rectangle') {
      form =
        <div>
          <form>
            <TextField id="rectangle_height" label="Height" value={this.state.name} margin="normal" className={classes.textField} onChange={e => this.setState({ rectangle_height: e.target.value })} />
            <TextField id="rectangle_width" label="Width" value={this.state.name} margin="normal" className={classes.textField} onChange={e => this.setState({ rectangle_width: e.target.value })} />
          </form>
        </div>
    }

    return (
      <div className={classes.container}>
        <FormControl component="fieldset" required className={classes.formControl}>
          <FormLabel component="legend">Choose shape to calculate area of</FormLabel>
          <RadioGroup
            name="shapes"
            className={classes.group}
            value={this.state.value}
          >
            <FormControlLabel value="circle" control={<Radio />} label="Circle" onChange={this.handleChange('circle')}/>
            <FormControlLabel value="triangle" control={<Radio />} label="Triangle" onChange={this.handleChange('triangle')}/>
            <FormControlLabel value="rectangle" control={<Radio />} label="Rectangle" onChange={this.handleChange('rectangle')}/>
          </RadioGroup>
        </FormControl>
        {form}
        <Button variant="outlined" className={classes.button} onClick={() => this.handleSubmit()}>
          Submit
        </Button>
        <TextField id="answer" label="Area" value={this.state.answer} margin="normal" className={classes.textField} />
      </div>
    );
  }
}

ShapeUI.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ShapeUI);
