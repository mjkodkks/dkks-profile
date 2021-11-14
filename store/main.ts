import { atom, selector } from 'recoil'

export const currentIndexPage = atom({
  key: 'currentIndexPage',
  default: 0,
})

// export const getCurrentIndexPage = selector({
//   key: 'getCurrentIndexPage',
//   get: ({get}) => { get(currentIndexPage) },
// })
