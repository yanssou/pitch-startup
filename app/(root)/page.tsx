import SearchForm from '@/components/SearchForm';
import StartupCard from '@/components/StartupCard';

export default async function Home({ searchParams }: {
  searchParams: Promise<{ query?: string }>
}) {
  const query = (await searchParams).query;
  const posts = [{
    _createdAt: new Date(),
    views: 55,
    author: {
      _id: 1,
      name: 'yanssou',
    },
    _id: 1,
    description: 'desc',
    image: 'https://media.ouest-france.fr/v1/pictures/MjAyMDEyOWZlNzlmZTlmM2VmNzMxM2IzYjBlZDM4MjYxM2Y4OTg?width=1260&height=708&focuspoint=50%2C25&cropresize=1&client_id=bpeditorial&sign=87704e84993984ab6724c7852fa13b7ace4e91171f4c20adf921e675597b59de',
    category: 'Anime',
    title: 'Naruto',
  }];

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Pitchez votre startup, <br /> Connectez avec des entrepreneurs !</h1>
        <p className="sub-heading !max-w-3xl">Soumettez des idées, votez pour des pitchs et faites vous
          remarquer
          dans des compétitions virtuelles !</p>
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
