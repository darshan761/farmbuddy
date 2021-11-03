import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FaceIcon from '@material-ui/icons/Face';
import Paper from '@material-ui/core/Paper';
import toast from 'react-hot-toast';
import Button from '@material-ui/core/Button';

import dashboardImage from '../../Resources/Images/dashboard_img.jpg';
import QRCodeScanner from '../QRCodeScanner/QRCodeScanner';



const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  search: {
    margin: theme.spacing(1),
    width: 600,
  },
  leaderBoard: {
    width: '100%',
    height: '400px',
    overflowY: 'auto',
    overflowX: 'hidden',
    borderStyle: 'solid',
    borderColor: '#FDCB6B',
    borderRadius: '10px',
    '&::-webkit-scrollbar': {
      display: 'none'
    }
  },
  leaderBoardParent: {

  },
  chart: {
    height: 10
  },
  divHeading: {
    color: '#593B90'
  },
  icon: {
    marginRight: theme.spacing(2),
    width: '40%',
    height: '40%',
    padding: '5%'
  },
}));


const mainFeaturedPost = {
  title: 'Bayer FarmBuddy',
  description:
    "Personalised information about the farm product in friendly and interactive way",
    // image: dashboardImage,
  image: "https://hbr.org/resources/images/article_assets/2021/08/Sep21_02_1176415931.jpg",
  imgText: 'main image description',
  linkText: 'Continue reading…'
};


export default function Home() {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);

  function handleShow(){
    setShow(show => !show);
  }



  React.useEffect(() => {

    notifyWelcome();
  }, []);


  const notifyWelcome = () => {
    console.log("here")
    toast.success("Desk Buddy welcomes you !");

  };

  return (
    <React.Fragment>
      <CssBaseline />

      <header className="App-header">

        <Container maxWidth="lg">
          <Header title=" Bayer FarmBuddy" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            
               <Typography variant="subtitle" align="center" className={classes.divHeading}>
                  <b>👋Meet Bayer FarmBuddy👋</b>
                </Typography>
                <br/><br/>
                <Button
            
            
            variant="contained"
            color="primary"
           
            onClick={handleShow}
          >

            <b>Open/Close QR Scanner</b>

          </Button>

          <br/><br/>

                {show && <QRCodeScanner />}
              
          

          </main>

        </Container>


        <br />
      </header>

    </React.Fragment>


  );
}