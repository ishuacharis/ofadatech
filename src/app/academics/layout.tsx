export default function AcademicsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <main>
      <div className="xs-padding-block xs-padding-inline sm-padding-block sm-padding-inline">
        {children}
      </div>
    </main>
  );
}