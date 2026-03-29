export default function Entertainment() {
  const spotifyEmbedUrl = "https://open.spotify.com/embed/playlist/7qxn6GsFH77ghVtKzOnAYA";
  const playlistTracks = [
    "• Stay - The Kid LAROI, Justin Bieber",
    "• As It Was - Harry Styles",
    "• Blinding Lights - The Weeknd",
    "• Sunflower - Post Malone, Swae Lee",
    "• Heat Waves - Glass Animals",
  ];

  const entertainmentItems = [
    {
      title: "Movie Picks",
      description: "A curated list of movies and series I enjoy for story, visuals, and creativity.",
    },
    {
      title: "Gaming Favorites",
      description: "Games that inspire me with worldbuilding, design, or just good fun.",
    },
    {
      title: "Music & Chill",
      description: "My Spotify playlist with the songs I listen to while coding, relaxing, or brainstorming ideas.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-10 py-20 md:px-20">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-cyan-400 uppercase tracking-[0.4em] text-sm">Entertainment Zone</p>
          <h1 className="text-4xl md:text-6xl font-bold">Need a break?</h1>
          <p className="mx-auto text-gray-300 max-w-2xl text-lg">
            Explore a light-hearted entertainment page with movie picks, gaming favorites,
            and music recommendations to keep creativity flowing between projects.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {entertainmentItems.map((item) => {
            if (item.title === "Music & Chill") {
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-cyan-500/10 transition hover:-translate-y-1 hover:bg-white/10"
                >
                  <h2 className="text-2xl font-semibold text-cyan-300 mb-4">{item.title}</h2>
                  <div className="space-y-6">
                    <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900">
                      <iframe
                        src={spotifyEmbedUrl}
                        width="100%"
                        height="380"
                        loading="lazy"
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        className="w-full min-h-[380px]"
                      />
                    </div>
                    <p className="mt-4 text-sm text-gray-400">
                      If the playlist iframe is blocked locally, open it directly in Spotify:
                    </p>
                    <a
                      href="https://open.spotify.com/playlist/7qxn6GsFH77ghVtKzOnAYA"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full border border-cyan-300 px-4 py-2 text-sm font-semibold text-cyan-300 hover:bg-cyan-400/10"
                    >
                      Open playlist on Spotify
                    </a>
                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                    <div className="space-y-2 text-gray-300">
                      <p className="font-semibold text-cyan-300">Playlist tracks</p>
                      {playlistTracks.map((track) => (
                        <p key={track}>{track}</p>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl shadow-cyan-500/10 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <h2 className="text-2xl font-semibold text-cyan-300 mb-4">{item.title}</h2>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Movie Recommendations</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Inception</li>
              <li>• The Grand Budapest Hotel</li>
              <li>• Black Mirror</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white/5 p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-cyan-300 mb-3">Game Picks</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• Cyberpunk 2077</li>
              <li>• The Witcher 3</li>
              <li>• Stardew Valley</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
