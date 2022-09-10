import React from "react";
import { CartState } from "../../context/Context";
// import { filterLabels } from "../../constants/constants";

const FilterBar = () => {
  const {
    productDispatch,
    productState: { byColor },
  } = CartState();

  const filterType = {
    color: ["Red", "Blue", "Black", "Pink", "Green"],
    gender: ["Men", "Women"],
    price: ["0-Rs250", "Rs251-450", "Rs500"],
    type: ["Polo", "Hoddie", "Basic"],
  };

  return (
    <div className="hidden sm:block flex-col bg-white border-2 border-gray-100 shadow-2xl px-6 w-52 p-4 mx-12">
      {/* <div>
        {filterLabels.map((item, index) => (
          <div key={item.type + index}>
            <p className="font-medium py-2" key={item.type + index}>
              {item.type}
            </p>

            {item.value.map((val, index) => (
              <div className="flex gap-2" key={val + index}>
                <input type="checkbox" name={val} id={val} />
                {val}
              </div>
            ))}
          </div>
        ))}
      </div> */}
      <span className="title">Filter Products</span>
      <div>
        <label className="filterCategory">Colour</label>
        {filterType.color.map((colorOption, index) => {
          return (
            <div>
              {" "}
              <span style={{ paddingLeft: 10 }}>
                <label>
                  {colorOption}
                  <input
                    type="checkbox"
                    key={index}
                    onChange={() =>
                      productDispatch({
                        type: "FILTER_BY_COLOR",
                        payload: colorOption,
                      })
                    }
                    checked={byColor.includes(colorOption) ? true : false}
                  />
                </label>
              </span>{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FilterBar;
