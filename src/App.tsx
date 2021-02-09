import React from 'react';
import './App.scss';
import Greeting from './components/Greeting/Greeting';

function App() {
    return (
        <div className="App">
            <div className="container content-box">
                <Greeting />
                <h2 className="subtitle">
                    I'm Diogo, a Front End Developer that loves to<span className="whiteSpace"> </span>
                    <a href="https://github.com/diogobcondeco" target="_blank" rel="noreferrer">
                        <span className="content">build</span>
                    </a><span className="whiteSpace"> </span>things.
                </h2>
                <p className="paragraph">
                    Passionate about<span className="whiteSpace"> </span>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                        <span className="content">React</span>
                    </a><span className="whiteSpace"> </span>&<span className="whiteSpace"> </span>
                    <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                        <span className="content">Vue</span>
                    </a>.
                </p>
                <p className="paragraph">
                    Goals of mastering<span className="whiteSpace"> </span>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                        <span className="content">React</span>
                    </a><span className="whiteSpace"> </span>& contributing to it.
                </p>
                <p className="paragraph">
                    Dreaming about traveling the 🌍 while 💻 remotely.
                </p>
                <p className="paragraph">
                    Lover of 🍔🍕🍣✈🚐.
                </p>
                <p className="paragraph">
                    You can follow on<span className="whiteSpace"> </span>
                    <a href="https://twitter.com/diogobcondeco" target="_blank" rel="noreferrer">
                        <span className="content">Twitter</span>
                    </a>,<span className="whiteSpace"> </span>
                    <a href="https://github.com/diogobcondeco" target="_blank" rel="noreferrer">
                        <span className="content">GitHub</span>
                    </a><span className="whiteSpace"> </span>&<span className="whiteSpace"> </span>
                    <a href="https://www.linkedin.com/in/diogobcondeco/" target="_blank" rel="noreferrer">
                        <span className="content">LinkedIn</span>
                    </a>.
                </p>
                <p className="paragraph">
                    <a href="mailto:diogobcondeco@gmail.com">↳ Talk to me.</a>
                </p>
            </div>
        </div>
    );
}

export default App;
