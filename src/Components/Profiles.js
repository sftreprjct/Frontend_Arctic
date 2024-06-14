import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
// import Switch from '@mui/material/Switch';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Grid } from '@mui/material';
import ButtonComplain from './ButtonComplain';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import axios from 'axios';
import HomeIcon from '@mui/icons-material/Home';
import { success } from '../util/Toastify';

export default function MenuAppBar() {

  // const [checked, setChecked] = React.useState(true);
  const [tempdata, setTempdata] = React.useState([]);

  const location = useLocation();

  React.useEffect(() => {
    if (location.state && location.state.tempdata) {
      setTempdata(location.state.tempdata);
    }
  }, [location.state]);

  console.log(tempdata)
  const navigate = useNavigate();

  // const username = tempdata.username;

  const handleChange = async () => {
    // console.log("Switch toggled");
    // setChecked(event.target.checked);
    // if (!event.target.checked) {
      // setTimeout(async () => {
      try {
        await axios.post('http://localhost:8080/api/auth/signout', { checked: false });
        success("Signed out!");
        navigate('/');
      } catch (error) {
        console.error('Sign out error:', error);
      }
      // }, 500); // 500ms delay
    // }
  };


  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  theme.typography.h3 = {
    fontSize: '2.5rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      margin: '0 0.5rem'
    }
  }


  return (
    <>
      <AppBar position="static">
        <Grid container spacing={2} sx={{ position: 'absolute' }}>
          <Grid item lg={4.9} md={5} sm={4.5} xs={4}>
            <Link to={"/"}>
              <HomeIcon color='action' fontSize='large' sx={{ width: '40px', height: '40px', margin: '5px',marginLeft:'20px' }} alt='Back' />
            </Link>
          </Grid>
          {/* <ThemeProvider theme={theme}> */}
          <Grid item lg={2} md={2} sm={1.9} xs={2.25}></Grid>
          {/* </ThemeProvider> */}
          <Grid item lg={3.4} md={2.3} sm={1.5} xs={1}></Grid>
          {/* <Grid item lg={0.7} md={0.8} sm={1.2} xs={1.5} >
            <Typography variant="h5" sx={{ marginTop: '12px', marginBottom: '20px' }}>logout</Typography>
          </Grid> */}

          <Grid item lg={1} md={1.2} sm={1.9} xs={2.2} >
            <Link to={'/login/complaint'} state={{ tempdata }}>
              <ButtonComplain />
            </Link>
          </Grid>
          <Grid item lg={1.2} md={1.3} sm={2.2} xs={2.5}>
            {/* <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              sx={{
                marginTop: '10px',
                '& .MuiSwitch-switchBase.Mui-checked': {
                  color: '#1B3A8A', // Darker color for checked state
                  '&:hover': {
                    backgroundColor: 'rgba(27, 58, 138, 0.08)',
                  },
                },
                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                  backgroundColor: '#1B3A8A', // Darker color for checked state
                },
                '& .MuiSwitch-switchBase': {
                  color: '#B0B0B0', // Default color for unchecked state
                  '&:hover': {
                    backgroundColor: 'rgba(176, 176, 176, 0.08)',
                  },
                },
                '& .MuiSwitch-switchBase + .MuiSwitch-track': {
                  backgroundColor: '#E0E0E0', // Default track color for unchecked state
                }
              }}
            /> */}
            <Button onClick={handleChange} sx={{ backgroundColor: '#6C94F8',marginTop:'15px'}} variant="contained" size='small'>
              Log out
            </Button>
          </Grid>

        </Grid>
        <Grid container justifyContent='center' textAlign='center' sx={{ padding: '15px'}}>
          <ThemeProvider theme={theme}>
            <Grid item md={2.3} sm={3.4} xs={2.8}>
              <Typography variant="h5" sx={{ fontWeight: '500' }}>
                Welcome!
              </Typography>
            </Grid>
            {/* <Grid item md={2.3} xs={2.8} sm={3.4}>
              <Typography variant="h4" sx={{ fontWeight: '450', textTransform: 'uppercase' }}>
                {username}
              </Typography>
            </Grid> */}
          </ThemeProvider>
        </Grid>
        {/* <Grid container sx={{ marginTop: '12px' }}>
          <Grid item lg={10.5} md={10.6} sm={10} xs={9.3}></Grid> */}

        {/* </Grid> */}
      </AppBar>

    </>
  );
}