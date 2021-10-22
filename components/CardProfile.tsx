import Image from "next/image";
import { useEffect, useState } from "react";

const CardProfile = ()=> {
    const [img, setImg] = useState("");

    const getImage = async ()=> {
        const res = await fetch(`https://api.github.com/users/mjkodkks`) 
        const data = await res.json()
        setImg(data.avatar_url)
    }
    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        getImage()
    },[]);

    return (
        <>
          <div className="rounded-lg border h-6 p-8">
              <div className="hi">
                  <img src={img} alt="" />
              </div>
          </div>
        </>
    )
}


export default CardProfile