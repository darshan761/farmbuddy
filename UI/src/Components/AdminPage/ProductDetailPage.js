import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ServiceCall from '../../Service/ServiceCall';


export default function ProductDetailPage() {
  const params = useParams();
  const [disable, setDisable] = React.useState(true);
  const [product, setProduct] = React.useState({})

  useEffect(async () => {

    ServiceCall.getProductDetails(params.id).then((response)=>{
        setProduct({
            name: response.data.product_name,
            description:response.data.product_description,
            image:response.data.product_image,
            price:response.data.product_price,
            additional_info:response.data.product_additional_info,
            video: response.data.product_video
        }); 
        console.log(response.data)     
     })

   }, [])

  function handleChange(event) {
    setProduct(prevState => ({
        ...prevState,
        [event.target.name]: event.target.value
    }));
  }

  function handleSubmit(event) {
      console.log(product)
    let updated_product = {
        product_id: params.id,
        product_name: product.name,
        product_description: product.description,
        product_image: product.image,
        product_price: product.price,
        product_additional_info: product.additional_info,
        product_video: product.video
    }
    ServiceCall.upateProductDetails(params.id, updated_product).then((response)=>{
        console.log(response.data)     
     })
     setDisable(true)
    event.preventDefault();
  }

  return (
    <Grid container component="main" >
         <Grid item xs={12} >
          <center>
            <form onSubmit={handleSubmit} style={{width:'50%'}}>
                    <h1>Product Details</h1>
                    <hr></hr>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text"  name='name' value={product.name} onChange={handleChange} disabled={disable} className="form-control" />                
                </div>
                <div className="form-group">
                    <label>Description:</label>
                    <input type="text"  name='description' value={product.description} onChange={handleChange} disabled={disable} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Img:</label>
                    <input type="text"  name='image' value={product.image} onChange={handleChange} disabled={disable} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Video:</label>
                    <input type="text"  name='video' value={product.video} onChange={handleChange} disabled={disable} className="form-control" />
                </div>
                <div className="form-group">
                    <label>Additional Info:</label>
                    <input type="text"  name='additional_info' value={product.additional_info} onChange={handleChange} disabled={disable} className="form-control" />
                </div>
                <input type="submit" style= {{margin:'5px'}} value="Submit" className="btn btn-primary"/>
                
                <input type="button" style= {{margin:'5px'}}  value="edit" onClick={() => setDisable(false)} className="btn btn-primary"/>
                </form>
          </center>  
        </Grid>
    </Grid>
  );
}