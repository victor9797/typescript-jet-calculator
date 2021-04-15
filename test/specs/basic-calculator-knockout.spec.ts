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
    <div>
      <h1>Calculator Demo Page</h1>
        <basic-calculator 
          firstNumber="{{firstNumber}}"
          secondNumber="{{secondNumber}}"
          operation="{{operation}}">
        </basic-calculator>
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
    ko.applyBindings({
      firstNumber: 1,
      secondNumber: 2,
      operation: 'sum',
      result: 90
    }, calculator);
    // Wait for BusyContext to clear for the element
    await Context.getContext(calculator).getBusyContext().whenReady();
  }

  describe('UI tests', () => {
    // Setup the fixture before each test case
    beforeEach(async () => await setup());

    it('Calculator gets loaded', async () => {
      await Context.getContext(calculator).getBusyContext().whenReady();
      expect(calculator).not.to.be.null;
    });

    it('Sum works', async () => {
      const constButton = calculator.querySelector('#icon_button') as HTMLElement;
      //console.log(constButton)
      expect(constButton).not.to.be.null;
      constButton.click();

      await sleep(1000000);

      const result = calculator.querySelector('#result') as HTMLElement;
      //console.log(result)
      expect(result).not.to.be.null;
      console.log("Inner text", result.innerText);
      console.log("Text content", result.textContent);
      console.log("Value", result.getAttribute('value'));
      // await Context.getContext(constButton).getBusyContext().whenReady();
    });

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    afterEach(() => fixture.cleanup());
  });

});
