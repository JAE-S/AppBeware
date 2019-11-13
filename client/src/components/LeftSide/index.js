import React from "react";
import Col from "react-materialize/lib/Col";
import Row from "react-materialize/lib/Row"
import "./style.css"

function LeftSide(props) {
    const leftSide =  {
        backgroundColor: "#D78618",
        width: "100%",
        height: "500px",
        marginTop: "5px",
        borderRadius: "10px",
        paddingRight: "0px", 
      }
      

return (
    <>
    <Row style={ leftSide }>
    <Col className="s5 l5 leftImage"> 
    
    </Col>
   
    <Col className="s5 l6 center-align"> 
        <Row>
           <h6>Who is my partner in crime?</h6>

           <h6>Click the correct minion to earn points.</h6> 

            <p>Don’t click more than once!</p>
        </Row>
        <Row className="rightSide">
            <h5>High Score: {props.highScore}</h5>
        </Row>
    </Col>

    </Row>
    </>
)
}

export default LeftSide; 