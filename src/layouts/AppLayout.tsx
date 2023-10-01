import React, { ReactNode, useState } from "react";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Avatar } from "antd";

const { Sider, Content } = Layout;

export default function AppLayout({ children }: { children: ReactNode }) {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        className="px-3 shadow-lg"
        style={{ overflowY: "scroll" }}
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
      >
        <div className="flex flex-col h-full py-2">
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: "100%",
              height: 64,
            }}
          />
          <Menu
            style={{
              overflow: "scroll",
              borderWidth: 0,
            }}
            className="grow"
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={LAYOUTITEMS}
          />
          <Menu
            style={{ borderWidth: 0, textAlign: "center" }}
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            items={[
              {
                style: { marginBottom: 15 },
                key: "2",
                icon: <VideoCameraOutlined />,
                label: "link 1",
              },
            ]}
          />
          <div
            className="overflow-hidden flex px-2 space-x-2 items-center justify-contet-center"
            style={{ textAlign: "center" }}
          >
            <div
              className={"transiion duration-300 " + (!collapsed ? "pl-2" : "")}
            >
              <Avatar
                style={{
                  cursor: "pointer",
                  verticalAlign: "middle",
                  background: "#e6f4ff",
                  color: "#1677ff",
                }}
                size="large"
              >
                {"AS"}
              </Avatar>
            </div>

            <div
              className={`w-96 transition text-center duration-300 ${
                !collapsed ? "opacity-1" : "opacity-0"
              }`}
            >
              <p className={`w-[100px]`}>Aasdas Srat</p>
            </div>
          </div>
        </div>
      </Sider>
      <Layout>
        {/* <Header style={{ padding: 0, background: colorBgContainer }}></Header> */}
        <Content
          style={{
            background: "#f9faff",
            overflowY: "scroll",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}

export const LAYOUTITEMS = [
  {
    style: { marginBottom: 15 },
    key: "0",
    icon: <HomeOutlined />,
    label: "nav 0",
  },
  {
    style: { marginBottom: 15 },
    key: "1",
    icon: <UserOutlined />,
    label: "nav 1",
  },
  {
    style: { marginBottom: 15 },
    key: "2",
    icon: <VideoCameraOutlined />,
    label: "nav 2",
  },
  {
    style: { marginBottom: 15 },
    key: "3",
    icon: <UploadOutlined />,
    label: "nav 3",
  },
];
