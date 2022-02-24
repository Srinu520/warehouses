import { init } from '@rematch/core';
import loadingPlugin from '@rematch/loading';
import { warehouses } from './models/warehouses';

const store = init({
  models: {
    warehouses: warehouses
  },
  plugins: [loadingPlugin()]
});

export default store;