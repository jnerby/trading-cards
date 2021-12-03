'use strict';

function About(){
    return (
        <div>
            <p><a href="https://github.com/jnerby">Jen</a></p>
            <p><a href="https://github.com/shradhalad">Shradha</a></p>
            <p><a href="/">Home</a></p>
        </div>
    );
}


ReactDOM.render(<About />, document.querySelector('#about'));