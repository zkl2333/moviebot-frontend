export default function DashboardLayout({ children, header }) {
  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
    </>
  );
}
