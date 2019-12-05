// Import React and Redux
// =========================================================
    import React, { Component } from "react";  
    import { connect } from "react-redux";
    import { push } from 'connected-react-router'

// Import Material Ui Components
// =========================================================
    import { Grid } from '@material-ui/core';   
// Import Custom Components
// =========================================================
    import Wrapper from "../components/Wrapper"
    import Nav from "../components/Nav"
    import Footer from "../components/Footer"
    import Modal from "../components/Modals"
    import AddAppReview from "../components/AddAppReview"
    import {AppRatings, CustomizedRating }from "../components/Ratings"
    import {CommentGrid, HeaderContainer, DangerRatings, ShieldRatings} from "../components/AppPageComponents"

// Import Redux Actions 
// =========================================================
// import { viewAllCategories, viewSingleCategory } from "../Store/Actions/categoryActions";
// import { viewAllListedApps, viewAppNames, viewSingleApp, selectTrendingApps } from "../Store/Actions/appActions";
    import { viewAllShields } from "../Store/Actions/shieldActions";
// Import Styles
// =========================================================
    import "../assets/styling/appStyle.css"
    import Tony_Smith from "../assets/images/test_profiles/Tony_Smith.png";
    import PR_icon from "../assets/images/shields/predator_risk.png";
    import One from "../assets/images/danger_rating_icons/danger_rating_1.png";
    import Two from "../assets/images/danger_rating_icons/danger_rating_2.png";
    import Three from "../assets/images/danger_rating_icons/danger_rating_3.png";
    import Four from "../assets/images/danger_rating_icons/danger_rating_4.png";
    import Five from "../assets/images/danger_rating_icons/danger_rating_5.png";


// Test data
const data = [

    { logoUrl: "https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/4a/60/3f/4a603f8b-56e2-eeb7-f25b-be00151e271b/source/1024x1024bb.jpg",
      name: "Holla",
      createdAt: '1 hours ago',
      warnRatingAverage: 4,
      link: "https://holla.world/", 
      description: "HOLLA is a free, live video streaming app that randomly matches people in video chats across the globe. Think prank calling and party lines for the virtual age, and that pretty much sums up the HOLLA app.", 

    },
  
  ];

const test_profiles = [

    { image: Tony_Smith,
      username: "Tony S.",
      reviewCount: 3,
      datePosted: "Nov. 18, 2019",
      badges: PR_icon,
      dangerRating: 4, 
      comments: "My child was talking to strangers through this app."
    },
  ];

const dangerRating = [ 
    {  name: "one",
       logoUrl: One,
       description: "rating", 
       reviewCount: 1 
    },
    {  name: "two", 
       logoUrl: Two,
       description: "rating", 
       reviewCount: 3 
     },
     {  name: "three",
        logoUrl:Three,
        description: "rating", 
        reviewCount: 2 
     },
     {  name: "four",
        logoUrl: Four,
        description: "rating", 
        reviewCount: 3 
     },
     {  name: "five", 
        logoUrl: Five,
        description: "rating", 
        reviewCount: 1
     },
]

// MIN = Minimum expected value
// MAX = Maximium value = total number of reviews 
const normalise = value => (value - 0) * 100 / (10 - 0);
class AppPage extends Component {

state = {
 
}

viewApp = (appId) => {

}

// Grabbing all necessary data from Redux
componentDidMount() {
    this.props.viewAllShields();
}

render() {
    return (
        <>
        <Nav/>
       <main>
        <Wrapper>
                <HeaderContainer
                    icon={data[0].logoUrl}
                    title={data[0].name} 
                    altText={data[0].name}
                    description={data[0].description} 
                    link={data[0].link}

                />
                <Wrapper > 
                {/* Rating -> Danger rating & Shield Tracker */}
                    <Grid container spacing={4}>
                        {/* Danger ratings */}
                        <Grid item xs={12} sm={6}>
                            <h3 align="center" >Danger Rating</h3>
                            {dangerRating.map(danger => (
                                <DangerRatings
                                    key={danger.name}
                                    ratingIcon={danger.logoUrl}
                                    altTxt={danger.name}
                                    riskLevel={danger.name}
                                    info={danger.description}
                                    ratingScale={normalise(danger.reviewCount)}
                                    reviewCount={`${danger.reviewCount} Reviews`}
                                />
                            ))}
                        </Grid>
                        {/* Shield ratings */}
                        <Grid item xs={12} sm={6}>
                            <h3 align="center" >Shield Tracker</h3>
                            {this.props.shields.map(shield => (
                                <ShieldRatings
                                    key={shield.name}
                                    shieldIcon={shield.icon}
                                    title={shield.name}
                                    altTxt={shield.altText}
                                    info={`${shield.name} - ${shield.info}`}
                                    ratingScale={normalise(4)}
                                    reviewCount={"* # review *"}
                                />
                            ))}
                        </Grid>

                    </Grid>
                </Wrapper>

                {/* Comments */}    
                <Grid style={{ display: "flex", alignItems: "center", borderBottom: "2px solid grey", height: "54px"}}container spacing={0}>
                    <Grid item xs={10}>
                        <h2 >Reviews: </h2>
                    </Grid>
                    <Grid align="right" item xs={2}>
                    <Modal
                        modalTitle={` Share your concerns about ${data[0].name}.`}
                        openModal="Add Review"
                        modalBody={<AddAppReview/>}
                        modalButton1="Submit"
                    />
                    </Grid>
                </Grid>
                <CommentGrid
                    // ---> Left Side
                    imageLeft={<img alt={test_profiles[0].username} style={{  justifyContent: "center", maxWidth: "40px", width: "100%", height: "auto"}} src={test_profiles[0].image}/>}
                    usernameLeft={test_profiles[0].username} 
                    reviewCountLeft={test_profiles[0].reviewCount} 
                    datePostedLeft={test_profiles[0].datePosted} 
                    // ---> Right Side     
                    badgesRight={<img alt="Predator Risk" style={{ maxWidth: "40px", width: "100%", height: "auto"}} src={test_profiles[0].badges}/>}
                    dangerRatingRight={<AppRatings ratingValue={test_profiles[0].dangerRating}/>}
                    commentsRight={test_profiles[0].comments}
                />
        
            </Wrapper>
        </main>
    <Footer/>
 </>
)
}
}

const mapStateToProps = state => ({
// categories: state.categories.allCategories,
// apps: state.apps.allListedApps,
// trendingApps: state.apps.trendingApps,
// appNames: state.apps.allAppNames,
shields: state.shields.allShields
})

export default connect(mapStateToProps, 
{ 
    // viewAllCategories, 
    // viewSingleCategory, 
    // viewAllListedApps, 
    // viewAppNames, 
    // selectTrendingApps,
    viewAllShields 
})(AppPage); 
