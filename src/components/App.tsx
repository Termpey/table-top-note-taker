import React, { Component } from 'react';

import { MainPage } from './main-page/main-page';

import './App.scss';

export class App extends Component{
    render(): React.ReactNode {
        return <MainPage/>
    }
}