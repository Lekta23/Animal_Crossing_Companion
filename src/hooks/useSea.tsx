import { useQuery } from "react-query";

async function fetchDataSea() {
    const result = await fetch('https://acnhapi.com/v1/sea');
    const json = await result.json();
    return json;
}

export function useSea() {
    return useQuery(["id"], fetchDataSea);
}