import React from 'react'
import {
  Layout,
  BackTop,
  LocaleProvider,
  // notification,
} from 'antd';
import withRouter from 'umi/withRouter';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import SiderMenu from '../components/SiderMenu/';
import HeaderNav from '../components/HeaderNav/';
import styles from './index.css';
import 'animate.css'
const {
  Sider,
  Header,
  Content,
  Footer,
} = Layout;
function Layouts({ children, location }) {
  return (
    <LocaleProvider locale={zhCN}>
      <Layout className={styles.layout}>
        {/* <ImageViewer />
        <DetailPanel />
        <Player /> */}
        <Sider
          breakpoint="md"
          collapsedWidth="0"
          width={240}
        >
          <SiderMenu />
        </Sider>
        <Layout>
          <BackTop className={styles.backup} />
          <Header style={{ padding: 0 }}>
            <HeaderNav />
          </Header>
          <Content className={styles.content}>
            <div className={styles.main}>
              {children}
            </div>
          </Content>
          <Footer className={styles.footer}>©2018 Created by houjunjie</Footer>
        </Layout>
      </Layout>
    </LocaleProvider>
  )
}

export default withRouter(Layouts);
