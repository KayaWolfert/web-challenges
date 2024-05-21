import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";
import { SWRConfig } from "swr";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ISSTracker() {

  const { data: coords, error, isLoading, mutate } = useSWR(URL, fetcher);
  console.log(coords);
  // const [coords, setCoords] = useState({
  // longitude: 0,
  // latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //   const response = await fetch(URL);
  //if (response.ok) {
  // const data = await response.json();
  // setCoords({ longitude: data.longitude, latitude: data.latitude });
  // }
  // } catch (error) {
  //  console.error(error);
  // } }

  //useEffect(() => {
  //const timer = setInterval(() => {
  // getISSCoords();
  //}, 5000);

  // return () => {
  //   clearInterval(timer);
  // };
  //}, []);

  if (isLoading) {
    return <h1>still loading</h1>;
  }

  if (error) {
    return <h1>failed to load </h1>;
  }

  return (
    <SWRConfig value={{ fetcher, refreshInterval: 5000 }}>
      <main>
        <Map longitude={coords.longitude} latitude={coords.latitude} />
        <Controls longitude={coords.longitude} latitude={coords.latitude} onRefresh={()=> mutate()} />
      </main>
    </SWRConfig>
  );
}
