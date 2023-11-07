import {device, element, by, waitFor} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should select Kirby Buckets', async () => {
    // element implementation when interacting with the UI
    // await element(by.text('Kirby Buckets')).tap();
    // await expect(element(by.text('Comedy'))).toBeVisible();

    //1. type in the search field The Big Bang Theory
    //await element(by.id('search-input')).typeText('The Big Bang Theory');
    //not show keyboard in android and ios
    await element(by.id('search-input')).replaceText('The Big Bang Theory');
    await element(by.id('search-input')).typeText('\n');
    //2. Press the thistle from The Big Bang Theory
    await element(by.text('The Big Bang Theory')).atIndex(1).tap();
    //3. Press the favorite button
    await element(by.id('favorite-button')).tap();
    //4. CHECK if the heart has turned red
    await expect(element(by.id('heart-icon-true'))).toBeVisible();
  });

  it('Should favorite the first bad TV Show (star < 5)', async () => {
    // 1.
    const starRatingBad = by.id('star-rating-bad');

    const list = by.id('show-list');

    await waitFor(element(starRatingBad).atIndex(0))
      .toBeVisible()
      .whileElement(list)
      .scroll(300, 'down', 0.5, 0.5);

    await element(starRatingBad).atIndex(0).tap();

    await element(by.id('favorite-button'))
      .tap()
      .catch(async () => {
        await element(starRatingBad).atIndex(0).tap();
        await element(by.id('favorite-button')).tap();
      });

    await expect(element(by.id('heart-icon-true'))).toBeVisible();
  });
});
