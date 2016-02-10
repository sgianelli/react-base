import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router';

import routes from './router.jsx';

// Check user agent string so we don't run on illegitimate browsers
import UAParser from 'ua-parser-js';

var parser = UAParser();
console.log(parser.browser.major);

if (parser.browser.name == 'IE' && parser.browser.major < 11) {
    alert("IE 10 and below are not currently supported")
}

//// Parse Support
// import Parse from 'parse';
// Parse.initialize('APP KEY', 'SECRET KEY');

render(<Router>{routes}</Router>, document.getElementById('app'));
