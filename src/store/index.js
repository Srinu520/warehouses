import { init } from '@rematch/core';
import { warehouses } from './models/warehouses';

const store = init({
  models: {
    warehouses: warehouses
  }
});

export default store;