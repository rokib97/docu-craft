import { getDocumentContent } from "@/lib/doc";

export default async function ContentDisplay({ id }) {
  const documentContent = await getDocumentContent(id);
  console.log(documentContent);
  return <h1>Display...</h1>;
}
