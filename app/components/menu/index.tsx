import React from 'react';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  SearchOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';

import routes from '../../router/routes.json';

export default function NavMenu(): JSX.Element {
  return (
    <div data-tid="container">
      <Menu mode="horizontal">
        <Menu.Item key="home" icon={<HomeOutlined />}>
          <Link to={routes.HOME}>首页</Link>
        </Menu.Item>
        <Menu.Item key="parse" icon={<SearchOutlined />}>
          <Link to={routes.Parse}>解析</Link>
        </Menu.Item>
        <Menu.Item key="set" icon={<SettingOutlined />}>
          <Link to={routes.Set}>设置</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
