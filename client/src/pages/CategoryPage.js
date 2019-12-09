// Import React and Redux
// =========================================================
    import React, { Component } from "react"; 
    import { connect } from "react-redux";
// Import Redux Actions
// =========================================================
    import { viewAllCategories, viewSingleCategory, viewSingleCategoryInfo } from "../Store/Actions/categoryActions";
    import { viewSingleApp, viewAppReviews } from "../Store/Actions/appActions";
// Import Material UI Styles
// =========================================================
    import { withStyles } from '@material-ui/core/styles';
// Import Material Ui Components
// =========================================================
    import { Typography, Grid, Table, TableRow, TableBody, TextField } from '@material-ui/core/';
    import Autocomplete from '@material-ui/lab/Autocomplete';
// Import Components
// =========================================================
    import Nav from "../components/Nav"
    import Wrapper from "../components/Wrapper"
    import Footer from "../components/Footer"
    import { Image, Shields, ViewApp, AppDetails} from "../components/SearchResults";
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
            console.log("add this app to watch list")
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
            // this.props.history.push('/categoryPage');
        }

        render(props) {
            return (
                <>
                <Nav/>
                <main>
                    <Wrapper align="center" style={{paddingTop: 80}}> 
                    
                            <Grid container 
                                spacing={4}
                                direction="row"
                                justify="center"
                                alignItems="center"
                            >
                    
                                <Grid align="center" item xs={12} sm={3}>
                                <img 
                                    style={{ width: "100%", height: "auto", borderRadius: 16 }}
                                    src={this.props.singleCategoryInfo.imageUrl}
                                    alt={this.props.singleCategoryInfo.name}    
                                />
                                </Grid> 
                                <Grid item xs={12}  sm={9}>
                                    <h1 style={{ borderBottom: "1px solid grey", marginRight: "20px"}}>
                                    {this.props.singleCategoryInfo.name}

                                    </h1>
                                    <Typography variant="caption" color="textSecondary">
                                    {this.props.singleCategoryInfo.description}
                                    </Typography>
                        
                                </Grid> 
                        
                            </Grid>
                    </Wrapper>

                <Wrapper> 
                <div style={{ width:"100%" }}>
                    <InputOverRideOutline
                        freeSolo
                        id="search-categories"
                        disableClearable
                        options={this.props.categories.map(option => option.name)}
                        // getOptionLabel={this.props.categories.map(option => option.name)}
                        onChange={this.onTagsChange}
                        renderInput={params => (
                        <TextField
                            {...params}
                            label="Search By Category"
                            margin="normal"
                            variant="outlined"
                            fullWidth
                            InputProps={{ ...params.InputProps, type: 'search' }}
                        />
                        )}
                    />
                    </div>

                    <Table> 
                        <TableBody>
                        {this.props.singleCategory.map((app, i) => (
                            <TableRow key={i}>
                                <Image 
                                    title={app.name}
                                    image={app.logoUrl}
                                />
                                <AppDetails
                                    title={app.name}
                                />
                                <Shields
                                    title="placeholder for badges"
                                    badgeAlerts="Placeholder for badges"
                                    // image={app.logoUrl}
                                />
                                <ViewApp
                                title="View App"
                                viewApp={this.viewApp}
                                appId={app.id}
                                />
                                
                            </TableRow>
                        ))}
                        </TableBody>
                </Table>

                </Wrapper>
                </main>

                <Footer/>
                </>
            )
        }
    }

    const mapStateToProps = state => ({
        singleCategory: state.categories.singleCategory,
        categories: state.categories.allCategories,
        singleCategoryInfo: state.categories.singleCategoryInfo,
        appReviews: state.apps.appReviews
    })

    export default connect(mapStateToProps, 
        { 
            viewAllCategories, 
            viewSingleCategory, 
            viewSingleCategoryInfo, 
            viewSingleApp,
            viewAppReviews
        }
    )(Categories); 

    