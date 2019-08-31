import React, { Fragment } from "react";
import styled, { css } from "react-emotion";
// import { Link } from "react-dom";
import _ from 'lodash';

const Backdrop = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  z-index: 1;
`;

const Container = styled('div')`
  //position: relative;
  height: 100%;
  width: 200px;
  background: white;
  padding-top: 1.5em;
  //padding: 1.5rem;
  overflow-y: auto;
  z-index: 2;  
  //left: 500px;
  //position: absolute;  
`;

const Item = styled('a')`
  line-height: 2.0em;
  //width: 100%;
  display: block;  

  &:hover {
    font-weight: bold;
  }
  
  &:hover + div {
    display: block;
  }  

  
`;

const dynamicStyle = props =>
  css`
    color: ${props.color};
    background-color: green;
  `;

const SubContainer = styled('div')`
  display: none;
  position: absolute;
  //left: 200px;
  left: 50%;
  top: 0;
  //padding: 1rem;
  background: white;
  //max-height: 700px;
  //width: 75%;
  //display: flex;
  //flex-flow: column wrap;
  z-index: 3;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  
  ${dynamicStyle}  
`;

const Menu = ({categories, onClose,  ...props }) => {

  // console.log(a,b);

  let key = 0;

  const logEvent = (e) => {
    console.log(`${e.type} Event client [${e.clientX},${e.clientY}] screen [${e.screenX}, ${e.screenY}]`);
  }

  const EnterHover = (e) => {
    logEvent(e);

    // Need to reposition div child based on this
    //How do we find the child
    // How do we change the css for that child using react
  }

  const LeaveHover = (e) => {
    logEvent(e);
  }


  const MouseOver = (e) => {
    logEvent(e);
  }

  const MouseOut = (e) => {
    logEvent(e);
  }

  const clicky = (e) => {
    logEvent(e);
  }

  const mover = (e) => {
    logEvent(e);
  }


  return (
    <Backdrop>
      <Container>
        {_.times(20, () => categories.map(category => (
          <Fragment>
            <Item key={++key} onClick={clicky} onMouseOver={MouseOver} onMouseOut={MouseOut} onMouseEnter={EnterHover} onMouseLeave={LeaveHover}>{category.id}: {category.name}</Item>
            <SubContainer>
            {category.children.map(sub => (
                <Item key={++key} onMouseOver={MouseOver} onMouseOut={MouseOut} onMouseEnter={EnterHover} onMouseLeave={LeaveHover}>{sub.id}: {sub.name}</Item>
            ))}
            </SubContainer>
          </Fragment>
        )))}
      </Container>
    </Backdrop>
  )
}

export default Menu;
