// Import React & Node packages
// =========================================================
  import React, { Component } from 'react';
  import { connect } from "react-redux";
  import { push } from 'connected-react-router';
  import Moment from 'react-moment';
// Import Redux Actions
// =========================================================
  import { appActions } from "../../Store/Actions/appActions";
// Import Material UI Components
// =========================================================
  import { Grid, Card, Box, Typography } from '@material-ui/core/';
  import Skeleton from '@material-ui/lab/Skeleton';
// Import Components
// =========================================================
  import {  ShieldsTrendingApps } from "../../components/SearchResults";
// Import Styles
// =========================================================
  import "./style.css"

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
            
            <Card key={index} style={{ maxWidth: "300px", width: "100%", margin: "5px", padding: "5px"}}>
                <Box  style={{ margin: "0px!important"}}  marginRight={0.5} my={5}>
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
                           <h3 
                              onClick={() => this.viewApp(item.id)} 
                              style={{margin: 0, color: "#57585D", borderBottom: "1px solid silver"}}
                          >
                              {item.name}
                          </h3> 
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
                      <Grid container
                      
                      >

                      {item.badge1 ? (
                              <Grid item xs={2}>
                                  <ShieldsTrendingApps 
                                      title={item.badge1Name}
                                      image={item.badge1LogoUrl}
                                  />
                              </Grid>
                                
                          ) : (
                              <div style={{display: "none"}}/>
                              )
                          }
                          {item.badge2 ? (
                              <Grid item xs={2}>
                                  <ShieldsTrendingApps
                                      title={item.badge2Name}
                                      image={item.badge2LogoUrl}
                                  />
                              </Grid>
                          ) : (
                              <div style={{display: "none"}}/>
                              )
                          }
                          {item.badge3 ? (
                              <Grid item xs={2}>
                                  <ShieldsTrendingApps
                                      title={item.badge3Name}
                                      image={item.badge3LogoUrl}
                                  />
                              </Grid>
                          ) : (
                              <div style={{display: "none"}}/>
                              )
                          }
                          {item.badge4 ? (
                              <Grid item xs={2}>
                                  <ShieldsTrendingApps
                                      title={item.badge4Name}
                                      image={item.badge4LogoUrl}
                                  />
                              </Grid>
                          ) : (
                              <div style={{display: "none"}}/>
                              )
                          }
                          {item.badge5 ? (
                              <Grid item xs={2}>
                                  <ShieldsTrendingApps
                                      title={item.badge5Name}
                                      image={item.badge5LogoUrl}
                                  />
                              </Grid>
                          ) : (
                              <div style={{display: "none"}}/>
                              )
                          }
                      </Grid>
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

const actionCreators = {
  selectTrendingApps: appActions.selectTrendingApps,
  viewSingleApp: appActions.viewSingleApp,
  viewAppReviews: appActions.viewAppReviews,
  push
}
export default connect(mapStateToProps, actionCreators
  // { 
  //     selectTrendingApps,
  //     viewSingleApp,
  //     viewAppReviews,
  //     push
  // }
  )(Media); 
