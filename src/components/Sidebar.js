import useState from 'react';

const Sidebar = () => {
  //   const [today, setToday] = useState();
  //   const today = new Date();
  //   console.log(today);
  return (
    <>
      <h3 className='text-muted'>Today's Date</h3>
      <form action=''>
        <input type='text' placeholder='Search LoFive' />
      </form>
    </>
  );
};

export default Sidebar;
