"use strict";

import * as ko from "knockout";
import componentStrings = require("ojL10n!./resources/nls/basic-calculator-strings");
import Context = require("ojs/ojcontext");
import Composite = require("ojs/ojcomposite");
import "ojs/ojknockout";
import ArrayDataProvider = require("ojs/ojarraydataprovider");

export default class ViewModel implements Composite.ViewModel<Composite.PropertiesType> {
    busyResolve: (() => void);
    composite: Element;
    messageText: ko.Observable<string>;
    properties: Composite.PropertiesType;
    res: { [key: string]: string };

    constructor(context: Composite.ViewModelContext<Composite.PropertiesType>) {        
        //At the start of your viewModel constructor

        /** INIT CODE */
        const elementContext: Context = Context.getContext(context.element);
        const busyContext: Context.BusyContext = elementContext.getBusyContext();
        const options = {"description": "Web Component Startup - Waiting for data"};
        this.busyResolve = busyContext.addBusyState(options);

        this.composite = context.element;

        //Example observable
        this.messageText = ko.observable("Hello from basic-calculator");
        this.properties = context.properties;
        this.res = componentStrings["basic-calculator"];

        /** END OF INIT CODE */


        /** Custom code */
        this.firstNumber = ko.observable(0)
        this.secondNumber = ko.observable(0)
        this.operation = ko.observable('sum')
        this.result = ko.observable(0)

        // Parsing context properties
        if (context.properties.firstNumber) {
            this.firstNumber = context.properties.firstNumber
        }

        if (context.properties.secondNumber) {
            this.secondNumber = context.properties.secondNumber
        }

        if (context.properties.operation) {
            this.operation = context.properties.operation
        }

        // Set up form options and values
        this.operations = [
            { value: "sum",       label: "Sum" },
            { value: "substract", label: "Substract" },
            { value: "divide",    label: "Divide" },
            { value: "multiply",  label: "Multiply" },
        ]

        this.operationsSDP = new ArrayDataProvider(self.operations, {
            keyAttributes: "value",
        });



        /** Custom defined event */
        this.onCalculate = function (event) {

            // Do operation
            switch(self.operation) {
                case "sum":
                    self.result = self._add(self.firstNumber, self.secondNumber)
                    break;

                case "substract":
                    self.result = self._substract(self.firstNumber, self.secondNumber)
                    break;

                case "divide":
                    self.result = self._divide(self.firstNumber, self.secondNumber)
                    break;

                case "multiply":
                    self.result = self._multiply(self.firstNumber, self.secondNumber)
                    break;
            }

            // Set value to response field
            var node = document.getElementById("result");
            var busyContext = oj.Context.getContext(node).getBusyContext();

            busyContext.whenReady().then(function () {
                var node = document.getElementById("result");
                node.value = self.result
            });

            //Raise the custom event
            self.composite.dispatchEvent(new CustomEvent('onCalculate', {}));
        };



        // Example for parsing context properties
        // if (context.properties.name) {
        //     parse the context properties here
        // }

        //Once all startup and async activities have finished, relocate if there are any async activities
        this.busyResolve(); 
    }

    //Lifecycle methods - implement if necessary 

    activated(context: Composite.ViewModelContext<Composite.PropertiesType>): Promise<any> | void {
    
    };

    connected(context: Composite.ViewModelContext<Composite.PropertiesType>): void {
    
    };

    bindingsApplied(context: Composite.ViewModelContext<Composite.PropertiesType>): void {
    
    };

    propertyChanged(context: Composite.PropertyChangedContext<Composite.PropertiesType>): void {
    
    };

    disconnected(element: Element): void {
    
    };
};