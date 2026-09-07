import { Card2 } from "../components/Card2";
import { FACTS_CONFIG } from "../constants/cardsData";

export function Facts() {

    return (
        <div className="flex flex-col bg-white/15">
            <div className="h-30 pt-15 items-center justify-center">
                <p className="font-serif text-white text-[80px] font-bold">Fatos</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
                {FACTS_CONFIG.map((card) => (
                    <Card2
                        key={card.id}
                        text={card.text}
                        title={card.title}
                        imageUrl={card.imageUrl}
                        color={card.color}
                    />
                ))}
            </div>
        </div>
    );
}