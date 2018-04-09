import {h, Component} from 'preact';
import style from './style.css';

export default (props) => {
    return (
        <a href={props.href} class={style.button}>{ props.children }</a>
    );
}