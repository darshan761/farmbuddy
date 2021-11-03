import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ServiceCall from '../../Service/ServiceCall';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://material-ui.com/">
        Bolts
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    //height: '100vh',
  },
  image: {
    //backgroundImage: 'url(https://1471793142.rsc.cdn77.org/data/images/full/49011/office-friends.jpeg)',
    backgroundImage: 'url(https://i.pinimg.com/originals/69/20/fc/6920fc266ea0a8bfbb02561dfdd18f1c.png)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    //backgroundSize: 'cover',
    backgroundPosition: 'center',
    marginTop: -10
  },
  paper: {
    margin: theme.spacing(6, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function SignUpPage() {
  const classes = useStyles();

  const [fullname, setFullName] = React.useState("");
  const [dob, setDob] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [repassword, setRePassword] = React.useState("");


  function handleFullName(event) {
    setFullName(event.target.value)
  }

  function handleDob(event) {
    setDob(event.target.value)
  }

  function handleEmail(event) {
    setEmail(event.target.value)
  }

  function handlePassword(event) {
    setPassword(event.target.value)
  }

  function handleRePassword(event) {
    setRePassword(event.target.value)
  }


  function handleSubmit() {
    if (password === repassword) {

      const userDetails = {
        "FullName": fullname,
        "DOB": dob,
        "Email": email,
        "Password": password
      }

      ServiceCall.userSignUp(userDetails).then((response) => {
        if (response.data === "False") {
          alert("Already a registered User, Please login with same ID")
        }
        else {
          localStorage.setItem('user_key', response.data.name);
          window.open("#/home", "_self")
        }

      })
    } else {
      alert("Password did not match")
    }
  }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Full Name"
            name="name"
            size="small"
            autoComplete="name"
            autoFocus
            onChange={handleFullName}
          />
          <br/>
          <TextField
            variant="outlined"
            color="secondary"
            id="date"
            label="Birthday"
            type="date"
            size="small"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            onChange={handleDob}
          />

          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            size="small"
            autoFocus
            onChange={handleEmail}
          />

          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            size="small"
            autoComplete="current-password"
            onChange={handlePassword}
          />

          <TextField
            variant="outlined"
            color="secondary"
            margin="normal"
            required
            fullWidth
            name="re-password"
            label="Re-Enter Password"
            type="password"
            id="re-password"
            size="small"
            onChange={handleRePassword}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            <b>Sign Up</b>
          </Button>
          <Grid container>
            <Grid item xs='12'>
              <Link href="#/login" variant="body2">
                <Typography variant="body2" color="secondary" align="center">
                  Already have an account? Login
                </Typography>
              </Link>
            </Grid>
          </Grid>
          <Box mt={2}>
            <Copyright />
          </Box>
        </div>
      </Grid>
    </Grid>
  );
}