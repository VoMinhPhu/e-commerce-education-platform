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

type GetCartResponse = {
  id: string;
  name: string;
  price: number;
  desc: string;
  image: string;
  category: string;
  count: number;
};
