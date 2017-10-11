import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import {Provider} from "react-redux";
import {store} from "./stores/index";
import DevTools from "./DevTools";

ReactDOM.render(
    <Provider store={store}>
        <div>
            <App/>
            {/*{process.env.NODE_ENV=='development'&&<DevTools/>}*/}
        </div>
    </Provider>,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
