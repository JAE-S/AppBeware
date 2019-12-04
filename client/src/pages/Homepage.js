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

// Import Media
// =========================================================
    import ABLogo from "../assets/images/AppBeware_icon_shadow.png"

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

    viewApp = (appId) => {
        console.log("Clicking View App");
        this.props.viewSingleApp(appId)
        this.props.history.push('/appPage');
        // this.props.history.push('/categoryPage');
    }

    // Grabbing all necessary data from Redux
    componentDidMount() {
        this.props.viewAllCategories();
        this.props.viewAppNames();
        this.props.viewAllListedApps();
        this.props.selectTrendingApps();
        this.props.viewAllShields();
    }

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

                                {this.props.shields.map(shield => (
                                    <ShieldLayout 
                                        shieldIcon={shield.icon}
                                        altTxt={shield.altText}
                                        title={shield.name}
                                        info={shield.info}
                                    />
                                ))}
                        
                        </Grid>
                    </Grid>
                
                </Wrapper>
            </HeaderContainer>

            <SearchAppAnnie />

            <Wrapper>
                <HomepageTabNav>
                    <Grid container spacing={2}>

                    {this.props.categories.map(cat => (
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
