import React from "react";
import "antd/dist/antd.less";
import "./index.css";
import { Layout, Menu, Icon, Row, Col } from "antd";
import Logo from "./Logo";
import Portfolio from "./Portfolio";
import Create from "./Create";
import Configure from "./Configure";
import NotFound from "./NotFound";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapesed] = React.useState(false);
  const [key, setKey] = React.useState(1);

  React.useEffect(() => {
    const url = window.location.href.toString();
    if (url.includes("/", url.length - 1)) {
      setKey("0");
    } else if (url.includes("/portfolio", url.length - 10)) {
      setKey("0");
    } else if (url.includes("/create", url.length - 7)) {
      setKey("1");
    } else if (url.includes("/configure", url.length - 10)) {
      setKey("2");
    }
  }, []);

  const handleChange = e => {
    console.log("e", e);
    setKey(e.key);
  };

  return (
    <Router>
      <div className="App">
        <Layout style={{ minHeight: "100vh" }}>
          <Sider
            collapsible
            collapsed={collapsed}
            onCollapse={() => setCollapesed(!collapsed)}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              selectedKeys={[key]}
              onClick={e => handleChange(e)}
              defaultSelectedKeys={["1"]}
              style={{ textAlign: "left" }}
            >
              <Menu.Item key="0">
                <Link to="/portfolio">
                  {" "}
                  <Icon
                    style={{ fontSize: "16px" }}
                    type="appstore"
                    theme="filled"
                  />
                  <span>Portfolio</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/create">
                  {" "}
                  <Icon
                    style={{ fontSize: "16px" }}
                    type="plus-square"
                    theme="filled"
                  />
                  <span>Create</span>
                </Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/configure">
                  {" "}
                  <Icon
                    style={{ fontSize: "16px" }}
                    type="tool"
                    theme="filled"
                  />
                  <span>Configure</span>
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout style={{ backgroundColor: "#171717" }}>
            <Header
              style={{
                background: "#171717",
                padding: 0,
                height: "128px",
                fontSize: "24px",
                color: "#fff"
              }}
            >
              <Logo/>
 
                  <span style={{}}>pitico.cash</span>
       
            </Header>
            <Content style={{ margin: "0 16px", backgroundColor: "#171717" }}>
              <div
                style={{
                  padding: 24,
                  background: "#f0f2f5",
                  minHeight: 360,
                  backgroundColor: "#171717"
                }}
              >
                <Switch>
                  <Route exact path="/" component={Portfolio} />
                  <Route path="/portfolio" component={Portfolio} />
                  <Route path="/create" component={Create} />
                  <Route path="/configure" component={Configure} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
};

export default App;
