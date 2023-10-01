import { Button, Popover, Select, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { DataItem } from "./enum";
import { MainHeaderButtons } from "./MainHeaderButtons";
const { Option } = Select;

export const MainHeader = ({
  dataList,
  selectedData,
  setSelectedData,
}: {
  dataList: DataItem[];
  selectedData: DataItem;
  setSelectedData: React.Dispatch<React.SetStateAction<DataItem>>;
}) => {
  //md:scale-[1] scale-[.75]
  return (
    <div className="lg:flex-row lg:space-x-4 xl:items-start items-center justify-between space-y-2 flex-col flex w-full my-6">
      <div className="flex space-x-4 items-start">
        <div>
          <h1 className="md:text-2xl text-lg mb-2 mt-0 font-bold text-prim">
            London Internship Program
          </h1>
          <p className="xl:block hidden">London</p>
        </div>{" "}
        <Popover
          className="2xl:hidden flex"
          placement="bottomRight"
          content={
            <MainHeaderButtons customClasses="flex flex-col space-y-2" />
          }
          trigger="click"
        >
          <Button type="primary">Actions</Button>
        </Popover>
      </div>

      <div className="max-w-full">
        <Select
          dropdownAlign={{
            overflow: {
              adjustY: true,
              shiftY: false,
            },
          }}
          listHeight={10000}
          size="large"
          defaultValue={selectedData.value}
          onSelect={(val) => {
            setSelectedData(
              dataList.find((data) => data.value === val) as DataItem
            );
          }}
          suffixIcon={
            <DownOutlined className="text-prim mr-2" style={{ fontSize: 15 }} />
          }
          className="md:text-xl text-lg text-prim overflow-hidden customSelect shadow-g b-0 rounded-full w-96 max-w-[100%]"
          optionLabelProp="label"
          dropdownStyle={{
            padding: 0,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          {dataList.map((item) => (
            <Option key={item.value} value={item.value} label={item.label}>
              <Space className="text-xl text-prim flex rounded-none justify-between py-6 px-2">
                <div>{item.label}</div>
                <div className="px-2 py-1 text-sm rounded-full text-right bg-[#4996ff]/[.15]">
                  {item.count}
                </div>
              </Space>
            </Option>
          ))}
        </Select>
      </div>
      <MainHeaderButtons customClasses="2xl:flex space-x-2  hidden" />
    </div>
  );
};
