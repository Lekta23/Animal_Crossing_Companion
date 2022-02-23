import { useQuery } from "react-query";

async function fetchDataFish() {
    const result = await fetch('https://acnhapi.com/v1/fish');
    const json = await result.json();
    return json;
}

export function useFish() {
    return useQuery(["id"], fetchDataFish);
}