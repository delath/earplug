import Link from 'next/link';
import CustomImage from './_components/custom-image';
import api from '@/api';

export default async function Home() {
  const games = await api.getMyOwnGames();


  if (!games || !games?.[0]?.name) {
    redirect('/404');
  }

  return (
    <div style={{ display: "flex", padding: "24px", backgroundColor: "black" }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "4px", justifyItems: "center", width: "100%" }}>
        {games.map((game) => (
          <Link key={game.id} href={`/games/${game.id}`} style={{ width: "190px", height: "350px" }}>
            <figure>
              <div className='relative aspect-[3/4] rounded-xl c-bg-dark-gray transition md:hover:brightness-110'>
                <CustomImage {...game} />
              </div>

              <figcaption className='mt-2.5 text-xs	sm:mt-3 sm:text-base font-bold text-center line-clamp-3'>
                {game.name}
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </div>
  );
}
