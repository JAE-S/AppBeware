// Import React
// =========================================================
    import React, { Component } from 'react';
// Import Redux Components
// =========================================================
    import { connect } from "react-redux";
    import { viewAllShields } from "../../Store/Actions/shieldActions";
    import { search42Text, search42IosId } from "../../Store/Actions/appActions";

    import API from "../../utils/API";

// Import Material UI Styles
// =========================================================
    import { withStyles } from '@material-ui/core/styles';
// Import Material UI Components
// =========================================================
    import { FormControl, FormControlLabel, Checkbox, TextField, Table, TableBody, TableRow, TableCell, TableHead, Grid, Button } from '@material-ui/core/';
    import Autocomplete from '@material-ui/lab/Autocomplete';
// Import Media
// =========================================================
    import One from "../../assets/images/danger_rating_icons/danger_rating_1.png";
    import Two from "../../assets/images/danger_rating_icons/danger_rating_2.png";
    import Three from "../../assets/images/danger_rating_icons/danger_rating_3.png";
    import Four from "../../assets/images/danger_rating_icons/danger_rating_4.png";
    import Five from "../../assets/images/danger_rating_icons/danger_rating_5.png";
    import "./style.css"


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


// Export About the Shields function
// =========================================================
    class AdvancedSearchModal extends Component {
        constructor(props) {
            super(props);
            this.state = {
              checkedIos: false,
              checkedAndriod: false,
              queryTerms: ""
            };
        }; 

        handleTextFieldChange = (event) => {
            this.setState({
                queryTerms: event.target.value
            });
            console.log(this.state.queryTerms);
        }

        search42 = (queryTerm) => {
            console.log("Inside search42");
            this.props.search42Text(queryTerm, "ios");
        }

        viewApp = (index) => {

            // const tempAppToSubmit = {
            //     'predatorRisk': (this.state.allShieldSelection.includes('Predator Risk') ? true : false),
            //     'dangerousBehavior': (this.state.allShieldSelection.includes('Dangerous Behavior') ? true : false),
            //     'cyberbullying': (this.state.allShieldSelection.includes('Cyberbullying') ? true : false),
            //     'violentContent': (this.state.allShieldSelection.includes('Violent Content') ? true : false), 
            //     'sexualContent': (this.state.allShieldSelection.includes('Sexual Content') ? true : false), 
            //     'dangerRating': this.state.dangerRating, 
            //     'comments': this.state.comments,
            //     'alert': this.state.alertChecked,
            //     'UserId': this.props.user.id, 
            //     'ListedAppId': this.props.singleApp.id
            // }
      
            // this.props.reviewSubmit(reviewToSubmit);
            // API.submitReview(reviewToSubmit);


            console.log("Trying to view this app: Index: " + index);
            this.props.search42IosId(index);
            API.addTempAppListing()
        }

        handleChange = name => event => {
            if (!this.state.checkedIos && !this.state.checkedAndriod || this.state.checkedAndriod && !this.state.checkedIos ){
                return (
                    this.setState({ 
                        checkedIos: true, 
                        checkedAndriod: false 
                    })
                )
             } else if (!this.state.checkedAndriod && !this.state.checkedAndriod || !this.state.checkedAndriod && this.state.checkedIos ){
                return (
                    this.setState({ 
                        checkedIos: false, 
                        checkedAndriod: true
                    })
                )
             }
        }

        render() {
            
            return (
                <>
                    <Grid 
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    > 
                        <Grid items>
                        <FormControl>
                        <FormControlLabel 
                            control={ <Checkbox
                                checked={this.state.checkedIos}
                                onChange={this.handleChange('Ios')}
                                value="Ios"
                                inputProps={{
                                'aria-label': 'Ios',
                                }}
                            />}
                            label="IOS"
                        />
                         <FormControlLabel 
                           control={<Checkbox
                                checked={this.state.checkedAndriod}
                                onChange={this.handleChange('Android')}
                                value="Android"
                                inputProps={{
                                'aria-label': 'Android',
                                }}
                            />}
                            label="Andriod"
                        />

                        </FormControl>
                        </Grid> 
                        <Grid item xs={12}> 
                            {/* <div className="searchBarBackground"> */}
                                <Autocomplete
                                    style={{ maxWidth: "1000px", width:"100%",  }}
                                    freeSolo
                                    id="search-categories"
                                    className="searchInput"
                                    disableClearable
                                    // options={this.props.categories.map(option => option.name)}
                                    // onChange={this.onTagsChange}
                                    renderInput={params => (
                                        <InputOverRideOutline
                                            {...params}
                                            label={<p style={{ padding: "20px"}}>Search By App Name...</p>}
                                            fullWidth
                                            InputProps={{ ...params.InputProps, type: 'search' }}
                                            onChange={this.handleTextFieldChange}
                                        />
                                    )}
                                />
                            {/* </div>  */}
                        </Grid>
                        <Button
                            onClick={() => this.search42(this.state.queryTerms)}
                        >Search</Button>
                        <Grid  style={{width: "100%"}} item> 
                            <Table>
                                <TableBody>

                                        {this.props.appTextSearchResults.map(item => (
                                            <TableRow
                                                key={item.trackCensoredName}
                                            
                                            > 

                                                <TableCell  align="center"> 
                                                    {item.trackCensoredName}
                                                </TableCell>

                                                <TableCell  align="center"> 
                                                    <Button
                                                        onClick={() => this.viewApp(item.trackId)}
                                                    > 
                                                        View App
                                                    </Button> 
                                                </TableCell>

                                            </TableRow>
                                        ))
                                        }



                                </TableBody>
                            </Table>
                        </Grid> 
                        

                    </Grid> 
                </>
            )
        }
    }

    // export default AdvancedSearchModal; 

const mapStateToProps = state => ({
    appTextSearchResults: state.apps.appTextSearchResults,
    iosAppIndividualSearchResult: state.apps.iosAppIndividualSearchResult
})

export default connect(mapStateToProps, 
    { 
        search42Text,
        search42IosId
    }
)(AdvancedSearchModal); 
