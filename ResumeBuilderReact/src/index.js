import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'assets/scss/material-kit-react.scss?v=1.7.0';

// route pages
import ResumeBuild from 'myComponents/ResumeBuild.jsx';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route path='/' component={ResumeBuild} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
