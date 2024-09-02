export default function Home({ params }: any) {
  const { locale } = params;
  return (
    <main className="max-w-full">
      <a href={`/${locale}/properties`}>properties page</a>
    </main>
  );
}
