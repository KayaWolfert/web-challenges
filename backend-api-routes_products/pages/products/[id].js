import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Product(){

    const router = useRouter();
    const {id} = router.query;
    const { data , error, isLoading} = useSWR(`/api/products/${id}`, fetcher);

    if (error) return <div>failed to load</div>;
    if (isLoading) return <div>loading...</div>;


    return (

        <section>
        <h3> 
            {data.name}
        </h3>
        <p>
            {data.description}
        </p>
        <p>
            {data.price}
        </p>
        </section>
    )

}