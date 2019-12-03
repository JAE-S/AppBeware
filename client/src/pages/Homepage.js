// Import React and Redux
// =========================================================
import React, { Component } from "react";  
import { connect } from "react-redux";

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
import Footer from "../components/Footer"
import { viewAllCategories, viewSingleCategory } from "../Store/Actions/categoryActions";
import { viewAllListedApps, viewAppNames, viewSingleApp, selectTrendingApps } from "../Store/Actions/appActions";
import { viewAllShields } from "../Store/Actions/shieldActions";

// Import API 
// =========================================================
// import API from "../utils/API";
// Import Media
// =========================================================
import ABLogo from "../assets/images/AppBeware_icon_shadow.png"
import CB_icon from "../assets/images/shields/cyberbullying.png";
import DB_icon from "../assets/images/shields/dangerous_behavior.png";
import PR_icon from "../assets/images/shields/predator_risk.png";
import SC_icon from "../assets/images/shields/sexual_content.png";
import VC_icon from "../assets/images/shields/violent_content.png";
// Import Styles
// =========================================================
import "../assets/styling/appStyle.css"


class Homepage extends Component {

    state = {
     
    }

    // Runs Redux to grab all of the categories necessary to render the homepage
    // COMPLETE
    viewCategory = (catId) => {
        this.props.viewSingleCategory(catId)
        this.props.history.push('/categoryPage');
    }

    viewApp = () => {
        console.log("Clicking to view individual app");
    }

    // Grabbing all necessary data from Redux
    // componentDidMount() {
    //     this.props.viewAllCategories();
    //     this.props.viewAppNames();
    //     this.props.viewAllListedApps();
    //     this.props.selectTrendingApps();
    //     this.props.viewAllShields();
    // }

    render() {
        return (
            <>
            <Nav/>
           <main>
            <HeaderContainer> 
                <Wrapper> 
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={3}>
                        <div>
                            <img alt="AppBeware herologo" src={ABLogo} style={{ width: "100%", padding: 0}}/>
                        </div>
                        </Grid>
                        
                        <Grid item xs={12} sm={9} style={{  display: "flex", flexFlow: "rowWrap", padding: 10,  justifyContent: "space-between"}}>
                                {/* // Just here for future use if needed */}
                                {/* {this.state.allShields.map(shield => (
                                    <ShieldLayout 
                                        shieldIcon={shield.icon}
                                        altTxt={shield.altText}
                                        title={shield.name}
                                        info={shield.info}
                                    />
                                ))} */}

                            <ShieldLayout 
                                shieldIcon={ PR_icon }
                                altTxt="Predator Risk icon"
                                title="Predator Risk"
                                info="Apps that expose children to predators through solicitation, sharing personal information, encouragement to meet in person, intent to engage in sexual activity, stalking or harm."
                            />
                            <ShieldLayout 
                                shieldIcon={ DB_icon }
                                altTxt="Dangerous Behavior icon"
                                title="Dangerous Behavior"
                                info="Apps that promote self harm, suicide, eating disorders, choking games, dangerous challenges or other acts where serious injury or death may result."
                            />
                            <ShieldLayout 
                                shieldIcon={ CB_icon }
                                altTxt="Cyberbullying icon"
                                title="Cyberbulling "
                                info="Harassment in the comments and parody videos being created to humiliate and tease some users, particularly users with disabilities. Bullying people from different religious or ethnic backgrounds, blackmail, extortion, public humiliation or harassment."
                            />
                            <ShieldLayout 
                                shieldIcon={ VC_icon }
                                altTxt="Violent Content icon"
                                title="Violent Content"
                                info="Apps that depict or facilitate gratuitous violence or other dangerous activities against people or animals.  These include threats, gun violence, terroism, use, sale or depictions of explosives or firearms."
                            />
                            <ShieldLayout 
                                shieldIcon={ SC_icon }
                                altTxt="Sexual Content icon"
                                title="Sexual Content"
                                info="Apps that contain or promote sexual content, such as nudity, pornography, or any content or services intended to be sexually gratifying."
                            />
                        
                        </Grid>
                    </Grid>
                
                </Wrapper>
            </HeaderContainer>

            {/* <SearchAppAnnie /> */}

            <Wrapper>
                <HomepageTabNav>
                    <Grid container spacing={2}>

                    {this.props.categories.map(cat => (
                            <CategoryCards
                                key={cat.id}
                                title={cat.name}
                                catId={cat.id}
                                viewCategory={this.viewCategory}
                            />
                        ))}

                    </Grid>
                </HomepageTabNav>
            </Wrapper>
            </main>
        <Footer/>
     </>
    )
    }
}

const mapStateToProps = state => ({
    categories: state.categories.allCategories,
    apps: state.apps.allListedApps,
    trendingApps: state.apps.trendingApps,
    appNames: state.apps.allAppNames,
    shields: state.shields.allShields
})

export default connect(mapStateToProps, 
    { 
        viewAllCategories, 
        viewSingleCategory, 
        viewAllListedApps, 
        viewAppNames, 
        selectTrendingApps,
        viewAllShields 
    })(Homepage); 
