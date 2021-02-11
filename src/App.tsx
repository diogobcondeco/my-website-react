import React from 'react';
import './App.scss';
import Greeting from './components/Greeting/Greeting';

function App() {
    return (
        <div className="App">
            <div className="container content-box">
                <Greeting />
                <h2 className="subtitle">
                    I'm a Frontend Developer that loves to<span className="whiteSpace"> </span>
                    <a href="https://github.com/diogobcondeco" target="_blank" rel="noreferrer">
                        <span className="highlight">build</span><span className="whiteSpace"> </span>
                    </a>things.
                </h2>
                <p className="paragraph">
                    Very motivated about<span className="whiteSpace"> </span>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                        <span className="highlight">React</span><span className="whiteSpace"> </span>
                    </a>& admired with<span className="whiteSpace"> </span>
                    <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
                        <span className="highlight">Vue</span>
                    </a>.
                </p>
                <p className="paragraph">
                    Goals of becoming a Senior<span className="whiteSpace"> </span>
                    <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                        <span className="highlight">React</span><span className="whiteSpace"> </span>
                    </a>Developer & contribute to open-source projects.
                </p>
                <p className="paragraph">
                    Speaker of english, português & español.
                </p>
                <p className="paragraph">
                    Learning<span className="whiteSpace"> </span>
                    <a href="https://www.howtostudykorean.com/" target="_blank" rel="noreferrer">
                        <span className="highlight">한국어</span><span className="whiteSpace"> </span>
                    </a>& hopefully more languages soon.
                </p>
                <p className="paragraph">
                    You can follow on<span className="whiteSpace"> </span>
                    <a href="https://twitter.com/diogobcondeco" target="_blank" rel="noreferrer">
                        <span className="highlight">Twitter</span>
                    </a>,<span className="whiteSpace"> </span>
                    <a href="https://github.com/diogobcondeco" target="_blank" rel="noreferrer">
                        <span className="highlight">GitHub</span><span className="whiteSpace"> </span>
                    </a>&<span className="whiteSpace"> </span>
                    <a href="https://www.linkedin.com/in/diogobcondeco/" target="_blank" rel="noreferrer">
                        <span className="highlight">LinkedIn</span>
                    </a>.
                </p>
                <p className="paragraph">
                    <a href="mailto:diogobcondeco@gmail.com" className="highlight">↳ Talk to me.</a>
                </p>
            </div>
        </div>
    );
}

export default App;
