import React ,{useState}from 'react';
import "./tabs.css";
import FirstTab from '../AllTabs/FirstTab';
import SecondTab from '../AllTabs/SecondTab';

const Tabs = ({data}) => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleTab1 = () => {
        // update the state to tab1
        setActiveTab("tab1");
      };
      const handleTab2 = () => {
        // update the state to tab2
        setActiveTab("tab2");
      };
  return (
    <div className='Tabs'>
         <ul className="nav">
         <li className={activeTab === "tab1" ? "active" : ""} onClick={handleTab1}>Noun</li>
        <li className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>Verb</li>
      </ul>
      <div className="outlet">
        {/* content will be shown here */}
        {activeTab === "tab1" ? <FirstTab data={data} /> : <SecondTab data={data}/>}
      </div>
    </div>
  )
}

export default Tabs