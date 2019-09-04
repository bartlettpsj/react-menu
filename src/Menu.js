import React, { useState, useRef } from "react";
import styled, { keyframes } from "react-emotion";
// import ReactDOM from "react-dom";
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

const slideIn = keyframes`
 from { left: -300px; }
 to { left: 0px;}
`;

const Container = styled('div')`
  height: 100%;
  width: 200px;
  background: white;
  padding-top: 1.5em;
  //padding: 1.5rem;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 2;  
  
  animation: ${slideIn} 0.3s ease;
  box-shadow-wmt: 0 1px 3px 0 rgba(0,0,0,.07),0 3px 13px 0 rgba(0,0,0,.16);    
  box-shadow: 4px 0 10px 0 rgba(0,0,0,.4);  
`;

const StyledItem = (props) => (
  <a {...props} href="/nothing" banana={'hello'}/>
)

// const Item = styled('a')`
const Item = styled(StyledItem)`
  line-height: 2.0em;
  //width: 100%;
  display: block;
  position: static;    
  //text-decoration: none;  

  &:hover {
    //font-weight: bold;
    //text-decoration: underline;    
  }
  
  &:hover > div {
    visibility: visible;
  }  
`;

const Menu = ({ categories, onClose, ...props }) => {

  const containerRef = useRef(null);
  const [myLeft, setMyLeft] = useState(0);
  const [myTop, setMyTop] = useState(0);

  // console.log(a,b);

  let key = 0;

  const logEvent = (e) => {
    console.log(`${e.type} Event client [${e.clientX},${e.clientY}] screen [${e.screenX}, ${e.screenY}]`);
  }

  const EnterHover = (e) => {
    // console.log('Enter Hover');
    // logEvent(e);

    // console.log('Child is: ', e.target.children[0]);
    const itemRect = e.target.getBoundingClientRect();
    // console.log('item rect', itemRect)

    // const node = ReactDOM
    //   .findDOMNode(containerRef.current);
    //
    // const rect = node.getBoundingClientRect();
    // console.log('wrapper rect', rect);
    setMyLeft(itemRect.left + e.target.offsetWidth + 'px');
    setMyTop(itemRect.top + 'px');
  }

  const LeaveHover = (e) => {
    // logEvent(e);
  }


  // const MouseOver = (e) => {
  //   logEvent(e);
  // }
  //
  // const MouseOut = (e) => {
  //   logEvent(e);
  // }

  // const clicky = (e) => {
  //   logEvent(e);
  // }

  const Wrapper = styled.div`
    position: absolute;
    visibility: hidden;
    background-color: white;        
    left: ${props => props.left};
    top: ${props => props.top};
`;

  return (

    <Backdrop>
      <Container>
        {_.times(20, () => categories.map(category => (
            <Item paul={123} key={++key}
                  onMouseEnter={EnterHover} onMouseLeave={LeaveHover}>{category.id}: {category.name}
              <Wrapper ref={containerRef} left={myLeft} top={myTop}>
                {category.children.map(sub => (
                  <Item {...props} key={++key}>
                    {sub.id}: {sub.name}
                  </Item>
                ))}
              </Wrapper>
            </Item>
        )))}
      </Container>
    </Backdrop>
  )
}

export default Menu;
