import CategoriesPreview from "../categories-preview/categories-preview.component";
import "./shop.styles.scss";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<category />} />
    </Routes>
  );
};

export default Shop;
