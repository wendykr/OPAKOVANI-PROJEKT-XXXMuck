# Tréninkový projektík

## Nábytek XXXMuck
Vyrobte v Reactu jednoduchý e-shop pro nový nábytkový řetězec XXXMuck. Web bude sestávat ze dvou stránek: nabídka produktů a detail produktu.

1. Pomocí `npm create vite@latest xxxmuck` vytvořte základ webové aplikace.
2. Prohlédněte si [design hlavní stránky](https://kodim.cz/cms/assets/czechitas/react-2/lekce/opakovani/projektik/xxxmuck/homepage.png) obchodu. Nemusíte jej přesně dodržet, stačí jej brát jako inspiraci. Než začnete programovat, rozvrhněte si strukturu stránky do srozumitelně pojmenovaných komponent. Hlavní stránka nechť je celá obsažena v komponentě `HomePage`.
3. Prostudujte si výstup následujícího [API endpointu](https://apps.kodim.cz/react-2/xxxmuck/products), který vrací seznam produktů ve formátu JSON.
4. Vytvořte jednotlivé komponenty a sestavte z nich výslednou stránku. Data pro jednotlivé produkty načtěte z API.
5. Pomocí příkazu `npm install react-router-dom` nainstalujte React Router.
6. Přidejte do vašeho projektu routování. Komponenta `HomePage` bude mít cestu `/`.
7. Vytvořte zatím prázdnou komponentu `ProductPage` u zapojte ji pod cestu `/product`.
8. Dotvořte komponentu `ProductPage` dle [dodaného designu](https://kodim.cz/cms/assets/czechitas/react-2/lekce/opakovani/projektik/xxxmuck/productpage.png).
9. Zařiďte, že po kliknutí na produkt na hlavní stránce se zobrazí stránka zatím prázdná `ProductPage` bez produktu.
10. Na `ProductPage` zobrazte vybraný produkt. K tomu je potřeba si předat `id` produktu v URL stránky a použít hook `useParams`. Jednotlivé produkty pod jejich `id` najdete na [tomto endpointu](https://apps.kodim.cz/react-2/xxxmuck/products/2c6VoCaD). Tlačítko pro objednání zatím nebude funkční.