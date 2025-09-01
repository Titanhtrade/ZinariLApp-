import React, { useState } from 'react';
import MoodSelector from './components/Profile/MoodSelector';
import { lunaPrompt } from './LunaPrompt';

function App() {
  const [mood, setMood] = useState('');

  const handleMoodSelect = (selectedMood) => {
    setMood(selectedMood);
    console.log(lunaPrompt(selectedMood));
  };

  return (
    <div>
      <h1>Welcome to ZinariLApp</h1>
      <MoodSelector onSelect={handleMoodSelect} />
    </div>
  );
}

export default App;
