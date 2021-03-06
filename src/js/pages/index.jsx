require('css/pages/index.css');

import ReactDom from 'react-dom';

import App from 'modules/App.jsx';

import HotLoadSupport from 'containers/HotLoadSupport.jsx';
import ReduxSupport from 'containers/ReduxSupport.jsx';

require.ensure(['modules/test.js'], function(a) {
    console.log(a);
});

const Render = Component => {
    ReactDOM.render(
        <HotLoadSupport>
            <ReduxSupport>
                <Component />
            </ReduxSupport>
        </HotLoadSupport>,
        document.getElementById('app')
     );
}

Render(App);

if (module.hot) module.hot.accept('modules/App.jsx', () => Render(App));
