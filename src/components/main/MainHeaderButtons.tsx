import { Button, Divider, Dropdown } from "antd";
import {
  DownOutlined,
  MailOutlined,
  UserDeleteOutlined,
  UserAddOutlined,
  UserSwitchOutlined,
  TagOutlined,
} from "@ant-design/icons";

export const MainHeaderButtons = ({
  customClasses,
}: {
  customClasses?: string;
}) => {
  return (
    <div className={`${customClasses}`}>
      <div className="flex items-center space-x-4">
        {icons.map((icon, i) => (
          <Button
            key={i}
            className="shadow-g border-0"
            size="large"
            icon={icon}
          />
        ))}
      </div>

      <Divider className="h-full" type="vertical" />
      <Dropdown.Button
        size="large"
        menu={{
          items: [{ label: "test", type: "group" }],
        }}
        type="primary"
        icon={
          <DownOutlined className="text-[white]" style={{ fontSize: 15 }} />
        }
      >
        Move To Video Interview I
      </Dropdown.Button>
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
