// Import React
// =========================================================
    import React, { Component } from "react"; 
// Import Material Ui Components
// =========================================================
    import { Table, TableRow, TableBody, TableCell } from '@material-ui/core/';
// Import Components
// =========================================================
    import Nav from "../components/Nav"
    import Wrapper from "../components/Wrapper"
    import Footer from "../components/Footer"
    // import HeaderContainer from "../components/HeaderContainer"
    import SearchAppAnnie from "../components/SearchAppAnnie"
    import { Image, AddToWatchList , ViewApp, AppDetails} from "../components/SearchResults";
// Import styles
// =========================================================
    import "../assets/styling/appStyle.css"

// Export Default Category Page Function
// =========================================================
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

     render() {
        return (
            <>
            <Nav/>
            <main>
            {/* <HeaderContainer>  */}
                <Wrapper align="center" style={{paddingTop: 80}}> 
                    
                <h3>This is the App Category page</h3>
                
                </Wrapper>
            {/* </HeaderContainer> */}
            <Wrapper> 
                <SearchAppAnnie />

                <Table> 
                    <TableBody>
                        {/* THIS IS AN EXAMPLE TABLE ROW */}
                        <TableRow>
                            <TableCell> 
                                <div style={{ height: "100px", width: "100px", backgroundColor: "grey"  }}/> 
                            </TableCell>
                            <TableCell > 
                                Facebook
                            </TableCell>
                            <TableCell > 
                                <button> Add to Watch list</button>
                            </TableCell>
                            <TableCell > 
                                <button> View App</button>
                            </TableCell>
                        </TableRow>
                    {this.state.appsInCategory.map((app, i) => (
                        <TableRow key={i}>
                            <Image 
                                image={app.image}
                             />
                            <AppDetails
                                title={app.title}
                            />
                            {/* Function to add View App  */}
                            <ViewApp
                               handleViewApp = {this.handleViewApp.bind(this)}
                            />
                             {/* Function to add pin this app  */}
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
export default Categories;