import Skimmer from "../Loader/Skimmer";

const TableSkimmer = ({ entries, col = 6 }) => {
  return Array.from(Array(entries)).map((_, h) => (
    <div key={h} className={`grid grid-cols-4 gap-8`}>
      {Array.from(Array(4)).map((_, i) => (
        <div className="mt-4" key={i}>
          <Skimmer width={"100%"} height={80} />
        </div>
      ))}
    </div>
  ));
};

export default TableSkimmer;
