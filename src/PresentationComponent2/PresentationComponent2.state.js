import {create} from 'zustand'

export const useComponent2State = create((set) => ({
  data: [],
  setData: (data) => set({data: data}),
}))