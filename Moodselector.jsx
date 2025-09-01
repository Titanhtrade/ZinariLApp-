import React from 'react';

const moods = ['Romantic', 'Nude', 'Calm', 'Hard'];

export default function MoodSelector({ onSelect }) {
  return (
    <div className="mood-grid">
      {moods.map((mood) => (
        <button key={mood} onClick={() => onSelect(mood)}>
          {mood}
        </button>
      ))}
    </div>
  );
}
