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
    import { viewAllCategories, viewSingleCategory } from "../Store/Actions/categoryActions";

// Import styles
// =========================================================
    import "../assets/styling/appStyle.css"
    

// Export Default Category Page Function
// =========================================================

const categories = [ 
    { name: "Social Networking"},
    { name: "Photos & Videos"}, 
    { name: "Lifestyle"},
    { name: "Entertainment"},
    { name: "Games"},
    { name: "View All Apps"}
]

class Categories extends Component {

    constructor(props) {
        super(props);
        this.state = {
          appsInCategory: [],
          search: "",
          message: "No apps have added to this category yet."
        };
     }; 

     AddToWatchList = event => { 
        event.preventDefault(); 
        console.log("add this app to watch list")
    }

    ViewApp = event => { 
        event.preventDefault(); 
        console.log("view this app")
          
    }

    testButton = () => {
        console.log("you clicked me");
        console.log(this.props.categories);
        console.log(this.props);
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
                                <div style={{ backgroundColor: "grey", width: "100%", height: "auto", borderRadius: 16 }}>
                                    category cover placeholder 
                                </div>

                                {/* <img alt={data[0].name} style={{ width: "100%", height: "auto", borderRadius: 16 }} src={data[0].logoUrl}/> */}
                            </Grid> 
                            <Grid item xs={12}  sm={9}>
                                <h1 style={{ borderBottom: "1px solid grey", marginRight: "20px"}}>
                                    Category Title goes here. 
                                </h1>
                                <Typography variant="caption" color="textSecondary">
                                    Category description goes here 
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
                    options={categories.map(option => option.name)}
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
                        {/* THIS IS AN EXAMPLE TABLE ROW */}
                        {/* <TableRow>
                            <TableCell> 
                                <div style={{ height: "100px", width: "100px", backgroundColor: "grey"  }}/> 
                            </TableCell>
                            <TableCell > 
                                Facebook
                            </TableCell>
                            <TableCell > 
                                placeholder for badges in category 
                            </TableCell>
                            <TableCell > 
                                <button> Add to Watch list</button>
                            </TableCell>
                            <TableCell > 
                                <button> View App</button>
                            </TableCell>
                         
                        </TableRow> */}
                    {this.props.categories.map((app, i) => (
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
                            //    handleViewApp={app.name}
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
    categories: state.categories.singleCategory
})

export default connect(mapStateToProps, { viewAllCategories, viewSingleCategory })(Categories); 

