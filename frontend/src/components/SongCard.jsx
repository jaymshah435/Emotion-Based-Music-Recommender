import React from 'react';

// Card component to display a single song with preview and link
export default function SongCard({ song }) {
  return (
    <div className="bg-green-500 p-4 shadow rounded max-w-md w-full text-center">
      <h3 className="text-xl font-semibold">{song.name}</h3>
      <p className="text-white">by {song.artist}</p>

      {/* Song preview (if available) */}
      {song.previewUrl ? (
        <audio controls className="mt-2 w-full">
          <source src={song.preview_url} type="audio/mpeg" />
        </audio>
      ) : <p>No preview available</p>}

      {/* Link to full song */}
      <a
        href={song.external_url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-black underline"
      >
        Open in Apple Music
      </a>
    </div>
  );
}