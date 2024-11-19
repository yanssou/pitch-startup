import SearchForm from '@/components/SearchForm';

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitchez votre startup, <br /> Connectez avec des entrepreneurs !</h1>
        <p className="sub-heading !max-w-3xl">Soumettez des idées, votez pour des pitchs et faites vous
          remarquer
          dans des compétitions virtuelles !</p>
        <SearchForm query={query} />
      </section>
    </>
  );
}
