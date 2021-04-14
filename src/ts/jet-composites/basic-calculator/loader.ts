import Composite = require("ojs/ojcomposite");
import * as view from "text!./basic-calculator-view.html";
import viewModel from "./basic-calculator-viewModel";
import * as metadata from "text!./component.json";
import "css!./basic-calculator-styles";

Composite.register("basic-calculator", {
  view: view,
  viewModel: viewModel,
  metadata: JSON.parse(metadata)
});