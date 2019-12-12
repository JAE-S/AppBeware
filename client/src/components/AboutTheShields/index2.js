// Import React
// =========================================================
    import React, { Component } from 'react';
// Import Redux Components
// =========================================================
    import { connect } from "react-redux";
    import { viewAllShields } from "../../Store/Actions/shieldActions";
// Import Material UI Components
// =========================================================
    import { Table, TableBody, TableRow, TableCell } from '@material-ui/core/';
    import PropTypes from 'prop-types';
    import { makeStyles } from '@material-ui/core/styles';
    import AppBar from '@material-ui/core/AppBar';
    import Tabs from '@material-ui/core/Tabs';
    import Tab from '@material-ui/core/Tab';
    import Typography from '@material-ui/core/Typography';
    import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`wrapped-tabpanel-${index}`}
      aria-labelledby={`wrapped-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
    const icon = { 
        width: "100%",
        height: "auto"
    };

    function a11yProps(index) {
  return {
    id: `wrapped-tab-${index}`,
    'aria-controls': `wrapped-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabsWrappedLabel() {
  const classes = useStyles();
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="wrapped label tabs example">
          <Tab
            value="one"
            label="New Arrivals in the Longest Text of Nonfiction"
            wrapped
            {...a11yProps('one')}
          />
          <Tab value="two" label="Item Two" {...a11yProps('two')} />
          <Tab value="three" label="Item Three" {...a11yProps('three')} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index="one">
        Item One
      </TabPanel>
      <TabPanel value={value} index="two">
        Item Two
      </TabPanel>
      <TabPanel value={value} index="three">
        Item Three
      </TabPanel>
    </div>
  );
}


    function InfoTable(props) {
        return (
            <TableRow> 

                <TableCell> 
                    <img style={icon} alt={props.altTxt} src={ props.shieldIcon}/>
                </TableCell>

                <TableCell> 
                    <h3>{props.title}</h3>
                    <p>{props.description}</p> 
                </TableCell>

            </TableRow>
        )
    }

// Export About the Shields function
// =========================================================
    class AboutTheShields extends Component {
    
        render() {
            return (
                <>
                <Table>
                     <TableBody> 
                    <h3>Social Networking</h3>
                    Apps that connect people by means of text, voice, photo, or video. Apps that contribute to community development. 

                    <h3>Photo and video</h3>
                    Apps that assist in capturing, editing, managing, storing, or sharing photos and videos. 

                    <h3>Lifestyle</h3>
                    Apps relating to a general-interest subject matter or service. For example: real estate, crafts, hobbies, parenting, fashion, home improvement.

                    <h3>Games</h3>
                    Apps that provide single or multiplayer interactive activities for entertainment purposes. 

                    <h3>Entertainment</h3>
                    Apps that are interactive and designed to entertain and inform the user, and which contain audio, visual, or other content. 

                    <h3>Danger Ratings </h3>
                   Using a one to five danger rating system the AppBeware community can rate apps based on the potential danger, one being mildly dangerous up to five being the most dangerous.
                    </TableBody> 
                </Table>
                <Table>
                    <TableBody> 


                        {this.props.shields.map(shield => (
                            <InfoTable
                                key={shield.id}
                                shieldIcon={shield.icon}
                                altTxt={shield.altText}
                                title={shield.name}
                                description={shield.info}
                            /> 
                        ))}

                    </TableBody>
                </Table>
                </>
            )
        }
    }

const mapStateToProps = state => ({
    shields: state.shields.allShields
})

export default connect(mapStateToProps, 
    { 
        viewAllShields 
    }
)(AboutTheShields); 
