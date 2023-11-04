import './style.css';

export const TShirtSetup = ({settings, onChange}) => {
  const changeField = (part) => onChange({...settings, ...part})
  return (
    <form className="tshirt-setup">
      <label className="tshirt-setup__label">Typ:</label>
      <select className="tshirt-setup__input" value={settings.type} onChange={e => changeField({type: e.target.value})} >
        <option value="normalShortSleeve">Krátký rukáv</option>
        <option value="tallShortSleeve">Krátký rukáv (prodloužené)</option>
        <option value="normalLongSleeve">Dlouhý rukáv</option>
        <option value="tallLongSleeve">Dlouhý rukáv (prodloužené)</option>
        <option value="normalNoSleeve">Bez rukávů</option>
        <option value="tallNoSleeve">Bez rukávů (prodloužené)</option>
      </select>

      <label className="tshirt-setup__label">Barva:</label>
      <select className="tshirt-setup__input" value={settings.color} onChange={e => changeField({color: e.target.value})}>
        <option value="yellow">Žlutá</option>
        <option value="red">Červená</option>
        <option value="blue">Modrá</option>
        <option value="green">Zelená</option>
      </select>
    
      <label className="tshirt-setup__label">Potisk:</label>
      <input className="tshirt-setup__input" type="text" value={settings.print} onChange={e => changeField({print: e.target.value})}/>
    </form>
  );
};
