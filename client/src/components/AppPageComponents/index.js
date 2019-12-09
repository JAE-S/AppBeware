// Import React
// =========================================================
    import React from "react"; 
// Import Material UI components 
// =========================================================
    import { Grid, Typography, Button, Table, TableBody, TableRow, TableCell }from '@material-ui/core/';
// Import Custom Components
// =========================================================
    import HoverShieldInfo from "../HoverShieldInfo"  
    import LinearProgressBar from "../Ratings/progess"
    
// Custom Styles 
// =========================================================
    import "../../assets/styling/appStyle.css"
    
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
                
                            <h4>Comments</h4> 
                            {props.commentsRight}
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
// Export HeaderContainer
// =========================================================
    export function HeaderContainer(props) {
   
        return (
      
            <div className="header"> 
                <Grid container spacing={4}>
        
                    <Grid align="center" item xs={12} sm={3}>
                        <img 
                            alt={props.title}
                            src={props.icon} 
                            style={{ width: "100%", height: "auto", borderRadius: 16 }} />
                    </Grid> 
                    <Grid item xs={12}  sm={9}>
                        <h1 style={{ borderBottom: "1px solid grey", marginRight: "20px"}}>
                        {props.title}
                        {/* {<AddAlert style={{ paddingLeft: 20}} />} */}
                        </h1>
                        <p>{props.description}</p>
                        <Button href={props.link} target="_blank">
                            <Typography variant="caption" color="textSecondary">
                                View in app store
                            </Typography>
                        </Button>
                    </Grid> 
            
                </Grid>
            </div>
       )
    }
// Export DangerRatings
// =========================================================
    export function DangerRatings(props) {
        return (
            <SmallGrid 
            
                smallGirdLeft={
                    // This pulls in the danger rating info not the badges - the badge information is in the function below
                    <HoverShieldInfo
                        badgeInfo={props.info}
                        badgeName={
                            <img 
                                alt={props.name} 
                                src={props.ratingIcon}
                                style={{ justifyContent: "center", Width: "40px", height: "40px"}} 
                            />
                        }
                    />
                }
                smallGirdRight={
                    <LinearProgressBar
                        ratingScale={props.ratingScale} 
                        reviewCount={props.reviewCount}
                        style={{height: 10}} 
                    />
            
                }
            />
        )
    }
// Export ShieldRatings
// =========================================================
    export function ShieldRatings(props) {
        return (
          
            <SmallGrid 
                smallGirdLeft={
                    <HoverShieldInfo
                        badgeInfo={props.info}
                        badgeName={
                            <img 
                                alt={props.title} 
                                src={props.shieldIcon}
                                style={{justifyContent: "center", Width: "40px", height: "40px"}} 
                            />
                        }
                    />
                }
                smallGirdRight={
                    <LinearProgressBar
                        ratingScale={props.ratingScale} 
                        reviewCount={props.reviewCount}
                        style={{height: 10}} 
                    />
            
                }
            />
        
        )
    }
    