import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';
import {Home, OtherPage, LastPage} from 'react-router-dom';

const Page1 = () => {
  return <div>This is the first page. It is grand.</div>
}


ReactDOM.render(
  <div>
    <nav>
      <Link to="/">First</Link>
    </nav>
  </div>
  document.getElementById('root')
);
