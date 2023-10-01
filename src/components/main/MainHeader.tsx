import { Button, Divider, Dropdown, Select, Space } from "antd";
import {
  DownOutlined,
  MailOutlined,
  UserDeleteOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { DataItem } from "./enum";
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
  return (
    <div className="flex items-start justify-between space-x-4 w-full my-6">
      <div>
        <h1 className="mb-2 mt-0 text-2xl font-bold text-prim">
          London Internship Program
        </h1>
        <p className="text-s">London</p>
      </div>
      <div>
        <Select
          dropdownAlign={{
            overflow: {
              adjustY: false,
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
          className="text-xl text-prim overflow-hidden customSelect shadow-g b-0 rounded-full w-96"
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
      <div className="flex space-x-2">
        {icons.map((icon, i) => (
          <Button
            key={i}
            className="shadow-g border-0"
            size="large"
            icon={icon}
          />
        ))}
        <Divider className="h-full" type="vertical" />
        <Dropdown.Button
          size="large"
          menu={{ items: [{ label: "test", type: "group" }] }}
          type="primary"
          icon={
            <DownOutlined className="text-[white]" style={{ fontSize: 15 }} />
          }
        >
          Move To Video Interview I
        </Dropdown.Button>
      </div>
    </div>
  );
};

const icons = [
  <TagOutlined
    className="mx-[12px] my-[3px] text-[#aaa]"
    style={{ fontSize: 15 }}
  />,
  <UserDeleteOutlined
    className="mx-[12px] my-[3px] text-[#aaa]"
    style={{ fontSize: 15 }}
  />,
  <UserAddOutlined
    className="mx-[12px] my-[3px] text-[#aaa]"
    style={{ fontSize: 15 }}
  />,
  <UserSwitchOutlined
    className="mx-[12px] my-[3px] text-[#aaa]"
    style={{ fontSize: 15 }}
  />,
  <MailOutlined
    className="mx-[12px] my-[3px] text-[#aaa]"
    style={{ fontSize: 15 }}
  />,
];
