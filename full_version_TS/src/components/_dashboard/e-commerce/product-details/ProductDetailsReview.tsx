import { useState } from 'react';
// material
import { Divider, Collapse } from '@mui/material';
//
import ProductDetailsReviewForm from './ProductDetailsReviewForm';
import ProductDetailsReviewList from './ProductDetailsReviewList';
import ProductDetailsReviewOverview from './ProductDetailsReviewOverview';
import { Product } from '../../../../@types/products';

// ----------------------------------------------------------------------

type ProductDetailsReviewProps = {
  product: Product;
};

export default function ProductDetailsReview({ product }: ProductDetailsReviewProps) {
  const [reviewBox, setReviewBox] = useState(false);

  const handleOpenReviewBox = () => {
    setReviewBox((prev) => !prev);
  };

  const handleCloseReviewBox = () => {
    setReviewBox(false);
  };

  return (
    <>
      <ProductDetailsReviewOverview product={product} onOpen={handleOpenReviewBox} />

      <Divider />

      <Collapse in={reviewBox}>
        <ProductDetailsReviewForm onClose={handleCloseReviewBox} id="move_add_review" />
        <Divider />
      </Collapse>

      <ProductDetailsReviewList product={product} />
    </>
  );
}
