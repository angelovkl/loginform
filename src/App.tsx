import React from 'react';
import './App.css';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import Button from '@material-ui/core/Button';

import { ReactComponent as FacebookLogo } from './svg/facebook-color.svg'
import { ReactComponent as GoogleLogo } from './svg/google-color.svg'

function App() {
  const [category, setCategory] = React.useState<string | number>('');
  const [password, setPassword] = React.useState('');
  const [id, setId] = React.useState('');
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleCatChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategory(event.target.value as number);
  };

  const handlePassChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleIdChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  return (
    <div className="App">
      <form className="form">
            <div className="fieldDetails">
                <h4 className="title">Identity provider</h4>
                <span className="description">Choose the category of the customer</span>
            </div>
            <div className="fieldWrap">
                <FormControl className="field" variant="outlined" >
                    <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={category}
                    onChange={handleCatChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={1}> <FacebookLogo style={{width:"15px",padding: "0px 10px 0px 10px"}}></FacebookLogo> Facebook</MenuItem>
                    <MenuItem value={2}> <GoogleLogo style={{width:"15px",padding: "0px 10px 0px 10px"}}></GoogleLogo> Google</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="fieldDetails">
                <h4 className="title">Client ID</h4>
                <span className="description">Enter a unique ID for the users to access this account</span>
            </div>
            <div className="fieldWrap">
                <TextField
                    className="field"
                    label='Client ID'
                    variant="outlined"
                    type="text"
                    onChange={handleIdChange}
                    value={id}
                />
            </div>
            <div className="fieldDetails">
                <h4 className="title">Client Secret Code</h4>
                <span className="description">Enter a strong code for the users to access this account</span>
            </div>
            <div className="fieldWrap">
                <TextField
                    className="field"
                    label='Password'
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            >
                            {showPassword ? <span className="passLabel">Hide</span> : <span className="passLabel">Show</span>}
                            </IconButton>
                        </InputAdornment>
                        )
                    }}
                    onChange={handlePassChange}
                    value={password}
                />
            </div>
            {
            category === 1 &&
            <div>
                <div className="fieldDetails">
                    <h4 className="title">Extra field </h4>
                    <span className="description">Show this if facebook is selectedf</span>
                </div>
                <div className="fieldWrap">
                    <Button
                        variant="contained"
                        component="label"
                        >
                        Upload File
                        <input
                            type="file"
                            hidden
                        />
                    </Button>
                </div>     
            </div>
            }
            <div className="buttonWrap">
                <Button variant="outlined" color="primary" className="button">
                    Cancel
                </Button>
                <Button variant="contained" color="primary" className="button">
                    Save Changes
                </Button>
            </div>
        </form>
    </div>
  );
}

export default App;
