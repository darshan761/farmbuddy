import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import toast from 'react-hot-toast';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  }, icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    height: 11
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
  divHeading: {
    color: '#e57373'
  },
  subHeading: {
    color: '#115293',
    fontWeight: '600'
  },
  desc: {
    color: '#7A8C98'
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


export default function MarketPlaceTile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  //Only on first render
  useEffect(() => {
    notifyWelcome();
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const notifyWelcome = () => {
    toast.success("FarmBuddy welcomes you !");
  };

  return (
    <React.Fragment>
      <CssBaseline />
          <main>
              <Typography variant="h5" className={classes.divHeading}>
                <b>One stop platform to search and buy personalised & recommended Bayer products</b>
              </Typography>
              <br />
              <Grid container spacing={4}>
                {featuredPosts.map((card) => (
                  <Grid item key={card.title} xs={12} sm={6} md={4}>
                    <Card className={classes.card}>
                      <CardMedia
                        className={classes.cardMedia}
                        image={card.image}
                        title={card.title}
                      />
                      <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h6" className={classes.subHeading}>
                          {card.title}
                        </Typography>
                        <Typography align="center" variant="body1" className={classes.desc} gutterBottom>
                          {card.description}
                        </Typography>
                       
                        <CardActions>
                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            align="center"
                            fullWidth
                            onClick={() => { localStorage.setItem("f_title", card.title); localStorage.setItem("f_readmore", card.readmore); localStorage.setItem("f_image", card.image); handleClickOpen(); 
                            // speak({ text: card.readmore,rate : 0.8})
                         }}
                          >
                          View More
                      </Button>
                     
                      <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            align="center"
                            fullWidth
                          >
                          Buy now
                      </Button>
                      </CardActions>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <br />
           
              <br />
              <Typography variant="h5" className={classes.divHeading}>
                <b>Digitally Enabling Farmers</b>
              </Typography>
              <Typography variant="body1" className={classes.desc}>
              Digital Market Place for Farmers
            </Typography>

              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                maxWidth="lg"
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle id="alert-dialog-slide-title">{localStorage.getItem("f_title")}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">

                    {/* {localStorage.getItem("f_readmore")}
                    <br /> <br /> */}
                    <center><img alt="fitness tip" src={localStorage.getItem("f_image")} /></center>

                  </DialogContentText>

                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Done
                  </Button>
                </DialogActions>
              </Dialog>
          </main>
    </React.Fragment>


  );
}

  const featuredPosts = [
    {
      title: 'Aliette® Fungicide',
      description:
      'True, Two-way Systemic Protection against Disease. With multiple modes of action, Aliette attacks pathogens at various growth stages for better overall disease control. ',
      image: 'https://m.media-amazon.com/images/I/61SPA2qogiL._SL1247_.jpg',
      },
    {
      title: 'Luna Unprecedented Disease Control',
      description:
      'Effective on a wide range of crops, Luna fungicide provides unprecedented control of some of the most problematic fungal diseases to help growers deliver the best possible fruits, nuts and vegetables.',
      image: 'https://m.media-amazon.com/images/I/517RZq88bYL._SL1224_.jpg',
      },
    {
      title: 'Balance® Flexx Herbicide',
      description:
      'Balance® Flexx pre-emergence corn herbicide provides a flexible foundation that complements any herbicide program to protect yields from the start.',
      image: 'https://cdn.shopify.com/s/files/1/1627/6009/products/balance-flexx-herbicide-2.5gals_2987f0e7-9be7-4c6b-b91b-fdd92d4a5f81.jpg?v=1551995194',
      },
  
    {
      title: 'Movento® Insecticide',
      description:
      'Movento® insecticide features powerful, two-way movement that moves within plants to protect them from a broad range of insects, mites and nematodes above and below the ground, creating highly pest-resistant plants and healthier crops.',
      image: 'https://static.agrostar.in/static/AGS-CP-772_1.jpg',
      },
    {
      title: 'Velum® One Insecticide',
      description:
      'The new nematicide with fungicidal activity for use on tree nuts, fruiting vegetables, strawberries, brassicas and cucurbits. Velum One manages a wide spectrum of yield-robbing nematodes and brings wide-spectrum, long-lasting nematode control to California and Arizona growers.',
      image: 'https://5.imimg.com/data5/SELLER/Default/2021/3/RM/UA/CU/5111461/velum-prime-insecticide-500x500.jpg',
      },
      {
        title: 'Leverage® 360 Insecticide',
        description:
        'It has two modes of action against sucking and chewing pests — one delivers fast knockdown, the other extends residual control. Leverage 360 with Stress Shield™ protection helps plants stay vigorous for greater yields. Leverage 360 is a restricted use pesticide.',
        image: 'https://www.ubuy.mv/productimg/?image=aHR0cHM6Ly9pLmViYXlpbWcuY29tL2ltYWdlcy9nLy1WUUFBT1N3ZH5GZXZJUE8vcy1sNTAwLmpwZw.jpg',
        },
  
  
  ];