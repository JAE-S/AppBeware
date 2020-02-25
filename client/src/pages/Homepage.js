// Import React and Redux
// =========================================================
    import React, { Component, useSelector } from "react";  
    import { connect } from "react-redux";
    import { push } from 'connected-react-router'
// Import Material Ui Components
// =========================================================
    import { Grid } from '@material-ui/core';   
// Import Custom Components
// =========================================================
    import SearchAppAnnie from "../components/SearchAppAnnie"
    import Wrapper from "../components/Wrapper"
    import Nav from "../components/Nav"
    import HeaderContainer from "../components/HeaderContainer"
    import HomepageTabNav from "../components/HomepageTabNav"
    import CategoryCards from "../components/CategoryCards"
    import ShieldLayout from "../components/HomepageShieldLayout"
    import Footer from "../components/Footer";
// Import Redux Components
// =========================================================
    import { viewAllCategories, viewSingleCategory, viewSingleCategoryInfo } from "../Store/Actions/categoryActions";
    import { viewAllListedApps, viewAppNames, viewSingleApp, selectTrendingApps, viewAppReviews, search42Text } from "../Store/Actions/appActions";

    import { categoryActions } from "../Store/Actions/categoryActions";
    import { appActions } from "../Store/Actions/appActions";
    import { shieldActions } from "../Store/Actions/shieldActions";
    import { alertActions } from "../Store/Actions/alertActions";


    import { userActions } from '../Store/Actions/auth';
    // import { appActions } from '../Store/Actions/app.actions';

// Import Media
// =========================================================
    import ABLogo from "../assets/images/AppBeware_icon_shadow.png"
    // import API from "../utils/API.js"
// Import Styles
// =========================================================
    import "../assets/styling/appStyle.css"

     
class Homepage extends Component {

    constructor(props) {
        super(props);
      }
    // Runs Redux to grab all of the categories necessary to render the homepage
    // COMPLETE
    viewCategory = (catId) => {
        this.props.viewSingleCategory(catId)
        this.props.viewSingleCategoryInfo(catId)
        // this.props.getCategoryInfo(catId)
        this.props.history.push('/categoryPage');

    }

    viewApp = (appId) => {
        console.log("Clicking View App");
        this.props.viewSingleApp(appId);
        this.props.getFullUserInfo(appId);
        this.props.viewAppReviews(appId);
        this.props.history.push('/appPage');
    }
    

    // Grabbing all necessary data from Redux

    componentDidMount() {

        // **********************************************
        // THESE FUNCTIONS DO WORK
        // **********************************************


        this.props.viewAllCategories();
        this.props.viewAppNames();
        this.props.viewAllListedApps();
        this.props.selectTrendingApps();
        this.props.viewAllShields();



        // **********************************************
        // END OF WORKING FUNCTIONS
        // **********************************************


        // this.props.getCategoriesHome();
        // this.props.shieldsInfo();


        // TODO: PUT THESE BACK IN ----
        // this.props.viewAllUserAppNotifications();
        // this.props.viewActiveUserAppNotifications();
       

        // this.props.filterCategory();
        this.props.getFullUserInfo();
    }

