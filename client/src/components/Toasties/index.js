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

class Toasties extends Component {
    notify = () => {
      {
        (ToastData.filter(item => item.appId).length > 0 ?
        
          ToastData.filter(item => item.appId)
          .map((object, index) => {
    
              toast(
                  <Grid 
                    container 
                    spacing={1}
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    key={index}
                  > 
                    <Grid item xs={2}> 
                    {/* ONLY FOR TESTING - use img tag below */}
                      <div style={{backgroundColor: "grey", height: "40px", width: "40px", borderRadius: "8px"}}>{object.appIcon}</div>
                      {/* <img 
                        alt={item.appName}
                        src={object.appIcon}
                        style={{height: "40px", width: "40px", borderRadius: "8px"}}
                      /> */}
                    </Grid> 
                    <Grid item xs={10}> 
                      <h4>{object.appHeadline}</h4>
                    </Grid> 
                  </Grid> 
                )

          })  : ( this.notify() )
       )
      }
    }

    componentDidMount(){ 
      toast.configure({
        position: "top-right",
        autoClose: 9000,
        // hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true, 
      });
      this.notify()
    }

    render(){
      return (
        <div>
          <ToastContainer
            transition={Zoom}
            newestOnTop
            rtl={false}
          />
        </div>
      );
    }
  }

  export default Toasties;  
