// import ControlledAccordions from './AccordionInsert';
import LightAccordion from './LightAccordion';
import '../CSS/sideBar.css';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h4>Fun Times</h4>
      {/* <ControlledAccordions /> */}
      <LightAccordion />
    </div>
  );
};

export default Sidebar;
