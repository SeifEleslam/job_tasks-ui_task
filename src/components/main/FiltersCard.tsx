import { Card, Collapse } from "antd";
import { DownOutlined, FileTextOutlined } from "@ant-design/icons";
import { ReactNode } from "react";
const FILTEERS = [
  "Personal Information",
  "Education",
  "Work Experience",
  "Activity",
  "Advanced Filter",
];

const FilterLabel = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <FileTextOutlined /> <span className="ml-3 text-[#777]">{children}</span>
    </div>
  );
};

export const FiltersCard = ({
  selectedCount,
  customClasses,
}: {
  selectedCount: number;
  customClasses?: string;
}) => {
  return (
    <Card
      className={customClasses}
      title={
        <div className=" border-3 border-[#aaa] flex justify-between items-center">
          <p className="text-lg text-[#777]">Filters</p>
          <p className="text-[#aaa] text-md font-light">
            #{selectedCount} selected
          </p>
        </div>
      }
      bodyStyle={{
        padding: 0,
        overflow: "hidden",
      }}
    >
      <hr className="text-[1px] opacity-25"></hr>
      <Collapse
        expandIconPosition="end"
        expandIcon={(active) => <DownOutlined />}
        size="large"
        style={{
          border: 0,
          background: "white",
        }}
        items={FILTEERS.map((itm, i) => ({
          label: <FilterLabel>{itm}</FilterLabel>,
          showArrow: i !== FILTEERS.length - 1,
        }))}
      />
    </Card>
  );
};
