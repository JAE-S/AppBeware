// Import React & Node packages
// =========================================================
    import React from 'react';
    import { connect } from "react-redux";
    import { push } from 'connected-react-router';
    import Downshift from "downshift";
// Import Redux Actions
// =========================================================
    import {viewAllListedApps, viewSingleApp,viewAppReviews } from "../../Store/Actions/appActions";
    import { viewAllShields } from "../../Store/Actions/shieldActions";
    import { userActions } from '../../Store/Actions/auth';
    import { appActions } from '../../Store/Actions/app.actions';
// Import Material UI Styles
// =========================================================
    import { withStyles } from '@material-ui/core/styles';
    // Import Material UI components
// =========================================================
    import {TextField, Grid, Button} from '@material-ui/core';
// Import Material UI Icons
// =========================================================
    // import MenuItem from '@material-ui/core/MenuItem';
    // import CancelIcon from '@material-ui/icons/Cancel';
// Custom Components
// =========================================================
  import Wrapper from "../Wrapper"
  import Modal from "../Modals"
  import AdvancedSearchModal from "./AdvancedSearchModal"
  import { ShieldsHomepage, ViewApp } from "../../components/SearchResults";

// Import CSS
// =========================================================
    import"../../assets/styling/appStyle.css"
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

  const advancedSearchFunction = [
    {
      results: "No Matches Found",
    },
    {
      results: "Advanced Search", 
    },
   
  ]
class SearchAppAnnie extends React.Component {
  

  // onChange = (selectedApp) => {
  //   // alert(`View ${selectedApp.label}`)
  //   this.props.viewSingleApp(selectedApp.id);
  //   this.props.viewAppReviews(selectedApp.id);
  //   this.props.history.push('/appPage');
  // }

  viewApp = (appId) => {
    console.log("Inside viewApp on Search App Annie");
    this.props.viewSingleApp(appId);
    this.props.viewAppReviews(appId);
    this.props.push('/appPage'); 
}

  componentDidMount() {
    // this.props.viewAllListedApps();
    // this.props.viewAllShields();
    // this.mapShieldsData() 
    this.props.getListedApps();
}

  stateReducer = (state, changes) => {
    // this prevents the menu from being closed when the user
    // selects an item with a keyboard or mouse
    switch (changes.type) {
      case Downshift.stateChangeTypes.keyDownEnter:
      case Downshift.stateChangeTypes.clickItem:
        return {
          ...changes,
          isOpen: state.isOpen,
          highlightedIndex: state.highlightedIndex,
        }
      default:
        return changes
    }
  }
  
  openModal() {
    // alert("this modal should open")
    return (
        <Modal
            modalTitle={
                <div>
                  Advanced Search
                </div>
            }
            openModal={
                <Button  className="teal login">
                  Advanced Search
                </Button>
              }
            modalBody={<AdvancedSearchModal/>}
                  
        />
    )
  }

