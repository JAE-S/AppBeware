// Import React
// =========================================================
    import React from "react"; 
// Import Material UI components 
// =========================================================
    import { Grid, Typography, Button, Table, TableBody, TableRow, TableCell }from '@material-ui/core/';
// Import Material UI Components
// =========================================================
    import { Brightness1Rounded, AddAlert} from '@material-ui/icons/';
// Import Custom Components
// =========================================================
    import Nav from "../components/Nav"
    import Wrapper from "../components/Wrapper"
    import {AppRatings, CustomizedRatings }from "../components/Ratings"
// Import Media
// =========================================================
    import PR_icon from "../assets/images/shields/predator_risk.png";
    import CB_icon from "../assets/images/shields/cyberbullying.png";
    import DB_icon from "../assets/images/shields/dangerous_behavior.png";
    import SC_icon from "../assets/images/shields/sexual_content.png";
    import VC_icon from "../assets/images/shields/violent_content.png";
    import Tony_Smith from "../assets/images/test_profiles/Tony_Smith.png";
    import Anya_Tyler from "../assets/images/test_profiles/Anya_Tyler.png";
    
// Custom Styles 
// =========================================================
    import "../assets/styling/appStyle.css"

    // Test data
    const data = [

        { logoUrl: "https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/4a/60/3f/4a603f8b-56e2-eeb7-f25b-be00151e271b/source/1024x1024bb.jpg",
          name: "Holla",
          createdAt: '1 hours ago',
          warnRatingAverage: 4,
          badges: PR_icon,
          link: "https://holla.world/", 
          description: "HOLLA is a free, live video streaming app that randomly matches people in video chats across the globe. Think prank calling and party lines for the virtual age, and that pretty much sums up the HOLLA app.", 

        },
      
      ];
 
    const test_profiles = [

        { image: Tony_Smith,
          username: "Tony S.",
          reviewCount: 3,
          datePosted: "Nov. 18, 2019",
          badges: PR_icon,
          dangerRating: 4, 
          comments: "My child was talking to strangers through this app."
        },
        { image: Anya_Tyler,
            username: "Anya T.",
            reviewCount: 2,
            datePosted: "Oct. 2, 2019",
            badges: CB_icon,
            dangerRating: 2, 
            comments: "My daughter uses this app to send videos to her friends."
          },
      
      ];

// Grid Layout
// =========================================================
    export function SmallGrid(props) {
        return (
            <Grid container spacing={0} style={{ display: "flex", alignItems: "center"}}>
                <Grid align="right" item xs={2}>
                    {props.smallGirdLeft}
                </Grid>
                <Grid align="left" item xs={10}>
                    {props.smallGirdRight}
                </Grid>
            </Grid>
        ) 
    }

// Comments layout 
// =========================================================
    export function CommentGrid(props) {
        return (
            <Table style={{ margin: "0 auto"}}>
              <TableBody style={{ width: "100%"}} >
                <TableRow>
                    <TableCell>
                        {props.imageLeft}
                        <h5>{props.usernameLeft}</h5>
                        <h6>Total Reviews: {props.reviewCountLeft}</h6>
                        <h6>{props.datePostedLeft}</h6> 
                    </TableCell>
                    <TableCell>
                        <h4>Badge Alerts</h4> 
                        {props.badgesRight}
                        <h4>Danger Rating</h4> 
                        {props.dangerRatingRight}
                    </TableCell>
                    <TableCell>
                        <TableRow>
                            <h4>Comments</h4> 
                            {props.commentsRight}
                        </TableRow>
                        <Button>
                            <Typography variant="caption" color="textSecondary">
                                Helpful
                            </Typography>
                        </Button>
                    </TableCell>
                    </TableRow>
              </TableBody>
          </Table>
          
        ) 
    }
      
