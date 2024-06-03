import { create } from "zustand"

export default create((set) => {
  return {
    searchData: [],

    getSearchData: (data) => {
      set((state) => {
        console.log(data)
        return { searchData: data };
      })
    },
  }
})
  