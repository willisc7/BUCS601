import React from 'react';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class SwitchesGroup extends React.Component {
  state = {
    circle: false,
    triangle: false,
    rectangle: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
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
    );
  }
}

export default SwitchesGroup;
