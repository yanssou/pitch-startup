import SearchForm from '@/components/SearchForm';
import StartupCard, { StartupCardType } from '@/components/StartupCard';
import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/lib/queries';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = await client.fetch(STARTUPS_QUERY);

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Pitchez votre startup, <br /> Connectez avec des entrepreneurs !
        </h1>
        <p className="sub-heading !max-w-3xl">
          Soumettez des idées, votez pour des pitchs et faites vous remarquer
          dans des compétitions virtuelles !
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Résultats pour "${query}"` : 'Toutes les startups'}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">Aucun startup trouvée</p>
          )}
        </ul>
      </section>
    </>
  );
}
