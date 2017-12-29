import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import { Root } from './components/Root';
import { Home } from './components/Todo/Home';
import { Create } from './components/Todo/Create';
import { Edit } from './components/Todo/Edit';

class TodoApp extends React.Component {

  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <Root>
          <Route path="/" exact component={Home} />
          <Route path="/create" exact component={Create} />
          <Route path="/edit/:_id" exact component={Edit} />
        </Root>
      </BrowserRouter>
    );
  }

}

render(<TodoApp/>, window.document.getElementById('app'))
