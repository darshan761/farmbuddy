import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
import ServiceCall from '../../Service/ServiceCall';
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
import ReactPlayer from "react-player"

class QRCodeScanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
      product: null
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    //   console.log(data)
    
      if(data != null) {
     
    ServiceCall.getProductDetails(data.text).then((response)=>{
      this.setState({
          product: response.data         
      }); 
      console.log(response.data)     
   })
  }
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
      <div>
     <Grid container spacing={4}>  
        <Grid xs={4} >
          <QrReader
            delay={this.state.delay}
            style={previewStyle}
            onError={this.handleError}
            onScan={this.handleScan}
            />    
        </Grid> 
        {this.state.product !== null && 
         <Grid item key={this.state.product.product_name} xs={8}>
            <Card > 
              <center>
              <CardMedia
                        image={this.state.product.product_image}
                        title={this.state.product.product_name}
                        style={{// 16:9
                          width: 100,height:300}}
                      />
              </center>
                      
                      <CardContent >
                        <Typography gutterBottom variant="h6" >
                          <strong>Product Name:</strong> {this.state.product.product_name}
                        </Typography>
                        <Typography  variant="h6" gutterBottom>
                        <strong>Description:</strong> {this.state.product.product_description}
                        </Typography>
                        <Typography gutterBottom variant="h6" >
                        <strong>Additional Info:</strong> {this.state.product.product_additional_info}
                        </Typography>
                      
                        <center>
                        <ReactPlayer
                          url={this.state.product.product_video}
                        />
                        </center>

                        
                        <CardActions>
                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                            align="center"
                            fullWidth
                            
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
                  </Grid>}
        </Grid>
      </div>
    )
  }
}

export default QRCodeScanner;