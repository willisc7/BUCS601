import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import TextField from '@material-ui/core/TextField';

class SwitchesGroup extends React.Component {
  state = {
    circle: false,
    triangle: false,
    rectangle: false,
  };

  renderCircleForm = name => event => {
    this.setState({ [name]: event.target.checked });
    return (
      <TextField
        id="circle"
        label="Radius"
        value={this.state.name}
        margin="normal"
      />
    );
  };

  renderTriangleForm = name => event => {
    this.setState({ [name]: event.target.checked });
    return (
      <TextField
        id="triangle"
        label="Base to height"
        value={this.state.name}
        margin="normal"
      />,
      <TextField
        id="triangle"
        label="Base length"
        value={this.state.name}
        margin="normal"
      />
    );
  };

  renderRectangleForm = name => event => {
    this.setState({ [name]: event.target.checked });
    return (
      <TextField
        id="rectangle"
        label="Height"
        value={this.state.name}
        margin="normal"
      />,
      <TextField
        id="rectangle"
        label="Width"
        value={this.state.name}
        margin="normal"
      />
    );
  };

  render() {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">Choose shape to calculate area of</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={this.state.circle}
                onChange={this.renderCircleForm('circle')}
                value="circle"
              />
            }
            label="Circle"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.jason}
                onChange={this.renderTriangleForm('triangle')}
                value="triangle"
              />
            }
            label="Triangle"
          />
          <FormControlLabel
            control={
              <Switch
                checked={this.state.rectangle}
                onChange={this.renderRectangleForm('rectangle')}
                value="rectangle"
              />
            }
            label="Rectangle"
          />
        </FormGroup>
      </FormControl>
    );
  }
}

export default SwitchesGroup;
