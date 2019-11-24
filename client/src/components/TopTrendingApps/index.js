import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Card, Box, Typography } from '@material-ui/core/';
import Skeleton from '@material-ui/lab/Skeleton';

import "./style.css"

// Import Media
// =========================================================

import CB_icon from "../../assets/images/shields/cyberbullying.png";
import DB_icon from "../../assets/images/shields/dangerous_behavior.png";
import PR_icon from "../../assets/images/shields/predator_risk.png";
// import SC_icon from "../assets/images/shields/sexual_content.png";
// import VC_icon from "../assets/images/shields/violent_content.png";


const data = [
  { logoUrl: "https://images-na.ssl-images-amazon.com/images/I/61S7YvhOwVL.png",
    name: "Burnbook",
    warnRatingAverage: 2.63,
    badges: CB_icon,
    createdAt: '2 hours ago',
  },
  { logoUrl: "https://is5-ssl.mzstatic.com/image/thumb/Purple113/v4/4a/60/3f/4a603f8b-56e2-eeb7-f25b-be00151e271b/source/1024x1024bb.jpg",
    name: "Holla",
    warnRatingAverage: 4.1,
    badges: PR_icon,
    createdAt: '1 hours ago',
  },

  { logoUrl: "https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/1b/5d/7a/1b5d7a8e-9c92-3d42-3118-97d3d6aa87e1/source/1024x1024bb.jpg",
    name: "TikTok",
    warnRatingAverage: 2.83,
    badges: DB_icon,
    createdAt: '8 hours ago',
  },

];

function Media(props) {
  const { loading = false } = props;

  return (
    <Grid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
     <Card style={{ maxWidth: "300px", width: "100%", margin: "10px", padding: "5px"}}>
        <Box key={index} style={{ margin: "0px!important"}}  marginRight={0.5} my={5}>
          {item ? (
               <Grid container wrap="wrap" spacing={2}>
             <Grid item xm={4}>
            <img className="trendImage" style={{ width: 80, height: 80, borderRadius: 16 }} alt={item.name} src={item.logoUrl} />
            </Grid>
            <Grid item xm={8}>
            <div>
            <Typography gutterBottom variant="body2">
              {item.name}
          </Typography>
          </div>
          <div>
          <Typography variant="caption" color="textSecondary">
                {`${"Last Updated: "} • ${item.createdAt}`}
          </Typography>
          </div>
          <div>
          <Typography variant="caption" color="textSecondary">
              <button>View App</button>
          </Typography>
          </div>
          </Grid>
          
          </Grid>
          ) : (
            <Skeleton variant="rect" width={80} height={80} />
          )}

          {item ? (
            <Box pr={2}>
             
              <Typography className="dangerRating" variant="body2" color="textSecondary">
                {`${"Danger Rating: " + item.warnRatingAverage}`}
              </Typography>

              <div>
                <img 
                  alt={item.name}
                  src={item.badges}
                  style={{ width: 40, height: 40 }}
                />
              </div>

            </Box>
          ) : (
            <Box pt={0.5}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          )}
        </Box>
        </Card>
      ))}
    </Grid>
  );
}

Media.propTypes = {
  loading: PropTypes.bool,
};

export default function YouTube() {
  return (
    <Box overflow="hidden">
      {/* <Media loading /> */}
      <Media />
    </Box>
  );
}