import { products } from "../main.js";

// Hämta ut div-listan som finns i index.html för rekommenderade produkter
const recommendedProductListElement = document.getElementById(
  "recommended-product-list"
);
const productViewContainer = document.getElementById("product-view");

// Hämta ut sökparameter och baka in i URLSearchParams
// som hjälper oss att hämta ut id:t
const urlParams = new URLSearchParams(window.location.search);
// Hämta ut productId genom .get metoden och omvandla till nummer
const productId = Number.parseInt(urlParams.get("productId"));

// Hämta ut produktobjektet som vi har tryckt på genom 'products' listan och productId
const product = products.find((all) => all.id === productId);

function setupProductPage() {
  // Lägg in produkt elementet (view) i product diven
  productViewContainer.append(product.createViewElement());

  // Fyll recommended listan med produkter
  fillProductList(recommendedProductListElement, products);
}

// Ritar ut produkter (products) inom ett visst element (element)
// genom att loopa listan av produkter och skapa kort-element.
function fillProductList(element, products) {
  element.textContent = "";

  for (const product of products) {
    element.append(product.createCardElement());
  }
}

// Kör funktionen när product.html laddas in
setupProductPage();
