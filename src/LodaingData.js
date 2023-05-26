import { getData } from "./components/utility/LocalStorage"

export const getCardData = async () => {
  try {
    const cardData = await fetch("/FeaturesProducts.json");
    const cards = await cardData.json();
    console.log(cards);

    const storedData = getData();

    let storedCardById = [];

    for (const id in storedData) {
      const StoredId = parseInt(id);
      const findIdFromCard = cards.find((card) => card.id === StoredId);
      if (findIdFromCard) {
        const quantity = storedData[id];
        findIdFromCard.quantity = quantity;
        storedCardById.push(findIdFromCard);
      }
    }

    return { cards, storedCardById };
  } catch (error) {
    console.error("Error fetching card data:", error);
    throw error;
  }
};
