import { useEffect, useState } from "react";

type Props = {
  logItems: { value: string; label: string; translation: string }[];
};

export const TranslationsTab = (props: Props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(props.logItems);

  function handleChange(e) {
    setSearchTerm(e.target.value);
  }

  useEffect(() => {
    setFilteredItems(() =>
      props.logItems.filter((item) => {
        return (
          item.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.translation?.toLowerCase().includes(searchTerm.toLowerCase())
        );
      })
    );
  }, [props.logItems, searchTerm]);

  return (
    <div>
      <div>
        <label>
          Search
          <input type="search" value={searchTerm} onChange={handleChange} />
        </label>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-4">
        {filteredItems.map((item) => {
          return (
            <div
              key={item.label}
              className="p-2 rounded-lg texture surface-alt cols-span-1"
            >
              <div>{item.label}</div>

              <div>{item.translation}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
