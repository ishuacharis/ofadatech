export default function AdmissionLayout({
  children,
}: {
    children: React.ReactNode
}) {
  return (
    <main>
      <div className="xs-padding-inline sm-padding-inline">
        {children}
      </div>
    </main>
  );
}