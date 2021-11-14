import { useEffect, useRef, useState } from "react"
import { useRecoilState } from "recoil"
import { currentIndexPage } from "../store/main"

const Warpper = ()=> {
    const [currentIndex , setCurrentIndex] = useRecoilState(currentIndexPage)
    const [sections , setSections] = useState(3)

    useEffect(()=> {     
        const wheelListener = (event: WheelEvent)=> {
            console.log(event.deltaY); 
            var direction = event.deltaY;

            if (direction > 0) {
              // If next index is greater than sections count, do nothing
              if (currentIndex + 1 >= sections) return;
              // Go to next
              // Increase the section pointer
              console.log('direction > 0');
              
              setCurrentIndex(prevState => prevState + 1);
              console.log(currentIndex);
              
            } else {
              // If previous index is negative, do nothing
              if (currentIndex - 1 < 0) return;
              // Go to prev
              // Decrease the section pointer
              console.log('direction < 0');
              setCurrentIndex(prevState => prevState - 1);
              console.log(currentIndex);
            }
            
        }
        document.addEventListener("wheel", wheelListener)
        return ()=> document.removeEventListener("wheel", wheelListener)
        
    },[currentIndex, sections])

    return (<>
        <div id="warpper">
            <div className="bg-red fixed w-12 h-12 z-10">
             {currentIndex}
            </div>
        </div>
    </>)
}

export default Warpper