import React, { Component } from 'react';
import { connect } from "react-redux";
import { push } from 'connected-react-router';
import Moment from 'react-moment';

import { viewSingleApp, selectTrendingApps } from "../../Store/Actions/appActions";

import { Grid, Card, Box, Typography } from '@material-ui/core/';
import Skeleton from '@material-ui/lab/Skeleton';

import "./style.css"

// Import Media
// =========================================================

import CB_icon from "../../assets/images/shields/cyberbullying.png";


class Media extends Component {      

  viewApp = (appId) => {
    this.props.viewSingleApp(appId)
    this.props.push('/appPage');
  }

  render() {
    return (

      <Box overflow="hidden">

        <Grid container wrap="nowrap">
          {this.props.trendingApps.map((item, index) => (

            <Card style={{ maxWidth: "300px", width: "100%", margin: "10px", padding: "5px"}}>
                <Box key={index} style={{ margin: "0px!important"}}  marginRight={0.5} my={5}>
                  {item ? (
                    <Grid container wrap="wrap" spacing={2}>
                      <Grid item xm={4}>
                        <img className="trendImage" style={{ width: 80, height: 80, borderRadius: 16 }} alt={item.name} src={item.logoUrl} />
                      </Grid>
                      <Grid item xm={8}>
                        <div>
                          <Typography gutterBottom variant="body2">
                            {item.name}
                          </Typography>
                        </div>
                        <div>
                          <Typography variant="caption" color="textSecondary">

                            {`${"Last Updated: "} • `}
                            <Moment fromNow>{item.updatedAt}</Moment>

                          </Typography>
                        </div>
                        <div>
                          <Typography variant="caption" color="textSecondary">
                              <button 
                                onClick={() => this.viewApp(item.id)}
                              >View App
                              </button>
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
  singleApp: state.apps.singleApp
})

export default connect(mapStateToProps, { 
      selectTrendingApps,
      viewSingleApp,
      push
  })(Media); 
