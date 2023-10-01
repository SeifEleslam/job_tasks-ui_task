import { Input, Tooltip } from "antd";
import {
  InfoCircleOutlined,
  SearchOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { FiltersCard } from "./FiltersCard";
import { useRef, useState } from "react";

export const MainFilter = ({
  selectedCount,
  setSearchVal,
}: {
  selectedCount: number;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const interveal = useRef<any>();
  const [loading, setLoading] = useState(false);
  const search = (val: string) => {
    setLoading(true);
    clearInterval(interveal.current);
    interveal.current = setInterval(() => {
      setSearchVal(val);
      setLoading(false);
    }, 700);
  };
  return (
    <div className="flex flex-col space-y-6">
      <Input
        onChange={(e) => search(e.target.value)}
        size="large"
        placeholder="Serach by name, edu, exp or #tag"
        prefix={
          <SearchOutlined className="text-[#aaa] text-lg site-form-item-icon" />
        }
        suffix={
          loading ? (
            <LoadingOutlined />
          ) : (
            <Tooltip title="Extra information">
              <InfoCircleOutlined className="text-[#aaa] text-lg" />
            </Tooltip>
          )
        }
      />
      <FiltersCard selectedCount={selectedCount} />
    </div>
  );
};
