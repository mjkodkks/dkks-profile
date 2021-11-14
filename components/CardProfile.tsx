/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import { useEffect, useRef, useState } from "react";
import { default as anime } from '../node_modules/animejs/lib/anime.es.js';

const CardProfile = () => {
    const [img, setImg] = useState("");
    let cardProfileRef = useRef(null);

    const getImage = async () => {
        const res = await fetch(`https://api.github.com/users/mjkodkks`)
        const data = await res.json()
        setImg(data.avatar_url)
        return res
    }

    const animate = ()=> {
        // anime({
        //     targets: '.card-profile',
        //     translateX: 250,
        //     translateY: 200
        //   });

        var tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 5000,
        loop: false,
        });

        tl.add({
            targets: '.card-profile',
            keyframes: [
                {
                    translateY: 0,
                    width: "42vw !important",
                    height: "42vh !important"
                },
              ],
        })
    }

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        getImage()
        animate()
    }, []);

    return (
        <>
            <div className="card-profile md:flex-row flex-col flex gap-8 rounded-xl w-profileWidth h-profileHeight border p-8 bg-white"
            ref={cardProfileRef} >
                <div className="img-warpper">
                    <img src={img} alt="img_profile"
                    className="rounded-full" 
                    />
                </div>
                <div>
                    <div className="text-lg">Hi i&apos;m <b>Thanonphat</b></div>
                    <div className="mt-4">My name is Thanonphat Supho. I&apos;m Front-End Developer from thailand.
                        I&apos;m a cat lover and enjoy to make something new.
                    </div>
                    <div className="flex gap-4 mt-4">
                        <img className="w-8 cursor-pointer" src="/github.png" alt="github" />
                        <img className="w-8 cursor-pointer" src="/linkedin.png" alt="linkedin" />
                    </div>
                </div>
            </div>
        </>
    )
}


export default CardProfile