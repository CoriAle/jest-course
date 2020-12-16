import delay from 'redux-saga';

it('async test 1', done => {
	setTimeout(done, 2000);
});

it('async test 2', done => {
	return new Promise(
		resolve => 	setTimeout(done, 2000)
	);
});

it('async test 4', async () => {
	await delay(2000);
});