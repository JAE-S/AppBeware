// Import React, Redux and Node Packages
// =========================================================
    import React, { Component } from "react";  
    import { connect } from "react-redux";
    import {Redirect} from 'react-router-dom';
    import Truncate from 'react-truncate';
    import PropTypes from 'prop-types';
// Import Material Ui Components
// =========================================================
    import { Grid, Typography, Button, FormControlLabel, Checkbox } from '@material-ui/core';   
// Import Material UI icons
// =========================================================
    import { AddAlert } from '@material-ui/icons/';
// Import Custom Components
// =========================================================
    import Wrapper from "../components/Wrapper"
    import Nav from "../components/Nav"
    import Footer from "../components/Footer"
    import Modal from "../components/Modals"
    import AddAppReview from "../components/AddAppReview"
    import HeaderContainer from "../components/HeaderContainer"
    // import { AppRatings }from "../components/Ratings"
    import {CommentGrid, DangerRatings, ShieldRatings} from "../components/AppPageComponents"
// Import Redux Components
// =========================================================
    import { viewSingleApp, viewAppReviews } from "../Store/Actions/appActions";
    import { viewAllShields } from "../Store/Actions/shieldActions";
    import { userActions } from '../Store/Actions/auth';
// import { viewAllCategories, viewSingleCategory } from "../Store/Actions/categoryActions";
// import { viewAllListedApps, viewAppNames, viewSingleApp, selectTrendingApps, viewAppReviews } from "../Store/Actions/appActions";

// Import Styles
// =========================================================
import "../assets/styling/appStyle.css"
// import PR_icon from "../assets/images/shields/predator_risk.png";
import One from "../assets/images/danger_rating_icons/danger_rating_1.png";
import Two from "../assets/images/danger_rating_icons/danger_rating_2.png";
import Three from "../assets/images/danger_rating_icons/danger_rating_3.png";
import Four from "../assets/images/danger_rating_icons/danger_rating_4.png";
import Five from "../assets/images/danger_rating_icons/danger_rating_5.png";

const dangerRating = [ 
    {  name: "one",
    logoUrl: One,
    description: "Mild Concern", 
    reviewCount: 5 
    },
    {  name: "two", 
    logoUrl: Two,
    description: "Moderate Concern", 
    reviewCount: 6 
    },
    {  name: "three",
        logoUrl:Three,
        description: "High Concern", 
        reviewCount: 10 
    },
    {  name: "four",
        logoUrl: Four,
        description: "Very High Concern", 
        reviewCount: 5 
    },
    {  name: "five", 
        logoUrl: Five,
        description: "Severe Concern", 
        reviewCount: 3
    },
]

// MIN = Minimum expected value
// MAX = Maximium value = total number of reviews 

