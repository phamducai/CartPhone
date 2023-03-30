export interface Phone {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  rate: number;
}

export interface cartPhone extends Phone {
  quantity: number;
  user_id?: string;
}
