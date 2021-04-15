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
          firstnumber="{{firstnumber}}"
          secondnumber="{{secondnumber}}"
          operation="{{operation}}">
        </basic-calculator>
    </div>
  `;

  let calculator: HTMLElement;
  /**
   * Setup the fixture with the markup and re-query the "calculator" variable so that
   * each test case gets a fresh new copy of the element.
   */
  async function setup(firstNumber = '1', secondNumber = '2', operation = 'sum') {
    fixture.set(markup);
    calculator = document.querySelector('basic-calculator') as HTMLElement;
    expect(calculator).not.to.be.null;
    // Apply our viewmodel to the Knockout bindings
    ko.applyBindings({
      firstnumber: firstNumber,
      secondnumber: secondNumber,
      operation: operation
    }, calculator);
    // Wait for BusyContext to clear for the element
    await Context.getContext(calculator).getBusyContext().whenReady();
  }

  describe('Sum tests', () => {
    // Setup the fixture before each test case
    beforeEach(async () => await setup('1', '2', 'sum'));

    it('Calculator gets loaded', async () => {
      await Context.getContext(calculator).getBusyContext().whenReady();
      expect(calculator).not.to.be.null;
    });

    it('Verify add operation', async () => {
      // Arrange
      const constButton = calculator.querySelector('#icon_button') as HTMLElement;
      expect(constButton).not.to.be.null;

      // Act
      constButton.click();
      await Context.getContext(calculator).getBusyContext().whenReady();

      // Assert
      const result = calculator.querySelector('#result') as HTMLElement;
      expect(result).not.to.be.null;
      const resultValue = result.querySelector('.oj-text-field-readonly') as HTMLElement;
      expect(resultValue).not.to.be.null;
      expect(resultValue.innerText).to.be.equal('3');
    });

    afterEach(() => fixture.cleanup());
  });


  describe('Substract tests', () => {
    // Setup the fixture before each test case
    beforeEach(async () => await setup('5', '2', 'substract'));

    it('Calculator gets loaded', async () => {
      await Context.getContext(calculator).getBusyContext().whenReady();
      expect(calculator).not.to.be.null;
    });

    it('Verify substract operation', async () => {
      // Arrange
      const constButton = calculator.querySelector('#icon_button') as HTMLElement;
      expect(constButton).not.to.be.null;

      // Act
      constButton.click();
      await Context.getContext(calculator).getBusyContext().whenReady();

      // Assert
      const result = calculator.querySelector('#result') as HTMLElement;
      expect(result).not.to.be.null;
      const resultValue = result.querySelector('.oj-text-field-readonly') as HTMLElement;
      expect(resultValue).not.to.be.null;
      expect(resultValue.innerText).to.be.equal('3');
    });

    afterEach(() => fixture.cleanup());
  });


  describe('Multiply tests', () => {
    // Setup the fixture before each test case
    beforeEach(async () => await setup('5', '2', 'multiply'));

    it('Calculator gets loaded', async () => {
      await Context.getContext(calculator).getBusyContext().whenReady();
      expect(calculator).not.to.be.null;
    });

    it('Verify multiply operation', async () => {
      // Arrange
      const constButton = calculator.querySelector('#icon_button') as HTMLElement;
      expect(constButton).not.to.be.null;

      // Act
      constButton.click();
      await Context.getContext(calculator).getBusyContext().whenReady();

      // Assert
      const result = calculator.querySelector('#result') as HTMLElement;
      expect(result).not.to.be.null;
      const resultValue = result.querySelector('.oj-text-field-readonly') as HTMLElement;
      expect(resultValue).not.to.be.null;
      expect(resultValue.innerText).to.be.equal('10');
    });

    afterEach(() => fixture.cleanup());
  });


  describe('Divide tests', () => {
    // Setup the fixture before each test case
    beforeEach(async () => await setup('100', '2', 'divide'));

    it('Calculator gets loaded', async () => {
      await Context.getContext(calculator).getBusyContext().whenReady();
      expect(calculator).not.to.be.null;
    });

    it('Verify divide operation', async () => {
      // Arrange
      const constButton = calculator.querySelector('#icon_button') as HTMLElement;
      expect(constButton).not.to.be.null;

      // Act
      constButton.click();
      await Context.getContext(calculator).getBusyContext().whenReady();

      // Assert
      const result = calculator.querySelector('#result') as HTMLElement;
      expect(result).not.to.be.null;
      const resultValue = result.querySelector('.oj-text-field-readonly') as HTMLElement;
      expect(resultValue).not.to.be.null;
      expect(resultValue.innerText).to.be.equal('50');
    });

    afterEach(() => fixture.cleanup());
  });

});

// function sleep(ms) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
