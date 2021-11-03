import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'

class QRCodeScanner extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: 'No result',
    }

    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    //   console.log(data)
    
      if(data != null)
      this.setState({
      result: data,
    })
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
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        {this.state.result !== null && <p>{this.state.result.text}</p>}
      </div>
    )
  }
}

export default QRCodeScanner;