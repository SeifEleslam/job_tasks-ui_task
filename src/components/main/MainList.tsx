import { Avatar, Checkbox, Divider, List, Tag } from "antd";
import { CheckboxChangeEvent } from "antd/es/checkbox";
import { useEffect, useState } from "react";
import { MockData } from "./enum";

export const MainList = ({
  data,
  setSelectedCount,
}: {
  data: MockData[];
  setSelectedCount: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [checked, setChecked] = useState<string[]>([]);
  const [indeterminate, setIndeterminate] = useState(false);
  const [checkAll, setCheckAll] = useState(false);

  useEffect(() => {
    setIndeterminate(!!checked.length && checked.length !== data.length);
    setCheckAll(!!checked.length && checked.length === data.length);
    setSelectedCount(checked.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked, data]);
  useEffect(() => {
    setCheckAll(false);
    setIndeterminate(false);
    setChecked([]);
  }, [data]);

  const onCheckAllChange = (e: CheckboxChangeEvent) => {
    setChecked(e.target.checked ? data.map((item: MockData) => item.id) : []);
    setCheckAll(e.target.checked);
  };

  return (
    <List
      className="bg-[#fff] p-4 rounded-xl"
      header={
        <div className="flex items-center justify-between">
          <div className="flex space-x-6 items-center">
            <Checkbox
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
              checked={checkAll}
            ></Checkbox>
            <div className="text-lg text-prim font-bold">
              {data.length} Candidates
            </div>
          </div>
          <div className="flex items-center">
            <div className="text-lg text-prim">Qualified</div>
            <Divider className="mx-4" type="vertical" />
            <div className="text-lg text-[#777] flex items-center">
              <p>Task </p>
              <Tag className="ml-1 mr-0 rounded-full" bordered={false}>
                25
              </Tag>
            </div>
            <Divider className="mx-4" type="vertical" />
            <div className="text-lg text-[#777] flex items-center">
              <p>Disqualified</p>
              <Tag className="ml-1 mr-0 rounded-full" bordered={false}>
                73
              </Tag>
            </div>
          </div>
        </div>
      }
    >
      <Checkbox.Group
        className="block"
        value={checked}
        onChange={(checkedValues) => {
          setChecked(checkedValues as string[]);
        }}
      >
        {data.map((user: MockData) => (
          <List.Item key={user.id}>
            <div className="flex items-center space-x-12">
              <Checkbox value={user.id} />
              <Avatar size="large" className="bg-sec text-prim scale-[2] mx-4">
                {user.avatar}
              </Avatar>
              <div>
                <p className="leading-[2] text-xl font-bold">{user.name}</p>
                <p className="leading-[1] text-md font-light">
                  {user.location}
                </p>
                <p className="leading-[1] text-lg text-[#777] font-light">
                  {user.education}
                </p>
                <div>
                  {user.tags.map((tag, i) => (
                    <span key={tag + i}>
                      <span className="text-prim">#{tag}</span>
                      {i !== user.tags.length - 1 && (
                        <Divider className="opacity-0" type="vertical" />
                      )}
                    </span>
                  ))}
                </div>
                <div className="my-4">
                  {user.hints.map((hint, i) => (
                    <div className="inline" key={hint + i}>
                      <Tag
                        className="px-2 py-1 ml-1 mr-0 rounded-full"
                        bordered={false}
                        color="geekblue"
                      >
                        {hint}
                      </Tag>
                      {i !== user.hints.length - 1 && (
                        <Divider className="opacity-0" type="vertical" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </List.Item>
        ))}
      </Checkbox.Group>
    </List>
  );
};
