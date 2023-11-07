import React from 'react';
import {render} from 'test-utils';

import {EpisodeList} from '../EpisodeList';
import {showMocks} from 'test/mocks/showMocks';

//import {showService} from 'src/services/show/showService';

describe('EpisodeList', () => {
  test('The component rendered', async () => {
    // jest.spyOn(showService, 'getEpisodes').mockResolvedValueOnce({
    //   seasonNames: ['1', '2'],
    //   seasons: {
    //     1: [showMocks.episode1, showMocks.episode2],
    //     2: [showMocks.episode22, showMocks.episode23],
    //   },
    // });
    //The component is represented with the container that contains QueryClientProvider, since the component uses the useQuery hook and its documentation indicates that it should be used that way
    //When using a component that includes a customHook, such as useNavigation, it is necessary to go to the react-native-navigation documentation to be able to make the respective jest configuration in the "jestSetupFile.js" file in order to mock them all. the functions used within the component
    // const {findByText, getByText} = render(
    //   <EpisodeList show={showMocks.show} />,
    //   {
    //     wrapper,
    //   },
    // );
    const {findByText, getByText} = render(
      <EpisodeList show={showMocks.show} />,
    );
    // findByText is used instead of getByText because the component is rendered asynchronously
    //const episode1 = await findByText(showMocks.episode1.name);
    // not use more than one await in the same test
    //const episode2 = getByText(showMocks.episode2.name);
    //The component is rendered asynchronously, so it is necessary to wait for it to be rendered to be able to make the respective validations
    // await waitFor(() => {
    //   getByText(showMocks.episode1.name);
    // });

    //expect(episode1).toBeTruthy();
    //expect(episode2).toBeTruthy();

    await findByText(showMocks.episode1.name);

    expect(getByText(showMocks.episode1.name)).toBeTruthy();
    expect(getByText(showMocks.episode2.name)).toBeTruthy();
  });
});
