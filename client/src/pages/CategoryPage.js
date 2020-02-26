// Import React and Redux
// =========================================================
    import React, { Component } from "react"; 
    import { connect } from "react-redux";
    import {Redirect} from 'react-router-dom'
// Import Redux Actions
// =========================================================
    import { categoryActions } from "../Store/Actions/categoryActions";
    import { appActions } from "../Store/Actions/appActions";
// Import Material UI Styles
// =========================================================
    import { withStyles } from '@material-ui/core/styles';
// Import Material Ui Components
// =========================================================
    import { Grid, Table, TableRow, TableBody, TableCell, TextField} from '@material-ui/core/';
    import Autocomplete from '@material-ui/lab/Autocomplete';
// Import Components
// =========================================================
    import Nav from "../components/Nav"
    import Wrapper from "../components/Wrapper"
    import Footer from "../components/Footer"
    import { Image, Shields, ViewApp, AppDetails, TableHeader} from "../components/SearchResults";

// Import styles
// =========================================================
    import "../assets/styling/appStyle.css"
    
    const InputOverRideOutline = withStyles({
        root: {
          '& label.Mui-focused': {
            color: '#13BAC7', // Teal
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#13BAC7', // Teal
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#A9A9A9', // Grey
            },
            '&:hover fieldset': {
              borderColor: '#F7C533', // Yellow
            },
            '&.Mui-focused fieldset': {
              borderColor: '#13BAC7', // Teal
            },
          },
        },
      })(TextField);


