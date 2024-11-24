import SearchForm from '@/components/SearchForm';
import StartupCard, { StartupCardType } from '@/components/StartupCard';
import { STARTUPS_QUERY } from '@/lib/queries';
import { sanityFetch, SanityLive } from '@/sanity/lib/live';

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };
  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

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
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">Aucune startup trouvée</p>
          )}
        </ul>
      </section>

      <SanityLive />
    </>
  );
}
