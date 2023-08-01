import { motion } from "framer-motion"
import { useEffect, useState } from "react"
const SplashScreen = () => {
    // const randDuration = ()=>  Math.floor(Math.random() * 4 + 1)
    const [render, setRender] = useState(true)
    useEffect(() => {
       const timer =  setTimeout(()=> {
            setRender(false)
        }, 2000)

        return () => clearTimeout(timer)
    }, [])

    if (!render) {
        return null
    } 

    return (<>
        <div className="w-screen h-screen fixed z-50 grid grid-cols-1 grid-rows-1 md:grid-cols-2">
            <motion.div className="bg-black origin-left"
                initial={{ rotateY: 0, opacity: 1 }}
                animate={{ rotateY: -90, opacity: 0.8 }}
                exit={{display: 'none'}}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            ></motion.div>
            <motion.div className="bg-black origin-right"
                initial={{ rotateY: 0, opacity: 1 }}
                animate={{ rotateY: 90, opacity: 0.8 }}
                exit={{display: 'none'}}
                transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                }}
            ></motion.div>
        </div>
    </>)
}

export default SplashScreen