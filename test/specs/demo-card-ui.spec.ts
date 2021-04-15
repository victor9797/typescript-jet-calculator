// // Import the viewmodel definition
// import ViewModel from 'basic-calculator/demo-card-viewModel';
// // Import the loader so that the composite is registered with JET
// import 'demo-card/loader';
// // Import the Context class from ojcontext
// import * as Context from 'ojs/ojcontext';

// declare const expect: Chai.ExpectStatic;

// describe('demo-card CCA unit tests', () => {
//   const markup = `
//     <div id="card-holder">
//       <demo-card
//       data-oj-binding-provider='none'
//       name='Deb Raphaely'
//       avatar='base/web/js/jet-composites/demo-card/1.0.15/extension/demo/images/deb-raphaely.png',
//       work-title='Purchasing Director'
//       work-number='5171278899'
//       email='deb.raphaely@oracle.com'
//       ></demo-card>
//     </div>
//   `;

//   let card: HTMLElement;
//   /**
//    * Setup the fixture with the markup and re-query the "card" variable so that
//    * each test case gets a fresh new copy of the element.
//    */
//   async function setup() {
//     fixture.set(markup);
//     card = document.querySelector('demo-card') as HTMLElement;
//     expect(card).not.to.be.null;
//     // Wait for BusyContext to clear for the element
//     await Context.getContext(card).getBusyContext().whenReady();
//   }

//   describe('UI tests', () => {
//     // Setup the fixture before each test case
//     beforeEach(async () => await setup());

//     it('can flip the card with mouse click', async () => {
//       const frontSide = card.querySelector('.demo-card-front-side') as HTMLElement;
//       expect(frontSide).not.to.be.null;
//       frontSide.click();
//       await Context.getContext(card).getBusyContext().whenReady();
//       expect(card.querySelector('.demo-card-flipped')).not.to.be.null;
//     });

//     afterEach(() => fixture.cleanup());
//   });

// });