// Export Default App Page Function
// =========================================================
    export default function App() {
   
        return (
            <>
            <Nav/>
                <div className="header"> 
                    <Grid container spacing={4}>
               
                        <Grid align="center" item xs={12} sm={3}>
                            <img alt={data[0].name} style={{ width: "100%", height: "auto", borderRadius: 16 }} src={data[0].logoUrl}/>
                        </Grid> 
                        <Grid item xs={12}  sm={9}>
                            <h1 style={{ borderBottom: "1px solid grey", marginRight: "20px"}}>{data[0].name}
                            {<AddAlert style={{ paddingLeft: 20}} />}
                            </h1>
                            <p>{data[0].description}</p>
                            <Button href={data[0].link} target="_blank">
                                <Typography variant="caption" color="textSecondary">
                                    View in app store
                                </Typography>
                            </Button>
                        </Grid> 
                  
                    </Grid>
                </div>
         
                <Wrapper style={{paddingTop: 80}}> 
                {/* Rating -> Danger rating & Shield Tracker */}
                    <Grid container spacing={4}>
                
                        <Grid item xs={12} sm={6}>
                            <h3 align="center" >Danger Rating</h3>
                            <SmallGrid 
                                smallGirdLeft={<Brightness1Rounded style={{ fontSize: "36px", color: "red"}} />}
                                smallGirdRight={<AppRatings ratingValue={5}/>}
                            />
                            <SmallGrid 
                                smallGirdLeft={<Brightness1Rounded style={{ fontSize: "36px", color: "red"}} />}
                                smallGirdRight={<AppRatings ratingValue={4}/>}
                            />
                             <SmallGrid 
                                smallGirdLeft={<Brightness1Rounded style={{ fontSize: "36px", color: "red"}} />}
                                smallGirdRight={<AppRatings ratingValue={3}/>}
                            />
                             <SmallGrid 
                                smallGirdLeft={<Brightness1Rounded style={{ fontSize: "36px", color: "red"}} />}
                                smallGirdRight={<AppRatings ratingValue={2}/>}
                            />
                             <SmallGrid 
                                smallGirdLeft={<Brightness1Rounded style={{ fontSize: "36px", color: "red"}} />}
                                smallGirdRight={<AppRatings ratingValue={1}/>}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <h3 align="center" >Shield Tracker</h3>
                            <SmallGrid 
                                smallGirdLeft={<img alt="Predator Risk" style={{  justifyContent: "center", maxWidth: "40px", width: "100%", height: "auto"}} src={PR_icon}/>}
                                smallGirdRight={<CustomizedRatings />}
                            />
                            <SmallGrid 
                                smallGirdLeft={<img alt="Dangerous Behavior" style={{ maxWidth: "40px", width: "100%", height: "auto"}} src={DB_icon}/>}
                                smallGirdRight={<CustomizedRatings />}
                            />
                             <SmallGrid 
                                smallGirdLeft={<img alt="Cyberbullying" style={{ maxWidth: "40px", width: "100%", height: "auto"}} src={CB_icon} />}
                                smallGirdRight={<CustomizedRatings />}
                            />
                             <SmallGrid 
                                smallGirdLeft={<img alt="Violent Content" style={{ maxWidth: "40px", width: "100%", height: "auto"}} src={VC_icon}/>}
                                smallGirdRight={<AppRatings />}
                            />
                             <SmallGrid 
                                smallGirdLeft={<img alt="Sexual Content" style={{ maxWidth: "40px", width: "100%", height: "auto"}} src={SC_icon} />}
                                smallGirdRight={<AppRatings />}
                            />
                        </Grid>

                    </Grid>
                 
                    {/* Comments */}
                    <Grid style={{ display: "flex", alignItems: "center", borderBottom: "2px solid grey", height: "54px"}}container spacing={0}>
                        <Grid item xs={10}>
                            <h2 >Reviews: </h2>
                        </Grid>
                        <Grid align="right" item xs={2}>
                            <Button>
                                <Typography variant="caption" color="textSecondary">
                                    Add a review 
                                </Typography>
                            </Button>
                        </Grid>
                    </Grid>
                    <CommentGrid
                        // ---> Left Side
                        imageLeft={<img alt={test_profiles[0].username} style={{  justifyContent: "center", maxWidth: "40px", width: "100%", height: "auto"}} src={test_profiles[0].image}/>}
                        usernameLeft={test_profiles[0].username} 
                        reviewCountLeft={test_profiles[0].reviewCount} 
                        datePostedLeft={test_profiles[0].datePosted} 
                        // ---> Right Side     
                        badgesRight={<img alt="Predator Risk" style={{ maxWidth: "40px", width: "100%", height: "auto"}} src={test_profiles[0].badges}/>}
                        dangerRatingRight={<AppRatings ratingValue={test_profiles[0].dangerRating}/>}
                        commentsRight={test_profiles[0].comments}
                    />
                     <CommentGrid
                        // ---> Left Side
                        imageLeft={<img alt={test_profiles[1].username} style={{  justifyContent: "center", maxWidth: "40px", width: "100%", height: "auto"}} src={test_profiles[1].image}/>}
                        usernameLeft={test_profiles[1].username}
                        reviewCountLeft={test_profiles[1].reviewCount} 
                        datePostedLeft={test_profiles[1].datePosted}
                        // ---> Right Side     
                        badgesRight={<img alt="Cyberbullying" style={{ maxWidth: "40px", width: "100%", height: "auto"}} src={test_profiles[1].badges}/>}
                        dangerRatingRight={<AppRatings ratingValue={test_profiles[1].dangerRating}/>}
                        commentsRight={test_profiles[1].comments}
                    />
                </Wrapper>
               

            {/* <Footer/> */}
            </>
        )
    }
