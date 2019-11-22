import React from "react";
import Wrapper from "../components/Wrapper"
import Nav from "../components/Nav"
import HeaderContainer from "../components/HeaderContainer"
import ABLogo from "../assets/images/AppBeware_icon_shadow.png"
import { Grid, Table, TableBody, TableCell, TableRow } from '@material-ui/core';



function About() {

    return (
        <>
        <Nav/>
        <HeaderContainer> 
            <Wrapper> 
            <Grid container spacing={8}>
                 <Grid item xs={12} sm={3}>
                 <div>
                    <img alt="AppBeware herologo" src={ABLogo} style={{ width: "110%"}}/>
                </div>
                </Grid>
               
                <Grid item xs={12} sm={9}>
                 
                 </Grid>
            </Grid>
            
            </Wrapper>
        </HeaderContainer>
<Wrapper>About AppBeware  <br/> <br/>

Badge Definitions<br/>
<br/>
About AppBeware<br/>
What is AppBeware<br/>
AppBeware is a crowdsourcing platform that empowers the community to raise awareness about the potential dangers of apps. Users can flag, rate and leave comments about apps that they are concerned about.  
<br/><br/>
Unlike other tools, the sole purpose of this app is to make parents aware of any potential dangers that they have found to be associated with a mobile app.  It will only list apps that have been flagged as potentially dangerous.  The content is by parents for parents. 
<br/>

The Problem<br/>
The rate of app popularity has grown exponentially over the years. 
There are too many apps for parents to keep track of. 
They types of dangers grow with the different types of apps..
Generic ratings found in app stores is not enough to help parents evaluate the safety of an app. 
There are very few relevant, current and credible sources to determine if apps could be potentially dangerous.
<br/><br/>

Cyberbullying<br/>
Harassment in the comments and parody videos being created to humiliate and tease some users, particularly users with disabilities. Bullying people from different religious or ethnic backgrounds, blackmail, extortion, public humiliation or harassment.
<br/><br/>
Dangerous Behaviors<br/>
Apps that promote self harm, suicide, eating disorders, choking games, dangerous challenges or other acts where serious injury or death may result.
<br/><br/>
Predator Risk<br/>
Some apps can expose children to predators through solicitation, sharing personal information, encouragement to meet in person, intent to engage in sexual activity, stalking or harm. 
<br/><br/>
Sexual Content<br/>
Apps that contain or promote sexual content, such as nudity, pornography, or any content or services intended to be sexually gratifying. 

Violence
Apps that depict or facilitate gratuitous violence or other dangerous activities against people or animals.  These include threats, gun violence, terroism, use, sale or depictions of explosives or firearms. <br/>

<br/>

</Wrapper>
        
        {/* <Footer/> */}
        </>
    )
}

export default About; 