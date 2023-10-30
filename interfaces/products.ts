interface EnumColor {
  id?: string;
  color: string;
  created_on?: string;
}

interface EnumImages {
  image: string
}

export interface productInterface {
  id: string;
  color: EnumColor[];
  user_id?: string;
  product_name: string;
  description: string;
  low_product_alert: boolean;
  price: string;
  online_presence: boolean;
  created_on?: string;
  brand: string;
  category: string;
  images: EnumImages[]
}