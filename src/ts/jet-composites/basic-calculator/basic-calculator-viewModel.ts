"use strict";

import * as ko from "knockout";
import componentStrings = require("ojL10n!./resources/nls/basic-calculator-strings");
import Context = require("ojs/ojcontext");
import Composite = require("ojs/ojcomposite");
import ArrayDataProvider = require("ojs/ojarraydataprovider");
import "ojs/ojformlayout";
import "ojs/ojselectsingle";
import "ojs/ojinputtext";
import "ojs/ojinputnumber";
import "ojs/ojbutton";

export default class ViewModel implements Composite.ViewModel<Composite.PropertiesType> {
    busyResolve: (() => void);
    composite: Element;
   
    properties: Composite.PropertiesType;
    res: { [key: string]: string };
    firstNumber: string;
    secondNumber: string;
    operation: string;
    result: number;
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
        this.properties = context.properties;
        this.res = componentStrings["basic-calculator"];

        /** END OF INIT CODE */


        /** Custom code */
        this.firstNumber = '0'
        this.secondNumber = '0'
        this.operation = 'sum'
        this.result = 0

        // Parsing context properties
        if (context.properties.firstnumber) {
            this.firstNumber = context.properties.firstnumber
        }

        if (context.properties.secondnumber) {
            this.secondNumber = context.properties.secondnumber
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
            let first = Number(this.firstNumber)
            let second = Number(this.secondNumber)
            switch(this.operation) {
                case "sum":
                    this.result = this._add(first, second)
                    break;

                case "substract":
                    this.result = this._substract(first, second)
                    break;

                case "divide":
                    this.result = this._divide(first, second)
                    break;

                case "multiply":
                    this.result = this._multiply(first, second)
                    break;
            }

            // Set value to response field
            let result = this.result
            
            var node: any = document.getElementById("result");
            var busyContext = Context.getContext(node).getBusyContext();

            busyContext.whenReady().then(function () {
                var node: any = document.getElementById("result");
                node.value = result
            });

            //Raise the custom event
            this.composite.dispatchEvent(new CustomEvent('onCalculate', {}));
        }

        this._add = (num1, num2) : number => {
            return num1 + num2
        }

        this._substract = (num1, num2) : number => {
            return num1 - num2
        }

        this._divide = (num1, num2) : number => {
            return num1 / num2
        }

        this._multiply = (num1, num2) : number => {
            return num1 * num2
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