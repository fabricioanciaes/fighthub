import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Card from './Card';
import Loader from './Loader';
import moment from 'moment';
import Divider from './Divider';
import NoEvents from './NoEvents';

const slideIn = keyframes`
  0% {
    transform: translateY(5rem);
    opacity:0;
  }

  100% {
    transform: translateY(0%);
    opacity:1;
  }
`;

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    grid-gap: 1rem;
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    padding: 1rem;
    justify-items: center;
    animation-name: ${slideIn};
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(.55,0,.1,1);
`;

const Error = styled.div`
    background-color:tomato;
    padding: ${props => props.theme.xl};
    color: ${props => props.theme.text};
    box-shadow: ${props => props.theme.shadow};
    max-width:40rem;
    border-radius: ${props => props.theme.borderRadius}
    margin-left: auto;
    margin-right: auto;
    margin-top: ${props => props.theme.xl};
    text-align:center;
`

const WarningIcon = styled.span`
    font-size:3rem;
    margin:0;
`


export default class EventWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            requestFailed: false,
        }
    }

    componentDidMount() {
        fetch('https://fighthub-api-avlewkdaxq.now.sh')
          .then(response => {
            if (!response.ok) {
              throw Error('Erro ao conectar com o servidor')
            }

            return response
          })
          .then(data => data.json())
          .then(data => {
              this.setState({ eventData: data })
            }, () => {
              this.setState({ requestFailed: true })
            })
        
    }

    render() {
        if(this.state.requestFailed) return (
            <Error>
                <WarningIcon>⚠</WarningIcon>
                <h2>Algo de errado não está certo...</h2>
                <p>Não foi possível conectar com o servidor</p>
            </Error>
        )
        if(!this.state.eventData) return <Loader/>

        const thisWeek = this.state.eventData.items.filter(event => {
            return moment().isSame(event.start.dateTime, 'week')
        })

        const notThisWeek = this.state.eventData.items.filter(event => {
            return !moment().isSame(event.start.dateTime, 'week')
        })
        
        return (
            
            <div>
            
                <Wrapper>
                    <Divider>Esta Semana</Divider>
                    {thisWeek.length > 0 ?
                    thisWeek.map(event => {
                        return <Card event={event}/>
                    })
                    : <NoEvents>Não há eventos nesta Semana</NoEvents>
                    }
                </Wrapper>
            
            {notThisWeek.length > 0 &&
                <Wrapper>
                    <Divider>Outros Eventos</Divider>
                    {notThisWeek.map(event => {
                        return <Card event={event}/>
                    })}
                </Wrapper>
            }
            
            </div>
        )
    }
}