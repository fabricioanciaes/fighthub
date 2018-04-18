import React, { Component } from "react";
import styled, { css } from 'styled-components';
import moment from 'moment';
import pt from 'moment/locale/pt';

const CardStyle = styled.div`
  background-color: ${props => props.theme.backgroundLight};
  color: ${props => props.theme.text};
  width: 100%;
  box-shadow: ${props => props.theme.shadow};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: no-wrap;
  overflow: hidden;

  ${props => props.today && css `
    background-color: ${props => props.theme.backgroundToday};
  `}

  ${props => props.happening && css `
    background-color: ${props => props.theme.backgroundHappening};
  `}
`;

const Title = styled.div`
    padding: ${props => props.theme.nm};
    background-color: rgba(255,255,255,0.02);
`;

const Content = styled.div`
  padding: ${props => props.theme.nm};
  flex-grow:1;
`;

const Actions = styled.div`
  padding: ${props => props.theme.nm};
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

const Dates = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: no-wrap;
  margin-right: ${props => props.theme.sm};
`;

const Date = styled.span`
    font-weight:500;
    text-transform: capitalize;
`;

const Interval = styled.span`
  color: rgba(255, 255, 255, 0.5);
  text-transform: capitalize;
`;

const Controls = styled.div`
    flex-grow:0;
    flex-shrink:0;
`;

const Button = styled.a`
  display: inline-block;
  text-decoration: none;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: solid 0.1rem white;
  margin-left: 0.25rem;

  ${props => props.twitch && css `
    background-color: ${props => props.theme.twitch};
    border-color: ${props => props.theme.twitch};
  `}
`;


export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount() {
        this.setState((props) => ({
            streamLink: this.props.event.description.match(/http(?:s)?:\/\/(?:www\.)?twitch\.tv\/([a-zA-Z0-9_]+)/gi),
            happening: moment().isBetween(this.props.event.start.dateTime, this.props.event.end.dateTime),
            today: moment().isSame(this.props.event.start.dateTime, 'day'),
            week: moment().isSame(this.props.event.start.dateTime, 'week'),
        }))
    }

    

    render() {
        return <CardStyle happening={this.state.happening} today={this.state.today} week={this.state.week}>
            <Title>
              <h2>{this.props.event.summary}</h2>
            </Title>
            <Content>
              <p>{this.props.event.location}</p>
            </Content>
            <Actions>
              <Dates>
                <Date>
                  {moment(this.props.event.start.dateTime).format('ddd, DD/MM/YYYY')}
                </Date>
                <Interval>
                  {this.state.happening ? 'Acaba ' + moment(this.props.event.end.dateTime).fromNow() : moment(this.props.event.start.dateTime).fromNow()}
                </Interval>
              </Dates>
              <Controls>
                {this.state.streamLink && <Button href={this.state.streamLink} twitch>Stream</Button>}
                
                <Button href={this.props.event.htmlLink}>Sobre</Button>
              </Controls>
            </Actions>
          </CardStyle>;
    }
}
