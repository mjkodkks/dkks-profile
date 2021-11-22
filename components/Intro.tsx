
import { useEffect, useRef, useState } from "react";
import { default as anime } from '../node_modules/animejs/lib/anime.es.js';

const Intro = () => {

    useEffect(() => {

    }, []);

    return (
        <>
            <div className="text-8xl dark:text-white text-txt font-bold">Thanonphat Supho</div>
            <div className="text-2xl dark:text-white  text-txt font-light mt-8">
                I&apos;m Front-End Developer from thailand.
                I&apos;m a cat lover and enjoy to make something new.
            </div>
            <div className="flex gap-8 mt-8">
                <div className="relative">
                    <button type="button" className="fill dark:border-white">Download CV</button>
                    <div className="fill-behide"></div>
                </div>
                <div className="relative">
                    <button type="button" className="fill dark:border-white">More Detail</button>
                    <div className="fill-behide"></div>
                </div>
            </div>
        </>
    )
}


export default Intro