import {h, Component} from 'preact';
import style from './style.css';

export default () => {
    return (
        <div>
            <div class={style.card}>
                <div class={style.title}>
                    <h2>Stun City Mondays: Non-Capcom ayy</h2>
                </div>
                <div class={style.content}>
                    <span>MELTDOWN eSports Bar Toronto, 686 College St, Toronto, ON M6G 1C1, Canadá</span>
                </div>
                <div class={style.actions}></div>
            </div>
        </div>
    );
}