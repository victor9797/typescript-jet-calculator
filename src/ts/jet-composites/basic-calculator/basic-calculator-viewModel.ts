"use strict";

import * as ko from "knockout";
import componentStrings = require("ojL10n!./resources/nls/basic-calculator-strings");
import Context = require("ojs/ojcontext");
import Composite = require("ojs/ojcomposite");
import "ojs/ojknockout";
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojformlayout";
import "ojs/ojknockout";
import "ojs/ojselectsingle";
import "ojs/ojinputnumber";
import "ojs/ojbutton";

export default class ViewModel implements Composite.ViewModel<Composite.PropertiesType> {
    busyResolve: (() => void);
    composite: Element;
    messageText: ko.Observable<string>;
    properties: Composite.PropertiesType;
    res: { [key: string]: string };
    firstNumber: ko.Observable<number>;
    secondNumber: ko.Observable<number>;
    operation: ko.Observable<string>;
    result: ko.Observable<number>;
    operationsSDP: ko.Observable<any>;
    onCalculate: Function;
    _add: Function;
    _substract: Function;
    _multiply: Function;
    _divide: Function;

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

        let operations = [
        // Set up form options and values
            { value: "sum",       label: "Sum" },
            { value: "substract", label: "Substract" },
            { value: "divide",    label: "Divide" },
            { value: "multiply",  label: "Multiply" },
        ];

        this.operationsSDP = ko.observable(new ArrayDataProvider(operations, {
            keyAttributes: "value",
        }));


        this.onCalculate = (event:Event, model: object): void => {
            // Do operation
            switch(this.operation) {
                case ko.observable("sum"):
                    this.result = this._add(this.firstNumber, this.secondNumber)
                    break;

                case ko.observable("substract"):
                    this.result = this._substract(this.firstNumber, this.secondNumber)
                    break;

                case ko.observable("divide"):
                    this.result = this._divide(this.firstNumber, this.secondNumber)
                    break;

                case ko.observable("multiply"):
                    this.result = this._multiply(this.firstNumber, this.secondNumber)
                    break;
            }

            // Set value to response field
            var node: any = document.getElementById("result");
            var busyContext = Context.getContext(node).getBusyContext();

            busyContext.whenReady().then(function () {
                var node: any = document.getElementById("result");
                node.value = this.result
            });

            //Raise the custom event
            this.composite.dispatchEvent(new CustomEvent('onCalculate', {}));
        }

        this._add = (num1, num2) : ko.Observable<number> => {
            return ko.observable(num1 + num2)
        }

        this._substract = (num1, num2) : ko.Observable<number> => {
            return ko.observable(num1 - num2)
        }

        this._divide = (num1, num2) : ko.Observable<number> => {
            return ko.observable(num1 / num2)
        }

        this._multiply = (num1, num2) : ko.Observable<number> => {
            return ko.observable(num1 * num2)
        }

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