import { Divider, Tag } from "antd";

export const ListHeaderData = ({
  customClasses,
}: {
  customClasses?: string;
}) => {
  return (
    <div className={`${customClasses} items-center`}>
      <div className="md:text-lg  text-prim">Qualified</div>
      <Divider className="mx-4" type="vertical" />
      <div className="md:text-lg  text-[#777] flex items-center">
        <p>Task </p>
        <Tag className="ml-1 mr-0 rounded-full" bordered={false}>
          25
        </Tag>
      </div>
      <Divider className="mx-4" type="vertical" />
      <div className="md:text-lg  text-[#777] flex items-center">
        <p>Disqualified</p>
        <Tag className="ml-1 mr-0 rounded-full" bordered={false}>
          73
        </Tag>
      </div>
    </div>
  );
};
