import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

export default function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>Neurodata NOMADS Webpage</h1>
      <Interactive
        as="a"
        href="https://github.com/neurodata-nomads"
        style={s.repoLink}
        {...s.link}
      >https://github.com/neurodata-nomads</Interactive>

      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/example" component={ExampleComponent} />
        <Route component={PageNotFound} />
      </Switch>

      <div style={s.creditLine}>
      <Interactive
        as="a"
        href="http://www.neurodata.io"
        interactiveChild
        focus={{}}
        touchActive={{}}
        touchActiveTapOnly
      >
          Branch of <span {...s.childLink}>neurodata.io</span>
        </Interactive>
      </div>
    </div>
  );
}