    render() {
       
        console.log(this.props.allCategories);

        
        return (
            <div>
                <Nav/>
                <main>
                    <HeaderContainer> 
                        <div className="headerBanner">
                            <h2 align="center" style={{color: "rgb(255, 255, 255)", borderBottom: "1px solid #13BAC7", margin: 0, padding: "16px"}}> 
                                Review and track potentially dangerous apps with our rating system:
                            </h2>
                            {!this.props.userInfo ? (<p align="center" >Loading...</p>) : ( <div align="center" > Hello <em>{this.props.userInfo.name}</em> </div>) }
                          
                        </div>
                        <Wrapper> 
                            <Grid container 
                                direction="row" 
                                justify="center" 
                                alignItems="center"
                                spacing={1}
                            >
                            <Grid item xs={12}>

                            </Grid>
                                <Grid item xs={12} sm={3}>
                                <div>
                                    <img alt="AppBeware herologo" src={ABLogo} style={{ width: "100%", padding: 0}}/>
                                </div>
                                </Grid>
                                
                                <Grid item xs={12} sm={9} style={{  color: "#57585D", display: "flex", flexFlow: "rowWrap", padding: 10,  justifyContent: "space-between"}}>
                              
                                {!this.props.allShields ? (<p align="center" >Loading...</p>) : 

                                        // this.props.shields.items.data.map(shield => (
                                        this.props.allShields.map(shield => (

                                            <ShieldLayout 
                                                key={shield.id}
                                                shieldIcon={shield.icon}
                                                altTxt={shield.altText}
                                                title={shield.name}
                                                info={shield.info}
                                            />
                                        ))
                                        }
                                
                                
                                </Grid>
                            </Grid>
                        
                        </Wrapper>
                    </HeaderContainer>

                    {/* <SearchAppAnnie 
                        viewApp={this.viewApp}
                    /> */}

                    <Wrapper style={{ maxWidth: "1040px", zIndex: "1", position: "static" , top: "calc(100vh - 348px)", left: 0, right: 0, margin: "auto"}}>
                        <HomepageTabNav >
                            <Grid 
                                container 
                                direction="row"
                                justify="center"
                                alignItems="center"
                                spacing={2}
                            >
                            {!this.props.allCategories ? (<p align="center" >Loading...</p>) : 

                            this.props.allCategories.map(cat => (
                                    <CategoryCards
                                        key={cat.id}
                                        title={cat.name}
                                        catId={cat.id}
                                        imageUrl={cat.imageUrl}
                                        viewCategory={this.viewCategory}
                                    /> 

                                ))}
                             

                            </Grid>
                        </HomepageTabNav>
                    </Wrapper>
                </main>
                <Footer/> 
            </div>
        )
    }
}


const mapStateToProps = (state) => ({

    allCategories: state.categories.allCategories,
    singleCategoryInfo: state.categories.singleCategoryInfo,
    allListedApps: state.apps.allListedApps,
    trendingApps: state.apps.trendingApps,
    allAppNames: state.apps.allAppNames,
    appReviews: state.apps.appReviews,
    appTextSearchResults: state.apps.appTextSearchResults,
    allShields: state.shields.allShields,
    userInfo: state.authentication.userInfo,
    isLoggedIn: state.authentication.isLoggedIn,
    // isloggedIn: state.user.isloggedIn,
    // alert: state.reviews.alert,
    allUserAppNotifications: state.alerts.allUserAppNotifications,
    activeUserAppNotifications: state.alerts.activeUserAppNotifications, 

    // const { users, 
    //         authentication,  
    //         allCategories,
    //         singleCategory,
    //         singleCategoryInfo,
    //         shields,
    //     } = state;
    // const { user } = authentication;
    // return { user, 
    //         users, 
    //         allCategories,
    //         singleCategory,
    //         singleCategoryInfo,
    //         shields };
    // 
});



const actionCreators = {
    // login: userActions.login,
    getFullUserInfo: userActions.getFullUserInfo,

    // TODO: MAYBE DELETE???
    // getCategoriesHome: appActions.getCategories,
    // getCategoryInfo: appActions.getCategoryInfo,
    // shieldsInfo: appActions.getShields,
    // viewSingleCategory: appActions.getCategoryInfo, 
    // filterCategory: appActions.filterCategory,
    // ________________________________

    viewAllListedApps: appActions.viewAllListedApps,
    viewAppNames: appActions.viewAppNames,
    viewAppReviews: appActions.viewAppReviews,
    search42Text: appActions.search42Text,
    selectTrendingApps: appActions.selectTrendingApps,

    viewAllCategories: categoryActions.viewAllCategories,
    viewSingleCategory: categoryActions.viewSingleCategory,
    viewSingleCategoryInfo: categoryActions.viewSingleCategoryInfo,

    viewAllShields: shieldActions.viewAllShields,

    viewAllUserAppNotifications: alertActions.viewAllUserAppNotifications,
    viewActiveUserAppNotifications: alertActions.viewActiveUserAppNotifications
     // TODO://////////////////
    // logout: userActions.logout
};

export default connect(mapStateToProps, actionCreators)(Homepage); 
