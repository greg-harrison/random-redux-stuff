import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { h } from 'react-hyperscript'
import counterApp from './store/reducers/index'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counterApp)

class Application extends Component {
    render() {
        return (
            h(Provider, {
                store: store
            }, [
                    h(App)
                ])
        )
    }
}

ReactDOM.render(
    <Application></Application>
    , document.getElementById('root'));
registerServiceWorker();
