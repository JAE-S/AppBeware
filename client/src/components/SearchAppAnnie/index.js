// Import React & Node packages
// =========================================================
    import React from 'react';
    import Downshift from "downshift";
    // import PropTypes from 'prop-types';

// Import Material UI components
// =========================================================
//  import { NoSsr} from '@material-ui/core';
    import {  Input, Grid, Button } from '@material-ui/core';

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
const items = [
  { label: '9GAG', id: 1},
  { label: 'ASKfm', id: 2},
  { label: 'Badoo', id: 3},
  { label: 'Bigo Live', id: 4},
  { label: 'Blendr', id: 5},
  { label: 'Bumble', id: 6},
  { label: 'Burnbook', id: 7},
  { label: 'BYF'},
  { label: 'Chatous'},
  { label: 'Comvo'},
  { label: 'Cydia'},
  { label: 'Discord'},
  { label: 'Grindr'},
  { label: 'GroupME'},
  { label: 'Holla'},
  { label: 'Hot or Not'},
  { label: 'Houseparty'},
  { label: 'IMVU'},
  { label: 'Instagram'},
  { label: 'Jailbreak'},
  { label: 'Kik'},
  { label: 'Line'},
  { label: 'Lipsi'},
  { label: 'LiveME'},
  { label: 'MeetMe'},
  { label: 'Omegle'},
  { label: 'Periscope'},
  { label: 'Sarahah'},
  { label: 'Secret Calculator'},
  { label: 'Skout'},
  { label: 'Snapchat'},
  { label: 'Social Media Freedom'},
  { label: 'Tellonym'},
  { label: 'TikTok'},
  { label: 'Tinder'},
  { label: 'Tumblr'},
  { label: 'Twitch'},
  { label: 'Voxer'},
  { label: 'VSCO'},
  { label: 'WhatsApp'},
  { label: 'Whisper'},
  { label: 'Wishbone'},
  { label: 'YouNow'},
  { label: 'YouTube'},
  { label: 'Yubo'},
  { label: 'ZEPETO'}
];

// const components = {

//   NoOptionsMessage,

// };

const onChange = (selectedApp) => {
  alert(`View ${selectedApp.label}`)
}

class SearchAppAnnie extends React.Component {
  state = {};

  render() {
    const item = {
      id: 123,
      value:  'Snapchat'
    }
  
    return (
      <div className="root">
      <Wrapper >
       <h2 align="center"> Search for an app or see what's trending! </h2>
       
      <Downshift 
        onChange={onChange} 
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
          <div>
            <Input className="searchInput" {...getInputProps({ placeholder: "Search for an App" })} />
            {isOpen ? (
              <div className="downshift-dropdown">
                {
                   // filter the Apps and return items that match the inputValue
                  items
                  .filter(item => !inputValue || item.label.toLowerCase().includes(inputValue.toLowerCase()))
                  // map the return value and return a div
                  .map((item, index) => (
                    <Grid container 
                      className="dropdown-item"
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    
                      {...getItemProps({
                    
                        key: item.label,
                        index,
                        item
                      })}
                        style = {{
                          backgroundColor:
                          highlightedIndex === index ? "lightgray" : "white",
                          fontWeight: selectedItem === item ? "bold" : "normal",
                          zIndex: 3
                        }}
                    >
                    <Grid item xs={4}>
                      {item.label}
                    </Grid>
                    <Grid item xs={4}>
                      <div style={{ color: "#F7F7F7", backgroundColor: "grey"}}> Temporary Placeholder for shield icons</div>
                    </Grid>
                    <Grid item xs={4}>
                      <Button>View {item.label}</Button>
                      </Grid>
                    </Grid>
                  ))}
              </div>
             ) : null} 
           </div>
        )}
      </Downshift>
      </Wrapper>
      </div>
    );
  }
}

export default SearchAppAnnie; 