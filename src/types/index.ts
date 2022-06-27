export type SelectOption = null | { value: ""; label: "" };
export type LogItem = {
  quantity: string;
  unit: SelectOption;
  item: SelectOption;
  id: string;
};

export type LogItemArray = LogItem[];

export type AirTableFoodShare = {
  id: string;
  createdTime: string;
  fields: {
    Location: string;
    ["Day Of Week"]: string;
    Link: string;
    Address: string;
    ["Distribution Start Time"]: string;
    ["Map URL"]: string;
    ["Volunteer Start Time"]: string;
    ["Distribution Type"]: "Drive Up" | "Walk Up" | "Drive or Walk Up";
  };
};
