import { useState } from "react";

export function Card2(props) {
    const [count,setCount] = useState (0)
    const [visible,setVisible] = useState (false)

  return (
    <div className="flex flex-col items-center ">
        <div className={`overflow-hidden rounded-xl border-7 ${props.color} shadow-lg`}>
            <div className="relative w-full overflow-hidden bg-violet-950">
                <img 
                    src={props.imageUrl} 
                    alt={props.title} 
                    className="h-full w-full"
                />
                <div className={`absolute inset-0 flex items-center justify-center backdrop-blur-[5px] bg-black/30 transition-opacity duration-700 ease-in-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="font-sans text-white text-wrap text-[20px] font-bold hover:80">{props.text}</p>
                </div>
            </div>
        </div>
        <div className="flex flex-col">
            <div className="gap-40 sm:gap-40 md:gap-30 lg:gap-50 xl:gap-20">
                <button onClick={() => setVisible(!visible)} className={`w-110 sm:w-85 md:w-75 lg:w-64 xl:w-99 ml-2 mt-2 pb-2 ${visible ? 'bg-green-500' : 'bg-white'} rounded-lg font-sans cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-100`}>
                    Mostrar
                </button>
                <div className="flex flex-row">
                    <button onClick={() => setCount ((c) => c + 1)} className="h-10 ml-2 mt-2 pb-2 flex flex-row cursor-pointer transition-transform duration-300 hover:scale-110 active:scale-100">
                        <img
                            src="/heart1.png"
                            alt="Heart"
                            className="h-10"
                        />
                    </button>
                    <p className="text-white pl-3 pt-4">{count}</p>                    
                </div>
            </div>
        </div>
    </div>
  );
}