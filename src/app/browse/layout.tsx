export default function DashboardLayout({ children, header, footer }) {
  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </>
  );
}
