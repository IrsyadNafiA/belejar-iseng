import PropTypes from "prop-types";

const Header3 = ({ title, textColor }) => {
  return (
    <div className="w-full px-2 md:px-0">
      <h3 className={`text-2xl font-bold mb-4 ${textColor}`}>{title}</h3>
    </div>
  );
};

Header3.propTypes = {
  title: PropTypes.string,
  textColor: PropTypes.string,
};

export { Header3 };
