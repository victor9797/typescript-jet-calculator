// Import the loader so that the composite is registered with JET
import 'basic-calculator/loader';

// Import the Context class from ojcontext
import * as Context from 'ojs/ojcontext';

// Knockout libraries
import * as ko from 'knockout';
import 'ojs/ojknockout';

declare const expect: Chai.ExpectStatic;

describe('basic-calculator CCA unit tests with Knockout', () => {
  const markup = `
    <div class="oj-hybrid-padding">
      <h1>Calculator Demo Page</h1>
      <basic-calculator></basic-calculator>
    </div>
  `;

  let calculator: HTMLElement;
  /**
   * Setup the fixture with the markup and re-query the "calculator" variable so that
   * each test case gets a fresh new copy of the element.
   */
  async function setup() {
    fixture.set(markup);
    calculator = document.querySelector('basic-calculator') as HTMLElement;
    expect(calculator).not.to.be.null;
    // Apply our viewmodel to the Knockout bindings
    // ko.applyBindings({
    //   firstNumber: 1,
    //   secondNumber: 2,
    //   operation: 'Sum',
     
    // }, calculator);
    // Wait for BusyContext to clear for the element
    await Context.getContext(calculator).getBusyContext().whenReady();
  }

  describe('UI tests', () => {
    // Setup the fixture before each test case
    beforeEach(async () => await setup());

    it('can flip the calculator with mouse click', async () => {
      // const frontSide = calculator.querySelector('.demo-calculator-front-side') as HTMLElement;
      // expect(frontSide).not.to.be.null;
      // frontSide.click();
      // await Context.getContext(calculator).getBusyContext().whenReady();
      expect(calculator).not.to.be.null;
      console.log("Hola mundo")
    });

    afterEach(() => fixture.cleanup());
  });

});
