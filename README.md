# Site Treino - Bungou Stray Dogs
Uma landing page feito para treinar React JSX e Tailwind CSS com tema do anime Bungou Stray Dogs
## Componentes
### Header
Um header simples com três botões: Home, Personagens e a logo do Instagram. Os botões aumentam de tamanho e projetam uma sombra quando o mouse fica em cima, mas não levam para lugar nenhum, por não ter conseguido implementar essa funcionalidade. A Header permanece no topo do site o tempo inteiro.
### Card
Configuração dos cards de personagens, mostra a imagem por padrão e, quando o mouse fica em cima da imagem, escurece a imagem e mostra o "título" (nome do personagem) do card. A imagem, o título e a cor da borda são definidos pelo "cardsData".
### Card2
Configuração dos cards de fatos, mostra a imagem, o botão de mostrar e um contador de likes por padrão. Quando o botão de mostrar é apertado, o botão muda de cor e a imagem escurece mostrando um dos fatos. Se o botão for apertado de novo, as coisas voltam para o padrão. A configuração do botão e do contador é feita através do evento 'onClick'. A imagem, o título e a cor da borda são definidos pelo "cardsData".
## Constantes
### cardsData
Objetos com informações sobre os cards de personagens (CARDS_CONFIG) e sobre os cards de fatos (FACTS_CONFIGS).
## Páginas
### About
Contém um Hero com uma imagem do anime e o título 'sobre', seguido por uma sessão com dois pôsteres, um do mangá e outro do anime, uma pequena sinopse junto de informações sobre a distribuição do mangá e anime.
### Characters
Sessão com a imagem de oito personagens do anime e seus nomes, feito através de um map do CARDS_CONIFG, chamando a função "Cards"
### Facts
Sessão com quatro fatos sobre o anime/mangá, feito através de um map do FACTS_CONFIG, chamando a função "Cards2".
### Info
Sessão que traz informações sobre os animes Bungou Stray Dogs e Bungou Stray Dogs Wan! da api anilist. Informações presentes: titulo em romanji e nativo, imagem de capa, nota média, quantidade episódios, gêneros, data de estreia e sinopse.
## Video/Imagens
### About e Header
https://github.com/user-attachments/assets/9498ca80-5b4b-4fad-a574-f35d7aeeb39e

### Characters
https://github.com/user-attachments/assets/66ac51c9-506c-4564-8e72-7765cf062c5e


### Facts e Info
https://github.com/user-attachments/assets/d1542c60-397f-409b-992a-f7232bc13d6a
