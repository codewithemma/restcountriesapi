import { DATAS } from "../Components/data";
export function getData() {
  const DataList = DATAS;
  return DataList;
}

export function filterData(dataType) {
  let filteredData = getData().filter((item) => item.region === dataType);
  return filteredData;
}
