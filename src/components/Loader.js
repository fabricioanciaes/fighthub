import React, {Component} from 'react';
import styled, {keyframes} from 'styled-components';


const rotate360 = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const Loading = styled.div`
    display:block;
    margin: ${props => props.theme.nm} auto;
    height: 4rem;
    width: 4rem;
    animation: ${rotate360} 0.8s infinite linear;
    border: 0.3rem solid #fff;
    border-right-color: transparent;
    border-radius: 50%;
`



export default function Loader(props) {
    return (
        <Loading/>
    )
}