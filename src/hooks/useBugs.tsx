import { useQuery } from "react-query";

async function fetchDataBugs() {
    const result = await fetch('https://acnhapi.com/v1/bugs');
    const json = await result.json();
    return json;
}

export function useSea() {
    return useQuery(["id"], fetchDataBugs);
}