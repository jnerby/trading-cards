'use strict';

function Homepage() {
  return (
  <div>
    <p>Welcome to Balloonicorn's Trading Card Site!</p>
    <p><a href="/cards">View Cards</a></p>
    <p><a href="/about">About the Author</a></p>
    <p><img src="/static/img/balloonicorn.jpg" /></p>
  </div>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
