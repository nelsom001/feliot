import Nav from "@/app/components/js/nav/nav";

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
