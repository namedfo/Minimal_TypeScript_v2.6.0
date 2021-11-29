// material
import { Skeleton, Grid } from '@mui/material';
import ShopProductCard from './ShopProductCard';
import { Product } from '../../../../@types/products';

// ----------------------------------------------------------------------

const SkeletonLoad = (
  <>
    {[...Array(12)].map((_, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <Skeleton variant="rectangular" width="100%" sx={{ paddingTop: '115%', borderRadius: 2 }} />
      </Grid>
    ))}
  </>
);

type ShopProductListProps = {
  products: Product[];
  isLoad: boolean;
};

export default function ShopProductList({ products, isLoad, ...other }: ShopProductListProps) {
  return (
    <Grid container spacing={3} {...other}>
      {products.map((product) => (
        <Grid key={product.id} item xs={12} sm={6} md={3}>
          <ShopProductCard product={product} />
        </Grid>
      ))}

      {isLoad && SkeletonLoad}
    </Grid>
  );
}
