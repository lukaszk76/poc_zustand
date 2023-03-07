import {create} from 'zustand'

export const useComponent1State = create((set) => ({
  data: [{id: "testId", title: "test data"}],
  setData: (data) => {
    if (data.length < 2) return;
    set({data: data})
  },
}))