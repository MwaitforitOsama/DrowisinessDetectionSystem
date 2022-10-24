import { Layout, Menu } from "antd";
import React, { useEffect, useState } from "react";
import { getStatus } from "./utils";

const { Header, Content, Footer } = Layout;

const App = () => {
  const [status, setStatus] = useState("");
  const fetchStatus = () => {
    setInterval(async () => {
      console.log("Fetching ...");
      const { data } = await getStatus();
      setStatus(data);
      console.log("Res ::", data);
    }, 3000);
  };

  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={new Array(1).fill(null).map((_, index) => {
            const key = index + 1;
            return {
              key,
              label: `DROWSINESS DETECTION SYSTEM(DDS)`,
            };
          })}
        />
      </Header>
      <Content style={{ padding: "0 50px", textAlign: "center" }}>
        <div className="site-layout-content">
          Driver Drowsy or not: {status}
        </div>
        <br></br>
        <div className="site-layout-content"> Gas Detected: </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        DDS ©2022 Created by Mohammad Osama and Sons
      </Footer>
    </Layout>
  );
};

export default App;
