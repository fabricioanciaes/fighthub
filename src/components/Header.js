import React, { Component } from "react";
import styled from 'styled-components'

const TopBar = styled.div`
    background-color:${props => props.theme.backgroundLight};
    color: ${props => props.theme.text};
    text-align:center;
    padding: ${props => props.theme.xl};
    margin-bottom: ${props => props.theme.xl};
`

const StyledLink = styled.a`
    color: ${props => props.theme.backgroundToday};
`

export default function Header(props) {
    return (
        <TopBar>
            <h1>Fighthub</h1>
            <h4>Fique por dentro dos eventos da FGC</h4>
            <StyledLink href="http://bit.do/fighthub">http://bit.do/fighthub</StyledLink>
        </TopBar>
    )
}