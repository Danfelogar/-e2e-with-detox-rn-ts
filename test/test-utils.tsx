import {render} from '@testing-library/react-native';
import React, {ReactElement} from 'react';
import {FC} from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

type Options = Parameters<typeof render>[1];
// doc: https://tanstack.com/query/v3/docs/react/guides/testing
// the cacheTime option is used to avoid the error: "A new query started in the background while another query was already in flight. The new query will be cancelled."
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
    },
  },
});

// all the providers that are necessary for the tests are added here in this case only the QueryClientProvider is added for the useQuery hook in the components to work
const AllTheProviders: FC<{children: React.ReactNode}> = ({children}) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

const customRender = (ui: ReactElement, options?: Options) =>
  render(ui, {wrapper: AllTheProviders, ...options});
// re-export everything of the testing-library
export * from '@testing-library/react-native';
export {customRender as render};

//The moduleDirectories option in the Jest configuration is used to specify a list of directory names to be searched recursively from the location of the module you are requiring. This option is useful when you want to import modules without having to specify the full path or file extension. In your case, the moduleDirectories configuration is configured to look in the node_modules and ./test directories. This means that when you import a module into your tests, Jest will look in these two directories.

//this is case of in package.json for line 68
// "moduleDirectories": [
//   "node_modules",
//   "./test"
// ],
