import { create } from "zustand"

export default create((set) => {
  return {
    searchData: [],

    getSearchData: (data) => {
      set((state) => {
        return { searchData: data };
      })
    },
  }
})
  