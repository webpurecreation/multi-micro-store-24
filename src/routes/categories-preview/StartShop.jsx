import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categories.selector";

import CategoryPreview from "../../components/category-preview/CategoryPreview";
import {
  StartCarousel,
  FeaturedShop,
  Contact,
  BestSeller,
} from "../../components";

import { FeaturedContainer, FeaturedTitle } from "./StartShop.styles";

const StartShop = ({ headerTitle }) => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <>
      <StartCarousel headerTitle={headerTitle} />
          <FeaturedContainer>
        <FeaturedTitle>Featured</FeaturedTitle>
        <FeaturedShop type="featured" />
      </FeaturedContainer>
                
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
                <CategoryPreview key={title} title={title} products={products} />

        );
      })}
      <FeaturedContainer>
        <FeaturedTitle>Trending</FeaturedTitle>
        <FeaturedShop type="trending" />
      </FeaturedContainer>
      <FeaturedContainer>
        <FeaturedTitle>You may also like</FeaturedTitle>
        <BestSeller type="featured" />
      </FeaturedContainer>
    </>
  );
};

export default StartShop;
