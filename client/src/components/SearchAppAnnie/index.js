// Import React 
// =========================================================
    import React from 'react';
// Import Node Packages
// =========================================================
    import Select from 'react-select';
    // import PropTypes from 'prop-types';
// Import Material UI styles
// =========================================================
    import { emphasize, makeStyles, useTheme } from '@material-ui/core/styles';
// Import Material UI components
// =========================================================
    import { NoSsr} from '@material-ui/core';
    // import {  Typography, Button, NoSsr, TextField } from '@material-ui/core';

// Import Material UI Icons
// =========================================================
    // import MenuItem from '@material-ui/core/MenuItem';
    // import CancelIcon from '@material-ui/icons/Cancel';
// Custom Components
// =========================================================
  import Wrapper from "../Wrapper"
// Import CSS
// =========================================================
    import "./style.css"


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    paddingTop: 30,
    zIndex: 3,
    position: "relative", 
    backgroundColor: "#F7C533",
    // height: 250,
    width: "100%",
  },
  input: {
    display: 'flex',
    height: 'auto',
    backgroundColor: "#F7f7f7",
    borderRadius: "14px",
    padding: "10px 20px!important" 
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700],
      0.08,
    ),
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    bottom: 6,
    fontSize: 16,
    padding: "10px 20px!important" 
  },
  paper: {
    position: 'absolute',
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  divider: {
    padding: "10px 20px!important",
    height: 50,
  },
}));

// function NoOptionsMessage(props) {
//   return (
//     <>
//     <Typography
//       color="textSecondary"
//       className={props.selectProps.classes.noOptionsMessage}
//       {...props.innerProps}
//     >
//       {props.children}
//     </Typography>
//     <Button>button {props.alertTeam}</Button>
//     </>
//   );
// }

// NoOptionsMessage.propTypes = {
//   // The children to be rendered.
//   children: PropTypes.node,
//    // Props to be passed on to the wrapper.
//   innerProps: PropTypes.object.isRequired,
//   selectProps: PropTypes.object.isRequired,
// };

// function inputComponent({ inputRef, ...props }) {
//   return <div ref={inputRef} {...props} />;
// }

// inputComponent.propTypes = {
//   inputRef: PropTypes.oneOfType([
//     PropTypes.func,
//     PropTypes.shape({
//       current: PropTypes.any.isRequired,
//     }),
//   ]),
// };

// function Control(props) {
//   const {
//     children,
//     innerProps,
//     innerRef,
//     selectProps: { classes, TextFieldProps },
//   } = props;

//   return (
//     <TextField
//       fullWidth
//       InputProps={{
//         inputComponent,
//         inputProps: {
//           className: classes.input,
//           ref: innerRef,
//           children,
//           ...innerProps,
//         },
//       }}
//       {...TextFieldProps}
//     />
//   );
// }

// Control.propTypes = {
//   // Children to render.
//   children: PropTypes.node,
//   // The mouse down event and the innerRef to pass down to the controller element.
//   innerProps: PropTypes.shape({
//     onMouseDown: PropTypes.func.isRequired,
//   }).isRequired,
//   innerRef: PropTypes.oneOfType([
//     PropTypes.oneOf([null]),
//     PropTypes.func,
//     PropTypes.shape({
//       current: PropTypes.any.isRequired,
//     }),
//   ]).isRequired,
//   selectProps: PropTypes.object.isRequired,
// };

// function Option(props) {
//   return (
//     <>
//     {/* {suggestions.map((suggestion, i) => ( */}
 
//     <MenuItem 
//       ref={props.innerRef}
//       selected={props.isFocused}
//       component="div"
//       style={{
//         fontWeight: props.isSelected ? 500 : 400,
//       }}
//       {...props.innerProps}
//     >
//       {props.children}
//       <p>{props.shiledCount}</p>
//       {/* <Button>{suggestion.label}</Button> */}
//       <Button>Add app </Button>
//     </MenuItem>
//      {/* ))} */}
//      </>
//   );
  
// }

// Option.propTypes = {
//   // The children to be rendered.
//   children: PropTypes.node,
//    // props passed to the wrapping element for the group.
//   innerProps: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     key: PropTypes.string.isRequired,
//     onClick: PropTypes.func.isRequired,
//     onMouseMove: PropTypes.func.isRequired,
//     onMouseOver: PropTypes.func.isRequired,
//     tabIndex: PropTypes.number.isRequired,
//   }).isRequired,

