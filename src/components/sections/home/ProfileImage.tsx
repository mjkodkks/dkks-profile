import { AnimationSequence, motion, useAnimate } from "framer-motion"
import { useEffect } from "react";
type Props = {
    imgSrc: string
}
const ProfileImage = ({ imgSrc }: Props) => {
    const [scope, animate] = useAnimate();
    async function myAnimation() {
        await animate(scope.current, { y: 200, opacity: 0 });
        await animate(scope.current, { y: 0, opacity: 1 });
        animate(scope.current, { y: 8 }, { duration: 2,  repeat: Infinity, repeatType: "mirror", ease: "easeInOut",});
    }
    useEffect(() => {
        myAnimation();
    }, []);
    return (<>
        <motion.img src={imgSrc}
            className="rounded-full overflow-hidden w-40 h-40 md:w-80 md:h-80 border-4 border-white"
            ref={scope}
            alt="me-profile">
        </motion.img>
    </>)
}

export default ProfileImage