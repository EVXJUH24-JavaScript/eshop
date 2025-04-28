// Hämta knappen, för att öppna varukorgen som finnas på alla html sidor
const openCartButton = document.getElementById("open-cart-button");

// Skapa sidebar elementet för varukorgen
export function createCartSidebar() {
  // Skapa elementen (än så länge bara en section och knapp)
  const cartContainer = document.createElement("section");
  const closeButton = document.createElement("button");

  // Applicera id och klasser för styling
  cartContainer.id = "cart-container";
  cartContainer.classList.add("cart-closed");

  // Lägg till en snygg ikon för stäng-knappen
  closeButton.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';

  // Stäng varukorgen när vi trycker på knappen
  closeButton.addEventListener("click", () => {
    cartContainer.classList.add("cart-closed");
  });

  cartContainer.append(closeButton);

  return cartContainer;
}

// Skapa varukorg-elementet när vi startar sidan
function setupCartPage() {
  document.body.append(createCartSidebar());

  // Öppna varukorgen när vi trycker på öppna knappen
  openCartButton.addEventListener("click", () => {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.classList.remove("cart-closed");
  });
}

// Kör funktionen när alla sidor laddas in
setupCartPage();
