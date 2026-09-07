

export function About() {
    return (
        <>
        <div className="relative bg-[url('/background.jpg')] bg-cover bg-center h-200 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center backdrop-blur-[5px] bg-white/10">
                <p className="font-serif text-white text-[100px] font-bold">Sobre</p>
            </div>
        </div>
        <div className="p-20 flex flex-col xl:flex-row items-center justify-around bg-white/15">
            <img
                src="cover.jpg"
                alt="Cover 1"
                className="h-50 md:h-70 lg:h-100" 
            />
            <div className="basis-1/3 flex flex-col gap-4 p-5">
                <p className="font-serif text-white text-[25px]">
                    Bungou stray dogs é uma série de mangás japoneses escrita por Kafka Asagiri e ilustrada por Sango Harukawa. A obra foca no cotidiano de uma agência de detetives e seus membros, indivíduos dotados de habilidades especiais capazes de resolver e solucionar mistérios e casos considerados fora do alcance da polícia e dos militares.
                </p>
                <p className="font-serif text-white text-[25px]">
                    Serializada na revista Young Ace desde 2012, a obra foi compilada no ano seguinte pela editora Kadokawa Shoten. Ela ainda recebeu uma adaptação para anime em 2016, produzida pelo estúdio Bones, além de um OVA (Original Video Animation) e filme. O título ainda conta com uma versão em formato de romance ilustrado, conhecido como light novel. No Brasil, o mangá foi licenciado e publicado pela editora Planet Manga.
                </p>
            </div>
            <img
                src="cover2.jpg"
                alt="Cover 2"
                className="h-50 md:h-70 lg:h-100" 
            />
        </div>
        </>
    );
}