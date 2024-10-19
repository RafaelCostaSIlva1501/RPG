const items = [
  {
    name: "Força da Trindade",
    img: "força-da-trindade.webp",
    desc: `A "Força da Trindade" permite ao usuário sintetizar até três habilidades em corpo, mente e espírito, elevando suas capacidades a níveis divinos.`,
  },
  {
    name: "Externação do Poder",
    img: "externação-do-poder.webp",
    desc: `A "Externação do Poder" concede ao portador a habilidade de influenciar objetos e o ambiente, assemelhando-se à telecinese.`,
  },
];

const containerItems = document.querySelector(".items");

// Criação de elementos de imagem e adição de eventos
items.forEach((item, index) => {
  const img = document.createElement("img");
  img.src = `img/${item.img}`;
  img.alt = item.name; // Adicionando texto alternativo para acessibilidade
  img.addEventListener("click", () => showDescription(index)); // Adiciona evento de clique
  containerItems.appendChild(img);
});

// Objeto para armazenar as informações do item selecionado
const selectedItem = {
  name: "",
  img: "",
  desc: "",
};

// Função para exibir a descrição do item
const showDescription = (index) => {
  selectedItem.name = items[index].name;
  selectedItem.img = items[index].img;
  selectedItem.desc = items[index].desc;
  updateDescriptionUI(); // Atualiza a interface com a nova descrição
};


// Função para atualizar a interface com a descrição do item selecionado
const updateDescriptionUI = () => {
  const descriptionSection = document.querySelector(".description");
  descriptionSection.innerHTML = `
    <h2>${selectedItem.name}</h2>
    <div>
      <img src="img/${selectedItem.img}" alt="${selectedItem.name}" />
      <p>${selectedItem.desc}</p>
    </div>
    `;
};

showDescription(0)
