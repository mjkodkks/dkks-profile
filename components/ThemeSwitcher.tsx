import { SyntheticEvent, useEffect } from "react"
import { useRecoilState } from "recoil"
import { themeMode, ThemeMode } from "../store/main"

const ThemeSwitcher = () => {
    const [theme, setTheme] = useRecoilState(themeMode)
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setTheme(ThemeMode.dark)
        } else {
            document.documentElement.classList.remove('dark')
            setTheme(ThemeMode.light)
        }
    }, [theme])

    const switchChange = (e: SyntheticEvent) => {
        console.log(e);
        if(theme === 'dark') {
            setTheme(ThemeMode.light)
            localStorage.setItem("theme", 'light')
        } else {
            setTheme(ThemeMode.dark)
            localStorage.setItem("theme", 'dark')
        }
    }

    return (<>
        <label className="switch">
            <input type="checkbox" onChange={switchChange} checked={theme === 'dark'} />
            <span className="slider round"></span>
        </label>
    </>)
}

export default ThemeSwitcher