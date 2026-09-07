import { Card } from "../components/Card";
import { CARDS_CONFIG } from "../constants/cardsData";

export function Characters() {
    
    return (
        <div className="flex flex-col bg-violet-950">
            <div className="h-30 pt-15 items-center justify-center ">
                <p className="font-serif text-white text-[80px] font-bold">Personagens</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
                {CARDS_CONFIG.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        imageUrl={card.imageUrl}
                        color={card.color}
                    />
                ))}
            </div>
        </div>
    );
}