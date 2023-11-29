import { useEffect, useRef, useState } from "react";
import { MainFilter } from "../components/main/MainFilter";
import { MainHeader } from "../components/main/MainHeader";
import { MainList } from "../components/main/MainList";
import {
  DataItem,
  LISTDATA,
  MockData,
  mockData,
} from "../components/main/enum";

export const Main = () => {
  const [data, setData] = useState<MockData[]>(mockData(182));
  const [selectedData, setSelectedData] = useState<DataItem>(LISTDATA[3]);
  const [selectedCount, setSelectedCount] = useState(0);
  const [searchVal, setSearchVal] = useState("");
  const [filterdData, setFilteredData] = useState<MockData[]>(data);
  const fields = useRef(["name", "location", "education", "tags", "hints"]);

  function getData() {
    fetch("https://crmyorktowers.com/rest/local/api/zew/lead_api_report.php")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  useEffect(() => {
    getData();
    setData(mockData(selectedData.count));
  }, [selectedData]);
  useEffect(() => {
    setFilteredData(globalSearch(data, fields.current, searchVal));
  }, [data, searchVal]);
  return (
    <div className="py-2 md:px-12 px-6">
      <MainHeader
        dataList={LISTDATA}
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      />
      <div className="xl:gap-6 xl:grid xl:grid-cols-4 xl:grid-rows-1 xl:items-start flex flex-col space-y-4 items-center py-4 ">
        <div className="xl:col-span-1 xl:relative h-full sticky max-w-full w-96 top-3 z-[100]">
          <div className="xl:sticky top-6">
            <MainFilter
              selectedCount={selectedCount}
              setSearchVal={setSearchVal}
            />
          </div>
        </div>
        <div className="xl:col-span-3 w-full">
          <MainList data={filterdData} setSelectedCount={setSelectedCount} />
        </div>
      </div>
    </div>
  );
};

function globalSearch<T extends Object>(
  data: T[],
  keys: string[],
  searchVal: string
): T[] {
  return searchVal
    ? data.filter((item) =>
        Object.entries(item)
          .filter(([key, _]) => keys.includes(key))
          .some(([_, val]) => {
            return Array.isArray(val)
              ? val.some(
                  (itm) =>
                    typeof itm === "string" &&
                    itm.toLowerCase().includes(searchVal.toLowerCase())
                )
              : typeof val === "string" &&
                  val.toLowerCase().includes(searchVal.toLowerCase());
          })
      )
    : data;
}
