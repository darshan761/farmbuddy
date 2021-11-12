import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../LandingPage/Header';
import MainFeaturedPost from '../LandingPage/MainFeaturedPost';
import Grid from '@material-ui/core/Grid';
import MarketPlaceTile from './MarketPlaceTile';



export default function MarketPlace() {
   
    return (
      <React.Fragment>
        <CssBaseline />     
         <Container maxWidth="lg">
          <Header title="Market Place" />
          <main>
            <MainFeaturedPost post={mainFeaturedPost} />
            <Grid container spacing={2} align="center">
              <MarketPlaceTile/>
            </Grid>
          </main>
        </Container>
      <br/>
    </React.Fragment> 
  );
}

const mainFeaturedPost = {
  title: 'Market Place',
  description:
    "One stop platform to search and buy personalised & recommended Bayer products",
  image: 'https://thumbs.gfycat.com/AntiqueEdibleBarnswallow-size_restricted.gif',
  imgText: 'Market Place',
  linkText: 'Continue reading…',
};