// Export Default Category Page Function
// =========================================================
    class Categories extends Component {

        constructor(props) {
            super(props);
            this.state = {
            search: "",
            message: "No apps have been added to this category yet."
            };
        }; 

        AddToWatchList = event => { 
            event.preventDefault(); 
            // console.log("add this app to watch list")
        }

        viewApp = (appId) => {
            this.props.viewSingleApp(appId);
            this.props.viewAppReviews(appId);
            this.props.history.push('/appPage'); 
        }

        onTagsChange = (event) => {
            const tempCatId = parseInt(event.target.getAttribute('data-option-index')) + 1;
            this.viewCategory(tempCatId);
        }

        viewCategory = (catId) => {
            this.props.viewSingleCategory(catId)
            this.props.viewSingleCategoryInfo(catId)
        }

        render(props) {
            return (
                <div>
                    {this.props.loggedIn ? ( 
                    <>
                        <Nav/>
                        <main>
                            <Wrapper align="center" style={{paddingTop: 40}}> 
                            
                                <Grid container 
                                    spacing={4}
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                    style={{marginBottom: 10}}
                                >
                        
                                    <Grid align="center" item xs={12} sm={3}>
                                    <img 
                                        style={{ width: "100%", height: "auto", borderRadius: 16 }}
                                        className="appIcon"
                                        src={this.props.singleCategoryInfo.imageUrl}
                                        alt={this.props.singleCategoryInfo.name}    
                                    />
                                    </Grid> 
                                    <Grid item xs={12}  sm={9}>
                                        <h1 style={{ borderBottom: "2px solid #13BAC7", marginRight: "20px", paddingBottom: "20px", fontSize: "2rem"}}>
                                            {this.props.singleCategoryInfo.name}
                                        </h1>
                                        <p style={{fontSize: "1.1rem"}}>
                                            {this.props.singleCategoryInfo.description}
                                        </p>
                            
                                    </Grid> 
                            
                                </Grid>
                            </Wrapper>

                    
                        <div className="searchBarBackground">
                        <Wrapper style={{paddingTop: "10px"}}> 
                            <Autocomplete
                            style={{ maxWidth: "1000px", width:"100%",  }}
                                freeSolo
                                id="search-categories"
                                className="searchInput"
                                disableClearable
                                options={this.props.allCategories.map(option => option.name)}
                                onChange={this.onTagsChange}
                                renderInput={params => (
                                <InputOverRideOutline
                                    {...params}
                                    label={<p style={{ margin: 0, marginLeft: "20px"}}>Search By Category...</p>}
                                    fullWidth
                                    InputProps={{ ...params.InputProps, type: 'search' }}
                                />
                                )}
                            />
                            </Wrapper>
                            </div>
                            <Wrapper> 
                            <Table style={{marginTop: "20px"}}>
                                <TableHeader/>
                                <TableBody>
                                {!this.props.singleCategory ? (<p align="center" >Loading...</p>) : 
                                this.props.singleCategory.map((app, i) => (
                                    <TableRow key={i} style={{borderBottom: "1px solid #13BAC7"}}>
                                        <Image 
                                            title={app.name}
                                            image={app.logoUrl}
                                        />
                                        <AppDetails
                                            title={app.name}
                                        />
                                        <TableCell>
                                            <Grid 
                                                container 
                                                style={{width: "100%"}}
                                                direction="row"
                                                justify="flex-start"
                                                alignItems="center"
                                                spacing={2}
                                            >
                                                {app.badge1 ? (
                                                    <Grid item xs={2}>
                                                        <Shields 
                                                            title={app.badge1Name}
                                                            image={app.badge1LogoUrl}
                                                        />
                                                    </Grid>
                                            ) : (
                                                <div style={{display: "none"}}/>
                                                )
                                            }
                                            {app.badge2 ? (
                                                <Grid item xs={2}>
                                                    <Shields 
                                                        title={app.badge2Name}
                                                        image={app.badge2LogoUrl}
                                                    />
                                                </Grid>
                                            ) : (
                                                <div style={{display: "none"}}/>
                                                )
                                            }
                                            {app.badge3 ? (
                                                <Grid item xs={2}>
                                                    <Shields 
                                                        title={app.badge3Name}
                                                        image={app.badge3LogoUrl}
                                                    />
                                                </Grid>
                                            ) : (
                                                <div style={{display: "none"}}/>
                                                )
                                            }
                                            {app.badge4 ? (
                                                <Grid item xs={2}>
                                                    <Shields 
                                                        title={app.badge4Name}
                                                        image={app.badge4LogoUrl}
                                                    />
                                                </Grid>
                                            ) : (
                                                <div style={{display: "none"}}/>
                                                )
                                            }
                                            {app.badge5 ? (
                                                <Grid item xs={2}>
                                                    <Shields 
                                                        title={app.badge5Name}
                                                        image={app.badge5LogoUrl}
                                                    />
                                                </Grid>
                                            ) : (
                                                <div style={{display: "none"}}/>
                                                )
                                            }
                                            </Grid>
                                        </TableCell>
                                        <TableCell>
                                            <ViewApp
                                                viewApp={this.viewApp}
                                                appId={app.id}
                                            />
                                        </TableCell>
                                        
                                    </TableRow>
                                )
                                )
                                }
                                </TableBody>
                            </Table>

                            </Wrapper>
                        </main>
                        <Footer/>
                    </> ) : ( <Redirect to='/' /> )
                    } 
                </div>
            )
        }
    }

    const mapStateToProps = state => ({
        singleCategory: state.categories.singleCategory,
        allCategories: state.categories.allCategories,
        singleCategoryInfo: state.categories.singleCategoryInfo,
        appReviews: state.apps.appReviews,
        userInfo: state.authentication.userInfo,
        loggedIn: state.authentication.loggedIn
    })
   
    const actionCreators = {
        viewAllCategories: categoryActions.viewAllCategories,
        viewSingleCategory: categoryActions.viewSingleCategory,
        viewSingleCategoryInfo: categoryActions.viewSingleCategoryInfo,
        viewSingleApp: appActions.viewSingleApp,
        viewAppReviews: appActions.viewAppReviews,
        // getFullUserInfo: userActions.getFullUserInfo,
        // getCategoriesHome: appActions.getCategories,
        // getCategoryInfo: appActions.getCategoryInfo,
        // shieldsInfo: appActions.getShields,
        // viewSingleCategory: appActions.getCategoryInfo, 
        filterCategory: appActions.filterCategory,
    };
    
    export default connect(mapStateToProps, actionCreators)(Categories); 
    


    