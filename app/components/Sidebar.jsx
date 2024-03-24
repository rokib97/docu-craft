export default function SideBar({ docs }) {
  const roots = docs.filter((doc) => !docs.parent);
  console.log({ roots });
  return <h1>Sidebar</h1>;
}
