import { h } from 'preact';
import { storiesOf, action } from '@storybook/react';
import Header from '../components/Header'; // preact component

storiesOf("Header", module)
.add("render some text", () => <Header></Header>)