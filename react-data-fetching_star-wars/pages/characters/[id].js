import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";



const fetcher = (...args) => fetch(...args).then((res) => res.json());




export default function Character() {
  
  const router = useRouter();
  const {id} = router.query;
  const URL = `https://swapi.dev/api/people/${id}`;

  const {data , isLoading, error} = useSWR(URL, fetcher);
  
  if (isLoading) {
    return <h1>still loading</h1>;
  }

  if (error) {
    return <h1>failed to load</h1>;
  }
  


  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
