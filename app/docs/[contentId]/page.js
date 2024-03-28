export default function ContentPage({ params: { contentId } }) {
  console.log("1", contentId);
  return <h1>{contentId}</h1>;
}
