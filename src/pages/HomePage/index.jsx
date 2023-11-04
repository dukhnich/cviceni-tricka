import { useState, useEffect } from 'react';
import { TShirt } from '../components/TShirt';
import { TShirtSetup } from '../components/TShirtSetup';
import './style.css';

export const HomePage = () => {
  const [settings, setSettings] = useState({
    type: 'normalShortSleeve',
    color: 'yellow',
    print: 'Ahoj světe'
  })
  return (
    <div className="container">
      <div className="tshirt-panel">
        <div className="tshirt-panel__tshirt">
          <TShirt {...settings} />
        </div>
        <div className="tshirt-panel__setup">
          <h2>Možnosti:</h2>
          <TShirtSetup settings={settings} onChange={setSettings} />
        </div>
      </div>
    </div>
  );
};
