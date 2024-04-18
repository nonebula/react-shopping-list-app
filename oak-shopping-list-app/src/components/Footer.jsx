import PropTypes from 'prop-types';

const Footer = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;
  return (
    <div className="">
      <footer className="w-screen p-5 flex overflow-hidden bottom-0">
        {percentage === 100
          ? "Shopping Done!"
          : `Total Items: ${numItems} ---------- Completed Items: ${numPacked}--${percentage}%
`}
      </footer>
    </div>
  );
};

Footer.propTypes = {
  items: PropTypes.array.isRequired,
};


export default Footer;
