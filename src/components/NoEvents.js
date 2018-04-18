import React, {Component} from 'react';
import styled from 'styled-components';
const Container = styled.div`
    justify-self: center;
    text-align:center;

    grid-column-start: 1;
    grid-column-end: -1;
    width:100%;

    background-color: rgba(0,0,0,0.2);
    padding: ${props => props.theme.xl};
    border-radius: ${props => props.theme.borderRadius};
`
const Title = styled.div`
    color: ${props => props.theme.text};
    font-size: 1.6rem;
`


export default function Loader(props) {
    return (
        <Container>
            <Title>{props.children}</Title>
        </Container>
    )
}