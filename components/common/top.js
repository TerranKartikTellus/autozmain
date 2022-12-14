import  X from "/components/Animate/WhenInView/Translate/x"
import  Y from "/components/Animate/WhenInView/Translate/y"
import Opacity from "/components/Animate/WhenInView/Opacity"

export default function Top({main,sub,mini}){
  return(
    <main className="fixed md:top-14 md:left-14 top-5 left-auto right-auto  w-full scale-100 md:scale-100 z-10">
      <Y initial={'-20px'} final={'0px'} duration={1}>
        <Opacity  initial={0} final={1} duration={1}>
         <div className="text-3xl md:text-4xl  tracking-widest text-blue-100 w-[200px]  text-center mx-auto md:mx-0 md:text-left  bg-red300 font-medium border-b-2 border-gray-100/30 pb-3 mb-3">{main}</div>
        </Opacity>
      </Y>
      
      {sub && <div className=" bg-red400 w-full b-red-400 mx-auto md:mx-0">
      <X initial={'-20px'} final={'0px'} duration={1} delay={1}>
        <Opacity  initial={0} final={1} duration={1} delay={1}>
         <div  className="text-xl  tracking-widest text-blue-100/80 text md:text-left mx-auto md:mx-0 w-[300px] text-center bg-red300 font-normal">{sub} </div>
        </Opacity>
      </X>

      {/* <X initial={'-20px'} final={'0px'} duration={0.4} delay={1.4}>
        <Opacity  initial={0} final={1} duration={0.4} delay={1.4}>
         <img src="/svg/windows.svg" className="invert w-6 h-7 opacity-70 contrast-200 ml-3"></img>
        </Opacity>
      </X> */}

      <div className="text"> {mini}</div>
      </div>}
      {/* <div className="text-lg tracking-widest text-blue-100/50  text-left w-full bg-red-300font-normal"></div> */}
    </main>
  );
}