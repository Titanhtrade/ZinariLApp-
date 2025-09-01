import React from 'react';
import { lunaWelcomeMessage } from '../LunaPrompt';

export default function WelcomeModal({ userName }) {
  return (
    <div className="modal">
      <p>{lunaWelcomeMessage(userName)}</p>
    </div>
  );
}