//    // Inner ref to DOM Node
//   innerRef: PropTypes.oneOfType([
//     PropTypes.oneOf([null]),
//     PropTypes.func,
//     PropTypes.shape({
//       current: PropTypes.any.isRequired,
//     }),
//   ]).isRequired,

//    // Whether the option is focused.
//   isFocused: PropTypes.bool.isRequired,
//    // Whether the option is selected.
//   isSelected: PropTypes.bool.isRequired,
// };

// function Placeholder(props) {
//   const { selectProps, innerProps = {}, children } = props;
//   return (
//     <Typography color="textSecondary" className={selectProps.classes.placeholder} {...innerProps}>
//       {children}
//     </Typography>
//   );
// }

// Placeholder.propTypes = {

//    // The children to be rendered.
//   children: PropTypes.node,
 
//    // props passed to the wrapping element for the group.
//   innerProps: PropTypes.object,
//   selectProps: PropTypes.object.isRequired,
// };

// function SingleValue(props) {
//   return (
//     <Typography className={props.selectProps.classes.singleValue} {...props.innerProps}>
//      {props.children}
//     </Typography>
//   );
// }

// SingleValue.propTypes = {
//   // The children to be rendered.
//   children: PropTypes.node,
// // Props passed to the wrapping element for the group.
//   innerProps: PropTypes.any.isRequired,
//   selectProps: PropTypes.object.isRequired,
// };

// function ValueContainer(props) {
//   return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
// }

// ValueContainer.propTypes = {
//   // The children to be rendered.
//   children: PropTypes.node,
//   selectProps: PropTypes.object.isRequired,
// };

// const components = {
//   Control,
//   NoOptionsMessage,
//   Option,
//   Placeholder,
//   SingleValue,
//   ValueContainer,
// };


// const CustomOption = props => {
//   const { data, innerRef, innerProps } = props;
//   return data.custom ? (
//     <div ref={innerRef} {...innerProps}>
//       I'm a custom link
//     </div>
//   ) : (
//     <components.Option {...props} />
//   );
// };

// const options = [
//   { value: "chocolate", label: "Chocolate" },
//   { value: "strawberry", label: "Strawberry" },
//   { value: "vanilla", label: "Vanilla" },
//   { custom: true }
// ];

// function App() {
//   return <Select components={{ Option: CustomOption }} options={options} />;
// }


export default function SearchAppAnnie(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [single, setSingle] = React.useState(null);

  const handleChangeSingle = value => {
    setSingle(value);
  };


  // const viewAllApps = () => {
  //   console.log("You clicked me!");
  //   API.getListedApps()
  //     .then(function(response) {
  //       console.log("I'm back");
  //       console.log(response.data);
  //     });
  // };

  // const viewAppNames = () => {
  //   console.log("Looking for app names in alphabetical order");
  //   API.getAppNames()
  //     .then(function(response) {
  //       console.log("I'm back");
  //       console.log(response.data);
  //     })
  // };

  const selectStyles = {
    input: base => ({
      ...base,
      color: theme.palette.text.primary,
      '& input': {
        font: 'inherit',
      },
    }),
  };

  return (
    <div >
    <Wrapper className={classes.root}>
      <h2 align="center"> Search for an app or see what's trending! </h2>
      <NoSsr>
        <Select
          classes={classes}
          styles={selectStyles}
          inputId="react-select-single"
          TextFieldProps={{
            InputLabelProps: {
              htmlFor: 'react-select-single',
              shrink: true,
            },
          }}
          placeholder="Snapchat"
          options={props.title}
          // components={components}
         
          // value={single}
          onChange={handleChangeSingle}
        >
        {props.children}
        </Select>
         
       <div className={classes.divider} />
      </NoSsr>
      {/* <div> */}
         {/* {this.props.appNames.map(dog => (
              <div 
                  key={dog.id}
                  title={dog.label}
                  dogId={dog.id}
                  // viewCategory={this.viewCategory}
              />
          )
              )} */}
        
      {/* <Button onClick={viewAllApps}>View All Apps </Button> */}
      {/* <Button onClick={viewAppNames}>View App Names Only </Button> */}
      </Wrapper>
    </div>
    
  );
}
