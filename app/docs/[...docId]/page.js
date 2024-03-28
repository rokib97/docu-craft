export default function Page({ params: { docId } }) {
  console.log("3", docId);
  return <h1>{docId}</h1>;
}
