const Button = ({ name, feature }) => {
  return (
    <button className='btn-dark' onClick={feature}>
      {name}
    </button>
  );
};

export default Button;
