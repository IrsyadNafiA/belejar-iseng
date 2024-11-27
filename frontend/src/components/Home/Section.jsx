import PropTypes from "prop-types";
import { Header3 } from "./Header";

const HomeSection = (props) => {
  return (
    <div className="max-w-7xl mx-auto px-2 py-4 overflow-hidden">
      <Header3 title={props.title} />
      {props.children}
    </div>
  );
};

HomeSection.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default HomeSection;
