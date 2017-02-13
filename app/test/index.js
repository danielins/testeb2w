import React from 'react';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import Loading from '../components/Loading';

describe('<Loading />', () => {

	it("has a loading", function(done) {

		const component = TestUtils.renderIntoDocument(
			<Loading />
		);

		expect(component).toExist();

	});

});