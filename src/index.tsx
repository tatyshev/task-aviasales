import '@/styles/index.scss';
import 'normalize.css';

import Application from '@/components/Application';
import React from 'react';
import { render } from 'react-dom';
import 'whatwg-fetch';

render(<Application />, document.getElementById('app'));
