import React from "react";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import { Main } from "./pages/main";
import { ConfigProvider } from "antd";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#4996ff",
          controlItemBgActive: "#e9efff",
          controlItemBgHover: "#eee",
          colorBorderBg: "#4996ff",
          colorPrimaryText: "#fff",
          // Alias Token
          colorBgContainer: "#fff",
        },
      }}
    >
      <AppLayout>
        <Main />
      </AppLayout>
    </ConfigProvider>
  );
}

export default App;
