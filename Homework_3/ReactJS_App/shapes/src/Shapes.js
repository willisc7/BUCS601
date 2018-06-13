import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: theme.spacing.unit,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  }
});

class Shape {
  constructor() {
    this.name = "";
  }

  calculateArea() {
    return 0.00;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.name = "Circle";
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * (this.radius * this.radius);
  }
}

class Triangle extends Shape {
  constructor(height_to_base, base) {
    super();
    this.name = "Triangle";
    this.height_to_base = height_to_base;
    this.base = base;
  }

  calculateArea() {
    return (this.height_to_base * this.base) / 2;
  }
}

class Rectangle extends Shape {
  constructor(height, width) {
    super();
    this.name = "Rectangle";
    this.height = height;
    this.width = width;
  }

  calculateArea() {
    return (this.height * this.width);
  }
}

class Shapes extends React.Component {

  state = {
    circle: false,
    triangle: false,
    rectangle: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleSubmit = () => {
    let answer;
    if (this.state.circle === true) {
      let my_circle = new Circle(50.05);
      this.answer = my_circle.calculateArea()
    }
    if (this.state.triangle === true) {
      let my_triangle = new Triangle(20.6, 30.2);
      this.answer = my_triangle.calculateArea();
    }
    if (this.state.rectangle === true) {
      let my_rectangle = new Rectangle(19.5, 23.2);
      this.answer = my_rectangle.calculateArea();
    }
  };

  render() {
    let form;
    let area = this.answer;
    const { classes } = this.props;

    if (this.state.circle === true) {
      form =
        <div>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField id="circle" label="Radius" value={this.state.name} margin="normal" className={classes.textField} />
          </form>
        </div>
    }
    if (this.state.triangle === true) {
      form =
        <div>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField id="triangle" label="Base to height" value={this.state.name} margin="normal" className={classes.textField} />
            <TextField id="triangle" label="Base length" value={this.state.name} margin="normal" className={classes.textField} />
          </form>
        </div>
    }
    if (this.state.rectangle === true) {
      form =
        <div>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField id="rectangle" label="Height" value={this.state.name} margin="normal" className={classes.textField} />
            <TextField id="rectangle" label="Width" value={this.state.name} margin="normal" className={classes.textField} />
          </form>
        </div>
    }

    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Choose shape to calculate area of</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.circle}
                  onChange={this.handleChange('circle')}
                  value="circle"
                />
              }
              label="Circle"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.jason}
                  onChange={this.handleChange('triangle')}
                  value="triangle"
                />
              }
              label="Triangle"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={this.state.rectangle}
                  onChange={this.handleChange('rectangle')}
                  value="rectangle"
                />
              }
              label="Rectangle"
            />
          </FormGroup>
        </FormControl>
        {form}
        <Button variant="outlined" className={classes.button} onClick={() => this.handleSubmit()}>
          Submit
        </Button>
        <TextField id="answer" label={this.area} margin="normal" className={classes.textField} />
      </div>
    );
  }
}

Shapes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Shapes);
