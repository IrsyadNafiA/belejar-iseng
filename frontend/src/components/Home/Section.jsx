import { Header3 } from "./Header";

const HomeSection = (props) => {
  return (
    <div className="max-w-7xl mx-auto px-2 py-4 overflow-hidden">
      <Header3 title={props.title} />
      {props.children}
    </div>
  );
};

export default HomeSection;
