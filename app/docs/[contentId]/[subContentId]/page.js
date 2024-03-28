export default function SubContentPage({ params: { subContentId } }) {
  console.log("2", subContentId);
  return <h1>{subContentId}</h1>;
}
