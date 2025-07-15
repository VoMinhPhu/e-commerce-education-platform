type Cart = {
  userId: number;
  productIds: {
    count: number;
    productId: string;
  }[];
};

type PayloadAddCart = {
  id: string;
  count: number;
};
