import { useEffect, useState } from "react";
import env from "./const/env";

const localCache = [];
const STATES = {
  UNLOADED: "UNLOADED",
  LOADING: "LOADING",
  LOADED: "LOADED",
};

export default function useBreedList(animal) {
  console.log("CALLED useBreedList", animal);
  const [status, setStatus] = useState(STATES.UNLOADED);
  const [breedList, setBreedList] = useState([]);

  useEffect(() => {
    if (!animal) {
      setBreedList([]);
    } else if (localCache[animal]) {
      setBreedList(localCache[animal]);
    } else {
      requestBreedList();
    }
  }, [animal]);

  async function requestBreedList() {
    setBreedList([]);
    setStatus(STATES.LOADING);
    const res = await fetch(`${env.HOST}breeds?animal=${animal}`);
    const json = await res.json();
    console.log(json);
    localCache[animal] = json.breeds || [];
    console.log(localCache[animal]);
    setBreedList(localCache[animal]);
    setStatus(STATES.LOADED);
  }

  return [breedList, status];
}