// AppPage Component
// =========================================================
    class AppPage extends Component {

        constructor(...args) {
            super(...args);
     
            this.state = {
                expanded: false,
                truncated: false,
            };
     
            this.handleTruncate = this.handleTruncate.bind(this);
            this.toggleLines = this.toggleLines.bind(this);
        }
     
        handleTruncate(truncated) {
            if (this.state.truncated !== truncated) {
                this.setState({
                    truncated
                });
            }
        }
     
        toggleLines(event) {
            event.preventDefault();
     
            this.setState({
                expanded: !this.state.expanded
            });
        }

        // Grabbing all necessary data from Redux
        componentDidMount() {
            this.props.viewAllShields();
        }

        getNormalise = (value) => {
            // const badgeTotal = this.props.singleApp.badge1Count + this.props.singleApp.badge2Count + this.props.singleApp.badge3Count + this.props.singleApp.badge4Count + this.props.singleApp.badge5Count
         return (value - 0) * 100 / (10 - 0)
        }
        getShieldValue = (value) => {
            const badgeTotal = this.props.singleApp.badge1Count + this.props.singleApp.badge2Count + this.props.singleApp.badge3Count + this.props.singleApp.badge4Count + this.props.singleApp.badge5Count
         return (value - 0) * 100 / (badgeTotal - 0)
        }

        getShieldIndex = (index) => {
            if (index === 0 ){
                return this.getShieldValue(this.props.singleApp.badge1Count)
            } else if (index === 1 ) {
              return this.getShieldValue(this.props.singleApp.badge2Count)
            } else if (index === 2 ) {
                return this.getShieldValue(this.props.singleApp.badge3Count)
            } else if (index === 3 ) {
                return this.getShieldValue(this.props.singleApp.badge4Count)
            } else if (index === 4 ) {
                return this.getShieldValue(this.props.singleApp.badge4Count)
            }
        }
        
        render() {
            const {
                // children,
                more,
                less,
                lines 
            } = this.props; 
            let getNormaliseBadges = (value) => {
            const badgeTotal = this.props.singleApp.badge1Count + this.props.singleApp.badge2Count + this.props.singleApp.badge3Count + this.props.singleApp.badge4Count + this.props.singleApp.badge5Count
                return (value - 0) * 100 / (badgeTotal - 0);
            } 
            
            const {
                expanded,
                truncated 
            } = this.state;
        return (
            <>
            <Nav/>
            <main>
                <HeaderContainer style={{backgroundColor: "#EAEAEA"}}> 
                    <Wrapper align="center" style={{paddingTop: "40px", paddingBottom: "20px"}}> 
                            
                        <Grid container 
                            spacing={4}
                            direction="row"
                            justify="flex-start"
                            alignItems="center"
                        >
                            <Grid align="center" item xs={12} sm={3}>
                                <img 
                                    style={{ width: "100%", height: "auto", borderRadius: 16 }}
                                    className="appIcon"
                                    src={this.props.singleApp.logoUrl}
                                    alt={this.props.singleApp.name}   
                                />
                            </Grid> 
                            <Grid align="left" item xs={12}  sm={9}>
                                <h1  align="left" style={{ borderBottom: "2px solid #13BAC7", marginRight: "20px", paddingBottom: "20px", fontSize: "2rem"}}>
                                    
                                    {this.props.singleApp.name}
                                    
                                    <FormControlLabel  
                                        style={{color: "inherit", textShadow: "inherit", margin: "0px!important", paddingLeft: "10px"}}
                                        align="right"
                                        control={
                                            <Checkbox 
                                                icon={<AddAlert />} 
                                                checkedIcon={<AddAlert />} 
                                                value="checkedA" 
                                                // checked={props.checked}
                                                // onChange={props.handleAlertCheck}
                                            />
                                        }
                                        label="Set Alert"
                                    />
                                </h1>
                                <Truncate
                                    lines={!expanded && lines}
                                    ellipsis={(
                                        <span className="readMore" >... <a href='#' className="readMore" onClick={this.toggleLines}>{more}</a></span>
                                    )}
                                    onTruncate={this.handleTruncate}
                                >
                                    <p align="left">{this.props.singleApp.description}</p>
                                </Truncate>
                                {!truncated && expanded && (
                                    <span> <a  className="readMore" href='#' onClick={this.toggleLines}>{less}</a></span>
                                )}

                                <Grid align="right" item xs={12} style={{paddingTop: "10px"}}>
                                    <Button href={this.props.singleApp.siteUrl}  target="_blank">
                                        <Typography variant="caption" color="textSecondary">
                                            Go to {this.props.singleApp.name}'s site 
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid> 
                                
                        </Grid>
                    </Wrapper>
                </HeaderContainer>
                {/* Average Danger Rating */}
                <div className="headerBanner">
                    <p align="center" className="bannerText" style={{margin: 0}}> 
                        Average Danger Rating: {this.props.singleApp.warnRatingAverage}
                    </p>
                </div>
                <Wrapper>
                   
                    {/* Rating -> Danger rating & Shield Tracker */}
                        <Grid container spacing={4}>
                            {/* Danger ratings */}
                            <Grid item xs={12} sm={6}>
                            <div className="headerBanner ratingHeaderText">
                                <h2 align="center" className="bannerText">
                                    Danger Alerts
                                </h2>
                            </div>
                                {dangerRating.map(danger => (
                                    <DangerRatings
                                        key={danger.name}
                                        ratingIcon={danger.logoUrl}
                                        altTxt={danger.name}
                                        riskLevel={danger.name}
                                        info={danger.description}
                                        ratingScale={this.getNormalise(danger.reviewCount)}
                                        reviewCount={`${danger.reviewCount} Alert(s)`}
                                    />
                                ))}
                            </Grid>
                            {/* Shield ratings */}
                            <Grid item xs={12} sm={6}>
                                <div className="headerBanner ratingHeaderText">
                                    <h2 align="center" className="bannerText">
                                        Shield Alerts
                                    </h2>
                                </div>
                                {this.props.shields.map((shield, index) => (
                                    <ShieldRatings
                                        key={shield.name}
                                        shieldIcon={shield.icon}
                                        title={shield.name}
                                        altTxt={shield.altText}
                                        info={`${shield.name} - ${shield.info}`}
                                        ratingScale={this.getShieldIndex(index)}
                                            
                                        reviewCount={ 
                                            <div> 
                                            {index === 0 ? (
                                                <div>
                                                    {`${this.props.singleApp.badge1Count} Alerts`}
                                                </div>
                                            ) : (
                                                <div style={{display: "none"}}/>
                                                )
                                            }
                                            {index === 1 ? (
                                                <div>
                                                    {`${this.props.singleApp.badge2Count} Alerts`}
                                                </div>
                                            ) : (
                                                <div style={{display: "none"}}/>
                                                )
                                            }
                                            {index === 2 ? (
                                                <div>
                                                    {`${this.props.singleApp.badge3Count} Alerts`}
                                                </div>
                                            ) : (
                                                <div style={{display: "none"}}/>
                                                )
                                            }
                                            {index === 3 ? (
                                                <div>
                                                    {`${this.props.singleApp.badge4Count} Alerts`}
                                                </div>
                                            ) : (
                                                <div style={{display: "none"}}/>
                                                )
                                            }
                                            {index === 4 ? (
                                                <div>
                                                    {`${this.props.singleApp.badge5Count} Alerts`}                                                   
                                                </div>
                                            ) : (
                                                <div style={{display: "none"}}/>
                                                )
                                            }
                                        </div> }
                                    />
                                ))}
                            </Grid>

                        </Grid>
                    </Wrapper>
                    <Wrapper> 

                    {/* Add App Review */}
                    <Grid container spacing={0} style={{ display: "flex", alignItems: "center", borderBottom: "2px solid #13BAC7", height: "54px"}}>
                        <Grid item xs={10}>
                            <h2>Reviews:</h2>
                        </Grid>
                        <Grid align="right" item xs={2}>
                            <Modal
                                modalTitle={<h3 style={{color: "#57585D", margin: 0}}> Create A Review For <a style={{color: "#13BAC7"}}>{this.props.singleApp.name}</a></h3>}
                                openModal={<Button>Add Review</Button>}
                                modalBody={<AddAppReview/>}
                                modalButton1="Submit"
                            />
                        </Grid>
                    </Grid>
                    {/* Comments */}    
                    {this.props.appReviews.map(review => (

                        <CommentGrid
                            // ---> Left Side
                            imageLeft={
                                <img 
                                    alt={review.User.name} 
                                    src={review.User.profilePicture}
                                    className="smallProfilePhoto"
                                />}
                            usernameLeft={review.User.name} 
                            // TODO: Ultimately need to generate this data - next 2 fields
                            reviewCountLeft={3}
                            datePostedLeft="Nov 18, 2019"
                            // ---> Right Side     
                            // TODO: Need to redo this so it's not hard-coded - badges
                        //     badgesRight={
                        //         <div> 
                        //                     {review.User.predatorRisk ? (
                        //                         <div>
                        //                             <img alt={this.props.singleApp.badge1Name} style={{ maxWidth: "5px", width: "100%", height: "auto"}} src={this.props.singleApp.badge1LogoUrl} />
                                                   
                        //                         </div>
                        //                     ) : (
                        //                         <div style={{display: "none"}}/>
                        //                         )
                        //                     }
                        //                     {review.User.dangerousBehavior ? (
                        //                         <div>
                        //                             <img alt={this.props.singleApp.badge2Name} style={{ maxWidth: "5px", width: "100%", height: "auto"}} src={review.User.badge2LogoUrl} />
                                                  
                        //                         </div>
                        //                     ) : (
                        //                         <div style={{display: "none"}}/>
                        //                         )
                        //                     }
                        //                     {review.User.violentContent ? (
                        //                         <div>
                        //                             <img alt={this.props.singleApp.badge3Name} style={{ maxWidth: "40px", width: "100%", height: "auto"}} src={review.User.badge3LogoUrl} />                                          
                        //                         </div>
                        //                     ) : (
                        //                         <div style={{display: "none"}}/>
                        //                         )
                        //                     }
                        //                     {review.User.cyberbullying ? (
                        //                         <div>
                        //                             <img alt={this.props.singleApp.badge4Name} style={{ maxWidth: "5px", width: "100%", height: "auto"}} src={review.User.badge4LogoUrl} />                                               
                        //                         </div>
                        //                     ) : (
                        //                         <div style={{display: "none"}}/>
                        //                         )
                        //                     }
                        //                     {review.User.sexualContent ? (
                        //                         <div>
                        //                             <img alt={this.props.singleApp.badge5Name} style={{ maxWidth: "5px", width: "100%", height: "auto"}} src={review.User.badge5LogoUrl} />                                                                                                 
                        //                         </div>
                        //                     ) : (
                        //                         <div style={{display: "none"}}/>
                        //                         )
                        //                     }
                        //                 </div> 
                            
                            
                        // }
                            // dangerRatingRight={<AppRatings ratingValue={review.dangerRating}/>}
                            commentsRight={
                                <div>
                                    <Truncate
                            
                                        lines={!expanded && lines}
                                        ellipsis={(
                                            <span className="readMore" >... <a href='#' className="readMore" onClick={this.toggleLines}>{more}</a></span>
                                        )}
                                        onTruncate={this.handleTruncate}
                                    >
                                    <p align="left"  trimWhitespace>{review.comments}</p>
                                    </Truncate>
                                    {!truncated && expanded && (
                                        <span> <a className="readMore" href='#' onClick={this.toggleLines}>{less}</a></span>
                                    )}
                                </div>
                            }
                        /> 
                    

                ))}

                        {/* <CommentGrid
                            // ---> Left Side
                            imageLeft={<img alt={test_profiles[0].username} style={{  justifyContent: "center", maxWidth: "40px", width: "100%", height: "auto"}} src={test_profiles[0].image}/>}
                            usernameLeft={test_profiles[0].username} 
                            reviewCountLeft={test_profiles[0].reviewCount} 
                            datePostedLeft={test_profiles[0].datePosted} 
                            // ---> Right Side     
                            badgesRight={<img alt="Predator Risk" style={{ maxWidth: "40px", width: "100%", height: "auto"}} src={test_profiles[0].badges}/>}
                            dangerRatingRight={<AppRatings ratingValue={test_profiles[0].dangerRating}/>}
                            commentsRight={test_profiles[0].comments}
                        /> */}
            
                </Wrapper>
            </main>
        <Footer/>
        </>
        )
    }
}

    AppPage.defaultProps = {
        lines: 1,
        more: 'Read more',
        less: 'Show less',
    };
     
    AppPage.propTypes = {
        // children: PropTypes.node.isRequired,
        lines: PropTypes.number,
        less: PropTypes.string,
        more: PropTypes.string
    };

    const mapStateToProps = state => ({
        singleApp: state.apps.singleApp,
        appReviews: state.apps.appReviews,
        // categories: state.categories.allCategories,
        // apps: state.apps.allListedApps,
        // trendingApps: state.apps.trendingApps,
        // appNames: state.apps.allAppNames,
        shields: state.shields.allShields,
        // isloggedIn: state.authentication.isloggedIn

    })

    export default connect(mapStateToProps, 
        { 
            // viewAllCategories, 
            // viewSingleCategory, 
            // viewAllListedApps, 
            // viewAppNames, 
            // selectTrendingApps,
            viewSingleApp,
            viewAppReviews,
            viewAllShields,
            // userInfo,
            userActions

        }
    )(AppPage); 