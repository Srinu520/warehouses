import data from './data.json'
export const warehouses = {
  state: {
    warehouses: [...data]
  },
  reducers: {
    setWarehouses: (state, warehouses) => ({
      ...state,
      warehouses,
    }),
    updateWarehouse: (state, warehouse) => ({
      ...state,
      warehouses: state.warehouses.map(w => w.id === warehouse.id ? warehouse : w)
    })
  },
  effects: (dispatch) => ({
    async updateWarehouse(warehouse) {
      dispatch.warehouses.updateWarehouse(warehouse)
    }
  })
}