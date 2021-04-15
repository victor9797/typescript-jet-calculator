// // Import the viewmodel definition
// import ViewModel from "basic-calculator/basic-calculator-viewModel";
// // Import the loader so that the composite is registered with JET
// import "basic-calculator/loader";
// import * as sinon from "sinon";
//
// declare const expect: Chai.ExpectStatic;
//
// describe("demo-card CCA view model tests", () => {
//   const cardFlippedCss = 'demo-card-flipped';
//   let card: HTMLElement;
//   let flipContainer: HTMLElement;
//   let viewmodel: ViewModel;
//
//   beforeEach(() => {
//     // Create dummy elements for testing
//     // These are only used given to the viewmodel to manipulate; we're not working
//     // with the live DOM
//     card = document.createElement('div');
//     flipContainer = document.createElement('div');
//
//     // When viewmodel calls 'querySelector' on the card, return the mock flipContainer
//     sinon.stub(card, 'querySelector').returns(flipContainer);
//
//     viewmodel = new ViewModel({
//       element: card,
//       properties: {
//         name: 'Deb Raphaely',
//         workNumber: '5171278899'
//       },
//       slotCounts: {},
//       unique: '',
//       uniqueId: ''
//     });
//   });
//
//   // An asynchronous test, using Mocha's completion callback
//   it("can format contact values", () => {
//     expect(viewmodel.initials).to.equal("DR");
//     expect(viewmodel.workFormatted).to.equal("517-127-8899");
//   });
//
//   it("adds 'demo-card-flipped' CSS if not flipped", () => {
//     viewmodel.flipCard(new KeyboardEvent("keypress", { key: "Enter" }));
//     expect(flipContainer.classList.contains(cardFlippedCss)).to.be.true;
//   });
//
//   it("removes 'demo-card-flipped' CSS if already flipped", () => {
//     flipContainer.classList.add(cardFlippedCss);
//     viewmodel.flipCard(new KeyboardEvent("keypress", { key: "Enter" }));
//     expect(flipContainer.classList.contains(cardFlippedCss)).to.be.false;
//   });
//
// });
