// Import React and Redux
// =========================================================
    import React, { Component } from "react"; 
    import { connect } from "react-redux";

    // Import Material Ui Components
// =========================================================
    import { Typography, Button, Grid, Table, TableRow, TableBody, TableCell, TextField } from '@material-ui/core/';

    // Import Components
// =========================================================
    import Nav from "../components/Nav"
    import Wrapper from "../components/Wrapper"
    import Footer from "../components/Footer"
    // import HeaderContainer from "../components/HeaderContainer"
    import { Image, Badges, AddToWatchList, ViewApp, AppDetails} from "../components/SearchResults";
    import Autocomplete from '@material-ui/lab/Autocomplete';
    import { viewAllCategories, viewSingleCategory, viewSingleCategoryInfo } from "../Store/Actions/categoryActions";
    import { viewSingleApp } from "../Store/Actions/appActions";


// Import styles
// =========================================================
    import "../assets/styling/appStyle.css"
    

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
        this.props.viewSingleApp(appId)
        this.props.history.push('/appPage'); 
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
                <Autocomplete
                    freeSolo
                    id="search-categories"
                    disableClearable
                    options={this.props.categories.map(option => option.name)}
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
                            <Badges 
                                title="placeholder for badges"
                                badgeAlerts="Placeholder for badges"
                                // image={app.logoUrl}
                            />
                            <ViewApp
                               title="View App"
                               viewApp={this.viewApp}
                               appId={app.id}
                            />
                             <AddToWatchList 
                               handleAddToWatchList = {this.AddToWatchList.bind(this)}
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
    singleCategoryInfo: state.categories.singleCategoryInfo
})

export default connect(mapStateToProps, 
    { 
        viewAllCategories, 
        viewSingleCategory, 
        viewSingleCategoryInfo, 
        viewSingleApp
    })
    (Categories); 

    