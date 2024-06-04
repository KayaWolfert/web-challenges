import { getProductById } from "@/services/productServices";

export default function handler(request,response){

    const { id } = request.query;
    const product = getProductById(id);

    if (!product) {
        response.status(404).json({ status: 'This product does not exist' });
        return;
      }
  
    response.status(200).json(product)

}


