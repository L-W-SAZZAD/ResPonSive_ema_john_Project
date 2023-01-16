import Products from "../Components/Products/Products";

const { createBrowserRouter } = require("react-router-dom");
const {
  default: HeroSection,
} = require("../Components/HeroSection/HeroSection");
const { default: Main } = require("../Components/Main/Main");

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <HeroSection /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);
