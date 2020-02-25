// Import React, Redux and Node Packages
// =========================================================
    import React, { Component } from "react";  
    import { connect } from "react-redux";
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
    import ReadMore from "../components/TurnicateText"
    import {CommentGrid, DangerRatings, ShieldRatings} from "../components/AppPageComponents"
// Import Redux Components
// =========================================================
    import { appActions } from "../Store/Actions/appActions";
    import { shieldActions } from "../Store/Actions/shieldActions";
// Import media
// =========================================================
    // TODO: Add images to the database 
    import One from "../assets/images/danger_rating_icons/danger_rating_1.png";
    import Two from "../assets/images/danger_rating_icons/danger_rating_2.png";
    import Three from "../assets/images/danger_rating_icons/danger_rating_3.png";
    import Four from "../assets/images/danger_rating_icons/danger_rating_4.png";
    import Five from "../assets/images/danger_rating_icons/danger_rating_5.png";
// Import Styles
// =========================================================
    import "../assets/styling/appStyle.css"


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

        // Grabbing all necessary data from Redux
        componentDidMount() {
            this.props.viewAllShields();
        }

        getNormalise = (value) => {
        // TODO: 
            // const badgeTotal = this.props.singleApp.badge1Count + this.props.singleApp.badge2Count + this.props.singleApp.badge3Count + this.props.singleApp.badge4Count + this.props.singleApp.badge5Count
         return (value - 0) * 100 / (10 - 0)
        }
   
        getShieldValue = (index) => {
            const badgeTotal = this.props.singleApp.badge1Count + this.props.singleApp.badge2Count + this.props.singleApp.badge3Count + this.props.singleApp.badge4Count + this.props.singleApp.badge5Count
            
            if (index === 0 ){
                return  (this.props.singleApp.badge1Count - 0) * 100 / (badgeTotal - 0)
            } else if (index === 1 ) {
              return (this.props.singleApp.badge2Count - 0) * 100 / (badgeTotal - 0)
            } else if (index === 2 ) {
                return (this.props.singleApp.badge3Count  - 0) * 100 / (badgeTotal - 0)
            } else if (index === 3 ) {
                return (this.props.singleApp.badge4Count - 0) * 100 / (badgeTotal - 0)
            } else if (index === 4 ) {
                return (this.props.singleApp.badge5Count - 0) * 100 / (badgeTotal - 0)
            }
        }
        
        render() {
       
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
                                    <div  align="left" style={{ borderBottom: "2px solid #13BAC7", marginRight: "20px", paddingBottom: "20px", fontSize: "2rem", marginBottom: "20px"}}>
                                        
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
                                </div>
                                
                                <ReadMore>
                                    {this.props.singleApp.description}
                                </ReadMore>

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
                                        reviewCount={`${danger.reviewCount} Alerts`}
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
                                {this.props.allShields.map((shield, index) => (
                                    <ShieldRatings
                                        key={shield.name}
                                        shieldIcon={shield.icon}
                                        title={shield.name}
                                        altTxt={shield.altText}
                                        info={`${shield.name} - ${shield.info}`}
                                        ratingScale={this.getShieldValue(index)}
                                            
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
                    {this.props.appReviews.map((review, i) => (

                        <CommentGrid
                            // ---> Left Side
                            key={i}
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
                          
                            commentsRight={
                                <ReadMore> 
                                    <p align="left"  trimwhitespace="true">
                                        {review.comments}
                                    </p> 
                                </ReadMore>
                            }
                        /> 
                ))}
            
                </Wrapper>
            </main>
        <Footer/>
        </>
        )
    }
}

    const mapStateToProps = state => ({
        singleApp: state.apps.singleApp,
        appReviews: state.apps.appReviews,
        // categories: state.categories.allCategories,
        // apps: state.apps.allListedApps,
        // trendingApps: state.apps.trendingApps,
        // appNames: state.apps.allAppNames,
        allShields: state.shields.allShields,
        // isloggedIn: state.authentication.isloggedIn

    })

    const actionCreators = {
        viewSingleApp: appActions.viewSingleApp,
        viewAppReviews: appActions.viewAppReviews,
        viewAllShields: shieldActions.viewAllShields
        // userInfo,
        // userActions
    }

    export default connect(mapStateToProps, actionCreators)(AppPage); 