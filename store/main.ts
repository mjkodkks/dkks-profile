import { atom, selector } from 'recoil'

export const currentIndexPage = atom({
  key: 'currentIndexPage',
  default: 0,
})

export enum ThemeMode {
    light = 'light',
    dark = 'dark'
} 
export const themeMode = atom({
    key: 'themeMode',
    default: ThemeMode.light
  })

// export const getCurrentIndexPage = selector({
//   key: 'getCurrentIndexPage',
//   get: ({get}) => { get(currentIndexPage) },
// })
