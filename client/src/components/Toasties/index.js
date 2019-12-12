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

class Toasties extends Component {
    notify = () => {
      {
        ToastData.map((object) => {
          if (object.appId < 6)
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
                    <h3 style={{ color: "#0f8e98", letterSpacing: 1, padding: "4px", fontWeight: "800px"}}>{object.appHeadline}</h3>
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
        <Grid container>
          <ToastContainer
            transition={Zoom}
            newestOnTop
            rtl={false}
            autoClose={false}
            hideProgressBar={true}
            // closeOnClick={true}
            pauseOnHover={false}
            draggable={true} 
            style={{ paddingLeft: "60px", zIndex: 1}}
          />
        </Grid>
      );
    }
  }

  export default Toasties;  
