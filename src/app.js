import React from 'react';
import {render} from 'react-dom';
import {
    BrowserRouter
} from 'react-router-dom'

import ApplicationWrapper from './js/components/ApplicationWrapper.js';
import 'bootstrap/dist/css/bootstrap.css';
import './style/appStyle.less';

render(
    <BrowserRouter>
        <ApplicationWrapper/>
    </BrowserRouter>,
    document.getElementById('root')
);