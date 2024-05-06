import { useRouter } from "next/router";
import { cities } from "@/lib/data";
import Link from "next/link";

export default function City(){

    const router = useRouter();
    const { slug } = router.query;
    const city = cities.find((city) => city.slug === slug);
    

    if (!city) {
        return null;
      }

    return  ( <> <h1> {city.name}</h1>
    <h2> in {city.country}</h2>
    <p> <strong> population : {city.population}</strong></p>
    <p> {city.description}</p>
    <Link href={"/cities"}>go back to all cities</Link> </>)
    
}