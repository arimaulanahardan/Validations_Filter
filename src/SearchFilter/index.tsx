import Selector from "./components/Selector";
import Path from "./components/Path";

interface SearchFilterProps {}

const SearchFilter: React.FC<SearchFilterProps> = () => {
  return (
    <div className="index">
      <Path />
      <Selector />
    </div>
  );
};

export default SearchFilter;
