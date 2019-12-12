// Import React, Redux and Node Packages
// =========================================================
  import React, { Component } from 'react';
  import { ToastContainer, toast, Zoom, } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
// Import Material Ui Components
// =========================================================
  import {Grid, Button, Checkbox} from '@material-ui/core';
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
          
            toast(
                <Grid 
                  className="toastieContainer"
                  spacing={1}
                  direction="row"
                  justify="flex-start"
                  alignItems="center"
                  
                  key={object.appName}
                > 
                  <Grid item xs={2}> 
                 
                    <img 
                      alt={object.appName}
                      src={object.appIcon}
                      style={{height: "40px", width: "40px", borderRadius: "8px"}}
                    />
                  </Grid> 
                  <Grid item xs={10}> 
                    <h4>{object.appHeadline}</h4>
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
        <div>
          <ToastContainer
            transition={Zoom}
            newestOnTop
            rtl={false}
            autoClose={false}
            hideProgressBar={true}
            closeOnClick={true}
            pauseOnHover={false}
            draggable={true} 
            style={{marginRight: "20px"}}
          />
        </div>
      );
    }
  }

  export default Toasties;  
