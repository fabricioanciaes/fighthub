import React, {Component} from 'react';
import styled from 'styled-components';

const Container = styled.div`
    grid-column-start: 1;
    grid-column-end: -1;
    width: 100%;
    margin-bottom: ${props => props.theme.sm};
`

const Title = styled.h2`
    color: ${props => props.theme.text};
    font-size:${props => props.theme.xl};
    margin-bottom: ${props => props.theme.sm};
`

const Stroke = styled.div`
    width:100%;
    border-bottom: 0.1rem solid rgba(255,255,255,0.1);
`

export default function Loader(props) {
    return (
        <Container>
            <Title>{props.children}</Title>
            <Stroke/>
        </Container>
    )
}