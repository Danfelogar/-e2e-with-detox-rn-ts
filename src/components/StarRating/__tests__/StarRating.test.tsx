import React from 'react';

import {StarRating} from '../StarRating';
import {render} from 'test-utils';

describe('StarRating', () => {
  describe('rating was passed', () => {
    it('show the average', () => {
      const {getByText} = render(<StarRating rating={{average: 7}} />);

      expect(getByText('7')).toBeTruthy();
    });

    it('show the star icon', () => {
      const {getByTestId} = render(<StarRating rating={{average: 7}} />);

      expect(getByTestId('starIcon')).toBeTruthy();
    });
  });
  describe('Rating was NOT passing', () => {
    it('return nothing', () => {
      //passed other value of wrapper different to default
      const {UNSAFE_root} = render(<StarRating />, {wrapper: undefined});

      expect(UNSAFE_root.children.length).toEqual(0);
    });
  });
  // test('If passed rating show the average', () => {
  //   const {debug, getByText, getByTestId} = render(
  //     <StarRating rating={{average: 7}} />,
  //   );
  //   //show the component
  //   //debug();

  //   //expect the text to be true
  //   //find the text in the component
  //   expect(getByText('7')).toBeTruthy();
  //   // find the icon in the component by testID
  //   expect(getByTestId('starIcon')).toBeTruthy();
  // });
});

//this script will run the test and generate the coverage file in the coverage folder
//!!!!!!!yarn test --testPathPattern=StarRating --coverage
