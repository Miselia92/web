import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ cacheDir: '/home/miselia/web/tina/__generated__/.cache/1768990664981', url: 'http://localhost:4001/graphql', token: '733e4c7fa07535fc5ef66ec0974cc8a8d1a43e73', queries,  });
export default client;
  