import PropTypes from "prop-types";

const Footer = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = (numPacked / numItems) * 100;
  return (
    <div className="container bottom-0">
      <footer className="w-screen mt-12 pt-8 mx-auto text-center text-2xl border-t-gray-600 border-t-4 mb-10">
        {percentage === 100
          ? "Shopping Done!"
          : `Total Items: ${numItems}  ----------  Completed Items: ${numPacked}  ----------  ${percentage}%
`}
      </footer>
    </div>
  );
};

Footer.propTypes = {
  items: PropTypes.array.isRequired,
};

export default Footer;
