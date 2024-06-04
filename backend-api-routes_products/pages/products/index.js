import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function RenderAllProducts() {
  const { data , error, isLoading} = useSWR(`/api/products`, fetcher);
  const products = data;

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return <ul>
  {products.map((product) => {
    return (
        <li key={product.id}>
            {product.name}
            {product.description}
            {product.price}
        </li>

    );
  })}
  </ul>;
}
