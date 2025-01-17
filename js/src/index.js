import JupyterReact from 'jupyter-react-js';
import components from './components';

function load_ipython_extension () {
  let comm_channel = "react.jupyter.test";
  requirejs([
    "base/js/namespace",
    "base/js/events",
  ], function( Jupyter, events ) {
    JupyterReact.init( Jupyter, events, comm_channel, { components, save: false } );
  });
}

module.exports = {
  load_ipython_extension: load_ipython_extension
};
