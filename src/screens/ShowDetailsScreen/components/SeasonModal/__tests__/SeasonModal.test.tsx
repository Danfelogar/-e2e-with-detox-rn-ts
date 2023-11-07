import React, {createRef} from 'react';
import {Modalize} from 'react-native-modalize';

import {SeasonModal} from '../SeasonModal';
import {act, fireEvent, render} from 'test-utils';

describe('SeasonModal', () => {
  test('the component renders', () => {
    //createRef is the remplacement of useRef for testing
    const modalizeRef = createRef<Modalize>();

    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={season => console.log(season)}
        selectedSeason="1"
        seasons={['1', '2', '3']}
      />,
    );
    //To prepare a component for assertions, wrap the code rendering it and performing updates inside an act() call. This makes your test run closer to how React works in the browser.
    act(() => {
      //open the modal with the ref
      modalizeRef.current?.open();
    });
    //check if the modal content is rendered 3 times since we have 3 seasons with exact false because the text is not exactly the same
    //expect(getAllByText('Season', {exact: false}).length).toBe(3);
    //other form
    expect(getAllByText(/season/i).length).toBe(3);
  });

  test('call onSelectSeason with correct season when season option was pressed', () => {
    //createRef is the remplacement of useRef for testing
    const modalizeRef = createRef<Modalize>();
    //jest.fn() is a mock function
    const onSelectSeasonMock = jest.fn();

    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        onSelectSeason={onSelectSeasonMock}
        selectedSeason="1"
        seasons={['1', '2', '3']}
      />,
    );
    act(() => {
      modalizeRef.current?.open();
    });

    const season2Element = getByText(/season 2/i);
    //fireEvent is used to simulate user actions in this case press the season 2 element
    fireEvent.press(season2Element);
    //evaluate if the mock function was called with the correct season
    expect(onSelectSeasonMock).toBeCalledWith('2');
  });
});
