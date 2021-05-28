import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class InputItem extends React.Component {
    state = {
        inputValue: '',
        isError: false
    };

   
  onButtonClick = () => {
     if (this.state.inputValue == false) {
      this.setState({
        isError: true
      })
    } else {
      this.setState({
        inputValue: '',
        isError: false
      })

      this.props.onClickAdd(this.state.inputValue.toUpperCase());
    }
  };

    render() {
        let textField;
        if (this.state.isError == false) {
            textField = <TextField
                id="standard-full-width"
                placeholder="Type the name of the task"
                fullWidth
                value={this.state.inputValue}
                isError={this.props.isError}
                onChange={event => this.setState({inputValue: event.target.value})}
            />
        } else {
            textField = <TextField
                error
                id="standard-full-width"
                placeholder="The filed musn't be empity"
                fullWidth
                value={this.state.inputValue}
                isError={this.props.isError}
                onChange={event => this.setState({inputValue: event.target.value})}
            />
        };

        return (<Grid> { textField }
            <Button
                variant='contained'
                color='#d3d3d3'
                fullWidth
                onClick={this.onButtonClick}
                onClickAdd ={this.onClickAdd}
                > 
                Add
            </Button>
            </Grid>);
    }
};

export default InputItem;