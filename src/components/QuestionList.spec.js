describe('The Question list Component', () => {
	beforeEach(()=>{
		console.log("Before each");
	});
	beforeAll(()=>{
		console.log("Before all");
	});
	afterEach(()=>{
		console.log("after each");
	});
	afterAll(()=>{
		console.log("after all");
	});
	it.only('Should display a list item', () => {
		console.log("first running");

	});
	it.skip('Should display a list item', () => {
		console.log("second running");
	});
});