  render(props) {
 
    return (
      <div className="root">
      <Wrapper style={{position: "relative", zIndex: 1000}}>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={4}> 
            <h2 align="center"> 
              Search for an app or see what's trending! 
            </h2>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Downshift 
              stateReducer={this.stateReducer}
              onChange={this.onChange} 
              itemToString={items => (items ? items.label : '')}
            >
              {({
                getInputProps,
                getItemProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem
              }) => (
                <div style={{position: "relative", zIndex: 1000}}>
                  <InputOverRideOutline 
                    className="searchInput" 
                    {...getInputProps({ placeholder: "Holla" })}  
                    style={{margin: 20}}
                  />
                  
                  {isOpen ? (
                    <div className="downshift-dropdown" >
                      {
                        ((this.props.apps.filter(item => !inputValue || item.name.toLowerCase().includes(inputValue.toLowerCase())).length) > 0 ) ?

                          this.props.apps.filter(item => !inputValue || item.name.toLowerCase().includes(inputValue.toLowerCase()))
                          // map the return value and return a div
                          .map((item, index) => {

                                return (
                                <Grid container 
                                  className="dropdown-item"
                                  direction="row"
                                  justify="space-between"
                                  alignItems="center"
                                  {...getItemProps({
                                
                                    key: item.name,
                                    index,
                                    item,
                                  })}
                                    style = {{
                                      backgroundColor:
                                      highlightedIndex === index ? "lightgray" : "white",
                                      fontWeight: selectedItem === item ? "bold" : "normal",
                                      zIndex: 3
                                    }}
                                >
                                <Grid item xs={3}>
                                  <h3>{item.name}</h3>
                                </Grid>
                                <Grid item xs={5}>
                                {/* DROPDOWN SHIELD ICONS */}
                                <Grid 
                                    container 
                                    style={{width: "100%"}}
                                    direction="row"
                                    justify="flex-start"
                                    alignItems="center"
                                    spacing={2}
                                >
                                  {item.badge1 ? (
                                      <Grid item xs={2}>
                                              <ShieldsHomepage 
                                                  title={item.badge1Name}
                                                  image={item.badge1LogoUrl}
                                              />
                                          </Grid>
                                        
                                  ) : (
                                      <div style={{display: "none"}}/>
                                      )
                                  }
                                  {item.badge2 ? (
                                      <Grid item xs={2}>
                                          <ShieldsHomepage 
                                              title={item.badge2Name}
                                              image={item.badge2LogoUrl}
                                          />
                                      </Grid>
                                  ) : (
                                      <div style={{display: "none"}}/>
                                      )
                                  }
                                  {item.badge3 ? (
                                      <Grid item xs={2}>
                                          <ShieldsHomepage 
                                              title={item.badge3Name}
                                              image={item.badge3LogoUrl}
                                          />
                                      </Grid>
                                  ) : (
                                      <div style={{display: "none"}}/>
                                      )
                                  }
                                  {item.badge4 ? (
                                      <Grid item xs={2}>
                                          <ShieldsHomepage 
                                              title={item.badge4Name}
                                              image={item.badge4LogoUrl}
                                          />
                                      </Grid>
                                  ) : (
                                      <div style={{display: "none"}}/>
                                      )
                                  }
                                  {item.badge5 ? (
                                      <Grid item xs={2}>
                                          <ShieldsHomepage 
                                              title={item.badge5Name}
                                              image={item.badge5LogoUrl}
                                          />
                                      </Grid>
                                  ) : (
                                      <div style={{display: "none"}}/>
                                      )
                                  }
                                </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                  <ViewApp
                                    viewApp={() => this.viewApp(item.id)}
                                    appId={item.id}
                                  />
                                </Grid>
                                </Grid>
                                )
                              }
                              
                              ) : (
                                advancedSearchFunction.map((item, index) => {
                                  return (
                                    <Grid 
                                      container 
                                      className="dropdown-item"
                                      direction="row"
                                      justify="center"
                                      alignItems="center"
                                      
                                      {...getItemProps({
                                
                                        key: item.name,
                                        index,
                                        item,
                                      })}
                                        style = {{
                                          backgroundColor:
                                          highlightedIndex === index ? "lightgray" : "white",
                                          fontWeight: selectedItem === item ? "bold" : "normal",
                                          zIndex: 3
                                        }}
                                    >
                                    {item.results === "No Matches Found" ? (
                                      <p align="center"
                                      style={{textIndent: "0px!important"}}>
                                        No Matches Found
                                      </p>
                                    ) : ( 
                                          // <Button 
                                          //   onClick={() => this.openModal()} 
                                          //   className="teal" 
                                          //   align="center"
                                          // >
                                          //   Advanced Search
                                          // </Button>
                                          <div></div>
                                    )}
                                  
                                    </Grid>
                                  )
                                  })
                              )
                        }
                    </div>
                  ) : null} 
                </div>
              )}
            </Downshift>
            
          </Grid> 
        </Grid> 
{/* ------------- TEST ADVANCED SEARCH MODAL ------------- */}
        {/* <Modal
            modalTitle={
                <div>
                  Advanced Search
                </div>
            }
            openModal={
                <Button  className="teal login">
                  Advanced Search
                </Button>
              }
            modalBody={<AdvancedSearchModal/>}      
        /> */}
      </Wrapper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { 
          allListedApps, 
          allAppNames, 
          singleApp, 
          shieldsForApps,
      } = state;
  return { 
          allListedApps, 
          allAppNames, 
          singleApp, 
          shieldsForApps, 
          };
}
const mapDispactToProps = {
  getListedApps: appActions.allListedApps,

};

export default connect(mapStateToProps, mapDispactToProps
  
  )(SearchAppAnnie); 


// const mapStateToProps = state => ({
//   // singleCategory: state.categories.singleCategory,
//   apps: state.apps.allListedApps,
//   singleApp: state.apps.singleApp,
//   appNames: state.apps.allAppNames,
//   shieldsForApps: state.apps.shieldsForApps,
//   appReviews: state.apps.appReviews,
//   shields: state.shields.allShields,
// })

// export default connect(mapStateToProps, 
//   { 
//     viewAllListedApps, 
//     viewSingleApp,
//     viewAllShields,
//     viewAppReviews,
//     push
//   })(SearchAppAnnie); 


