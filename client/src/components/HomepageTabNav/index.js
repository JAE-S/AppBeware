// Import React & Node Packages
// =========================================================
  import React from 'react';
  import PropTypes from 'prop-types';
// Import Material UI Styles
// =========================================================
  import { makeStyles, withStyles } from '@material-ui/core/styles';
// Import Material UI Components 
// =========================================================
  import { Tabs, Box, Typography, Tab }from '@material-ui/core/';
// Import Custom Components 
// =========================================================
  import AppBar from '@material-ui/core/AppBar';
  // import CategoryCards from "../CategoryCards"
  import TopTrendingApps from "../TopTrendingApps"
// Import Styles
// =========================================================
  import "./style.css"

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`nav-tabpanel-${index}`}
        aria-labelledby={`nav-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `nav-tab-${index}`,
      'aria-controls': `nav-tabpanel-${index}`,
    };
  }

  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={event => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      marginTop: "10px",
    },
    navTitle: {
      margin: "0px!important",
      color: "#13BAC7",
    }
  }));

  const StyledTabs = withStyles(theme => ({
    indicator: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "transparent",
      "& > div": {
        width: "100%",
        backgroundColor: "#13BAC7",
      }
    }
  }))(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

// Export Default function NavTabs
// =========================================================
  export default function NavTabs(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className={classes.root}>
        <AppBar id="TabNavs" position="static">
          <StyledTabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label={<h3 className={classes.navTitle}>Trending</h3>} href="#trending" {...a11yProps(0)} />
            <LinkTab label={<h3 className={classes.navTitle}>categories</h3>} href="#categories" {...a11yProps(1)} />
          </StyledTabs>
        </AppBar>
        <TabPanel id="trending" value={value} index={0}>
          <TopTrendingApps />
        </TabPanel>
        <TabPanel id="categories" value={value} index={1} {...props}>
            {props.children}
        </TabPanel>
      </div>
    );
  }

