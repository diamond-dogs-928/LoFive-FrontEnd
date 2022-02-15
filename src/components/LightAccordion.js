import { Accordion, AccordionItem } from 'react-light-accordion';
import 'react-light-accordion/demo/css/index.css';
import ShazamSearch from './ShazamSearch';
import Kanye from './Kanye';
import '../CSS/accordionInsert.css';

const LightAccordion = () => (
  <div>
    <h1 style={{ color: '#696969' }}>EXPLORE </h1>
    <Accordion atomic={true}>
      <AccordionItem title='Listen to a Random Song'>
        <iframe
          title='deezer-widget'
          src='https://widget.deezer.com/widget/auto/playlist/1282495565'
          width='100%'
          height='300'
          frameborder='0'
          allowtransparency='true'
          allow='encrypted-media; clipboard-write'
        ></iframe>
      </AccordionItem>

      <AccordionItem title='Shazam!'>
        <ShazamSearch />
      </AccordionItem>

      <AccordionItem title='Kanye Loves Kanye'>
        <Kanye />
      </AccordionItem>
    </Accordion>
  </div>
);

const DummyContent = () => (
  <p style={{ padding: '18px' }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);

export default LightAccordion;
