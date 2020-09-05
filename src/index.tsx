import React, { FunctionComponent } from "react";
import ReactDOM from "react-dom";
import { IconPicker } from './components/icon-picker';
// import './css/tailwind.css';
// import './css/main.css';
/// <reference path="node_modules/devextreme/dist/ts/dx.all.d.ts" />

import * as IconsOutline from './icons/outline/index';

const rootElement = document.getElementById("root");
if (rootElement) {

ReactDOM.render(
  <IconPicker className="test" />,
  rootElement
);




  // React.forwardRef((props, ref)) => (

  // );
}