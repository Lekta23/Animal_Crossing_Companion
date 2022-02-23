import { useQuery } from "react-query";

async function fetchDataFossils() {
    const result = await fetch('https://acnhapi.com/v1/fossils');
    const json = await result.json();
    return json;
}

export function useSea() {
    return useQuery(["id"], fetchDataFossils);
}