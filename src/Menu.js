import React, { Fragment, useState } from "react";
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

const MyItem = (props) => (
  <a {...props} banana={'hello'}/>
)

// const Item = styled('a')`
const Item = styled(MyItem)`
  line-height: 2.0em;
  //width: 100%;
  display: block;  

  &:hover {
    font-weight: bold;
  }
  
  &:hover > div {
    //display: block;
    //border: blue 4px solid;
    visibility: visible;
  }  
`;

const MyStyledSubItem = styled(Item)`
  background-color: hotpink;
  color: ${props => props.color};
  //visibility: ${props => props.visibility};    
`;

const MySubItem = (props) => (
  <MyStyledSubItem {...props}/>
)

const MyStyledStyledSubItem = styled(MyStyledSubItem)`
  color: green;
`

const MyStyledMySubItem = styled(MySubItem)`
  color: blanchedalmond;
`

// const dynamicStyle = props =>
//   css`
//     color: ${props.color};
//     background-color: green;
//   `;

const calcLeft = (left) => {
  return left+100 + 'px';
}

const calcTop = (top) => {
  return '100px';
}
const StyledSubContainer = styled('div')`
  visibility: ${props => props.visibility};    
  //display: none;
  position: absolute;
  left: ${props => calcLeft(props.left)};
  //left: 50%;
  top: ${props => calcTop(props.top)};
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
 `;
//${dynamicStyle}

const SubContainer = (props) => {
  return <StyledSubContainer {...props} />
}

const Menu = ({ categories, onClose, ...props }) => {

  const [myColor, setMyColor] = useState('blue');

  // console.log(a,b);

  let key = 0;

  const logEvent = (e) => {
    console.log(`${e.type} Event client [${e.clientX},${e.clientY}] screen [${e.screenX}, ${e.screenY}]`);
  }

  const EnterHover = (e) => {
    logEvent(e);

    console.log('Child is: ', e.target.children[0]);

    const node = ReactDOM
      .findDOMNode();
      // .getBoundingClientRect(); //outputs <h3> coordinates

    // Need to reposition div child based on this
    //How do we find the child
    // How do we change the css for that child using react
    setColor();
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
    setColor();
  }

  const mover = (e) => {
    logEvent(e);
  }


  const H1 = styled.h1`
    font-size: 48px;
    color: ${props => props.color};
  `

  const setColor = () => {
    const num = Math.trunc(Math.random() * 2);
    setMyColor(num ? 'green' : 'red')
  }

  const getColor = () => {
    const num = Math.trunc(Math.random() * 2);
    return num ? 'green' : 'red';
  }

  return (

    <Backdrop>
      <H1 color={myColor}>Stuff here</H1>
      <Container>
        {_.times(20, () => categories.map(category => (
          <Fragment>
            <Item paul={123} key={++key} onClick={clicky} onMouseOver={MouseOver} onMouseOut={MouseOut}
                  onMouseEnter={EnterHover} onMouseLeave={LeaveHover}>{category.id}: {category.name}
              <SubContainer visibility={'hidden'} {...props} left={600}>
                {category.children.map(sub => (
                  <MySubItem {...props} key={++key} color={'blue'}
                                     onMouseOver={MouseOver}
                                     onMouseOut={MouseOut}
                                     onMouseEnter={EnterHover}
                                     onMouseLeave={LeaveHover}>
                    {sub.id}: {sub.name}
                  </MySubItem>
                ))}
              </SubContainer>
            </Item>
          </Fragment>
        )))}
      </Container>
    </Backdrop>
  )
}

export default Menu;
