import {rest} from 'msw';
import {BASE_URL} from 'src/services/api';
import {showMocks} from 'test/mocks/showMocks';

// Define request handlers and response resolvers here or import them from another file.
export const handlers = [
  rest.get(`${BASE_URL}shows/:showId/episodes`, (req, resp, ctx) => {
    return resp(
      ctx.status(200),
      ctx.set('Content-Type', 'application/json'),
      ctx.json(showMocks.episodeList),
    );
  }),
];
