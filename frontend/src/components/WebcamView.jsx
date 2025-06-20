import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import SongCard from './SongCard';
import * as faceapi from 'face-api.js';

// WebcamView: captures user's face and detects emotion using face-api.js
export default function WebcamView() {
  const videoRef = useRef();
  const [emotion, setEmotion] = useState(null);
  const [songs, setSongs] = useState([]);
  const [loading, setLoading] = useState(false);

  // Load models and start webcam when component mounts
  useEffect(() => {
    Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
      faceapi.nets.faceExpressionNet.loadFromUri('/models')
    ]).then(startVideo);
  }, []);

  // Start webcam feed
  const startVideo = () => {
    if (!videoRef.current) {
      console.error("videoRef is null — DOM might not be ready.");
      return;
    }

    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        videoRef.current.srcObject = stream;
        console.log("Camera started.");
      })
      .catch(err => {
        console.error("Camera error:", err.name, err.message);
      });
  };

  // Detect dominant emotion and fetch song recommendations
  const detectEmotion = async () => {
    setLoading(true);

    const result = await faceapi
      .detectSingleFace(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    if (result) {
      const sorted = Object.entries(result.expressions).sort((a, b) => b[1] - a[1]);
      const topEmotion = sorted[0][0];
      setEmotion(topEmotion);

      // Request song recommendations from backend
      const res = await axios.get(`http://localhost:3001/api/recommend/${topEmotion}`);
      console.log(res.data);
      
      setSongs(res.data);
    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-col items-center p-6">
        <video ref={videoRef} autoPlay muted width="400" className="rounded shadow-lg" />

        {/* Button to trigger emotion detection */}
        <button
          onClick={detectEmotion}
          className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Detect Emotion & Suggest Song
        </button>

        {loading && <p className="mt-2 text-gray-500">Loading...</p>}
        {emotion && !loading && <p className="mt-2">Detected Emotion: <b>{emotion}</b></p>}
      </div>

      {/* Render list of recommended songs */}
      <div className='w-full p-4'>
        {songs.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {songs.map((song, index) => (
              <SongCard key={index} song={song} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}