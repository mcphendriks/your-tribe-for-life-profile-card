import { createClient } from "$lib/prismicio";

export async function load({ fetch, request }) {
  const client = createClient({ fetch, request });
  // Fetch and return data from prismic
  const document = await client.getByUID("homepage", "index");
  // homepage en index zijn de query en geven opdrachten aan de database om het op te halen

  console.log(document);

  return document.data;
}
