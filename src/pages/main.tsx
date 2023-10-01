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

  useEffect(() => {
    setData(mockData(selectedData.count));
  }, [selectedData]);
  useEffect(() => {
    setFilteredData(globalSearch(data, fields.current, searchVal));
  }, [data, searchVal]);
  return (
    <div className="py-2 md:px-12">
      <MainHeader
        dataList={LISTDATA}
        selectedData={selectedData}
        setSelectedData={setSelectedData}
      />
      <div className="gap-6 grid grid-cols-4 grid-rows-1 py-4 ">
        <div className="col-span-1 relative h-full">
          <div className="sticky top-6">
            <MainFilter
              selectedCount={selectedCount}
              setSearchVal={setSearchVal}
            />
          </div>
        </div>
        <div className="col-span-3">
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
