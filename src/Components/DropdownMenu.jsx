import { buttons } from "./Button";
const DropdownMenu = ({ handleClick }) => {
  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-light dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Filter by region
        </button>
        <ul className="dropdown-menu">
          {buttons &&
            buttons.map((region) => (
              <button
                key={region.id}
                className="dropdown-item"
                value={region.value}
                onClick={handleClick}
              >
                {region.name}
              </button>
            ))}
        </ul>
      </div>
    </>
  );
};

export default DropdownMenu;
