import { mapStateToProps, QuestionDetailDisplay } from '../QuestionDetail';
import renderer from 'react-test-renderer';
import React from 'react';

describe('The Question Detail Component', () => {
	describe('The container element', () => {
		describe('MapStateToProps', () => {
			it('should map state to props correctly', () => {
				const sampleQuestion = {
					question_id: 42,
					body: "Space is big",
				};

				const appState = {
					questions: [sampleQuestion]
				}
				const ownProps = {
					question_id: 42,
				}
				const componentState = mapStateToProps(appState, ownProps);
				expect(componentState).toEqual(sampleQuestion);
			});
		});
	});

	describe('The display element', () => {
		it('should not regress', () => {
			const tree = renderer.create(
				<QuestionDetailDisplay
					title="The meaning of life"
					body="42"
					answer_count={0}
					tags={['Tag']}
				/>
			);
			expect(tree.toJSON()).toMatchSnapshot();
	
		});

	});

});