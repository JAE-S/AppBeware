import React, { Component } from 'react';
import { connect } from "react-redux";
import { push } from 'connected-react-router';
import Moment from 'react-moment';

import { viewSingleApp, selectTrendingApps, viewAppReviews } from "../../Store/Actions/appActions";

import { Grid, Card, Box, Typography } from '@material-ui/core/';
import Skeleton from '@material-ui/lab/Skeleton';

import "./style.css"

// Import Media
// =========================================================

import CB_icon from "../../assets/images/shields/cyberbullying.png";


class Media extends Component {      

  viewApp = (appId) => {
    this.props.viewSingleApp(appId);
    this.props.viewAppReviews(appId);
    this.props.push('/appPage');
  }

  render() {
    return (

      <Box overflow="hidden">

        <Grid container wrap="nowrap">
          {this.props.trendingApps.map((item, index) => (

            <Card style={{ maxWidth: "300px", width: "100%", margin: "5px", padding: "5px"}}>
                <Box key={index} style={{ margin: "0px!important"}}  marginRight={0.5} my={5}>
                  {item ? (
                    <Grid 
                        container 
                        direction="row"
                        justify="flex-start"
                        alignItems="center"
                        wrap="wrap" 
                        spacing={2}>
                      <Grid item xm={4}>
                        <img 
                          className="trendImage" 
                          onClick={() => this.viewApp(item.id)}
                          alt={item.name}  
                          src={item.logoUrl} 
                          style={{ width: 80, height: 80, borderRadius: 16 }} 
                        />
                      </Grid>
                      <Grid item xm={8}>
                        <div>
                          {/* <Typography gutterBottom variant="body2"> */}
                           <h3 
                              onClick={() => this.viewApp(item.id)} 
                              style={{margin: 0, color: "#57585D", borderBottom: "1px solid silver"}}
                          >
                              {item.name}
                          </h3> 
                          {/* </Typography> */}
                        </div>
                        <div>
                          <Typography 
                            variant="caption" 
                            color="textSecondary">

                            {`${"Updated: "}`}
                            <Moment fromNow>{item.updatedAt}</Moment>

                          </Typography>
                        </div>
                      </Grid>              
                    </Grid>
                  ) : (
                    <Skeleton variant="rect" width={80} height={80} />
                  )}

                  {item ? (
                    <Box pr={2}>
                      <Typography className="dangerRating" variant="body2" color="textSecondary">
                        {`${"Danger Rating: " + item.warnRatingAverage}`}
                      </Typography>
                      <div>
                        <img 
                          alt={item.name}
                          src={CB_icon}
                          // TODO://////////////////
                          // I have this hardcoded for now...new to update with actual data from table
                          ////////////////////////////////////////
                          // src={item.badges}
                          style={{ width: 40, height: 40 }}
                        />
                      </div>
                    </Box>
                  ) : (
                    <Box pt={0.5}>
                      <Skeleton />
                      <Skeleton width="60%" />
                    </Box>
                  )}
                </Box>
            </Card>
          ))}
        </Grid>
      </Box>


    );
  }
}


const mapStateToProps = state => ({
  trendingApps: state.apps.trendingApps,
  singleApp: state.apps.singleApp,
  appReviews: state.apps.appReviews
})

export default connect(mapStateToProps, { 
      selectTrendingApps,
      viewSingleApp,
      viewAppReviews,
      push
  })(Media); 
