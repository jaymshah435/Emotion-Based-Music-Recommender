import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HistoryPage() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/history")
      .then(res => setHistory(res.data))
      .catch(err => console.error("Error fetching history:", err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">History</h2>
      {history.length === 0 ? (
        <p>No history found.</p>
      ) : (
        history.map((entry, index) => (
          <div key={index} className="mb-6 p-4 bg-green-500 rounded shadow">
            <h3 className="text-xl font-semibold capitalize">Emotion: {entry.emotion}</h3>
            <p className="text-sm text-gray-600">
              Time: {new Date(entry.timestamp).toLocaleString()}
            </p>
            <ul className="mt-2 list-disc pl-5">
              {entry.songs.map((song, idx) => (
                <li key={idx}>
                  <Link to={song.external_url} className="hover:text-white" target="_blank" >{song.name} - {song.artist}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}