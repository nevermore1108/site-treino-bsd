export function Card(props) {
  return (
    <div className={`overflow-hidden rounded-xl border-2 ${props.color} shadow-lg transition-transform duration-700 hover:scale-105`}>
      <div className="relative aspect-square w-full overflow-hidden bg-violet-950">
        <img 
          src={props.imageUrl} 
          alt={props.title} 
          className="h-full w-full"
        />
        <div className="absolute absolute inset-0 flex items-center justify-center backdrop-blur-[5px] bg-black/30 transition-transform duration-700 ease-in-out opacity-0 hover:opacity-100 hover:scale-105">
          <p className="font-sans text-white text-[50px] sm:text-[40px] md:text-[30px] lg:text-[35px] xl:text-[40px] font-bold">{props.title}</p>
        </div>
      </div>
      
    </div>
  );
}
