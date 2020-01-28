// Import React, Redux and Node Packages
// =========================================================
  import React, { Component } from 'react';
  import { ToastContainer, toast, Zoom, } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// Import Material Ui Components
// =========================================================
  import {Grid} from '@material-ui/core';
// Import Temp data
// =========================================================
import ToastData from "./tempToastData";

// Import Styles
// =========================================================
    import "../../assets/styling/appStyle.css"
    import "../../assets/styling/mediaScreens.css"

class Toasties extends Component {
    notify = () => {
      {
        ToastData.map((object) => {
          if (object.appId < 5 )
            toast(
                <Grid 
                  className="toastieContainer"
                  spacing={2}
                  direction="row"
                  justify="center"
                  alignItems="center"
                  key={object.appName}
                > 
                  <Grid align="center" item xs={2}> 
                    <img 
                      alt={object.appName}
                      src={object.appIcon}
                      className="toastieImage appIcon"
                    />
                  </Grid> 
                  <Grid item xs={10}> 
                    <h4 style={{ color: "#0f8e98", letterSpacing: 1, padding: "3px", fontWeight: "700px"}}>{object.appHeadline}</h4>
                    <span style={{ color: "grey", fontWeight: "400px"}}>{object.source}</span>
                  </Grid> 
                </Grid> 
            )
          }
       )
      }
    }

    componentDidMount(){ 
      this.notify()
    }

    render(){
      return (
        <Grid container class="mainToastieContainer">
          <ToastContainer
            transition={Zoom}
            newestOnTop
            rtl={false}
            autoClose={false}
            hideProgressBar={true}
            // closeOnClick={true}
            pauseOnHover={false}
            draggable={true} 
            // style={{ paddingLeft: "60px", zIndex: 1}}
          />
        </Grid>
      );
    }
  }

  export default Toasties;  
