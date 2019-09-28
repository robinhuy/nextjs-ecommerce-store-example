import Router from 'next/router';
import { withFirebase } from 'lib/with-firebase';
import { useDispatch } from 'react-redux';
import { setEmail } from 'store/actions';

import { Layout, Avatar, Menu, Dropdown, Icon } from 'antd';
const { Header } = Layout;

const AdminHeader = ({ firebase, userEmail }) => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    firebase.signOut();
    dispatch(setEmail(''));
    Router.push('/admin/login');
  }

  const menu = (
    <Menu onClick={handleSignOut}>
      <Menu.Item key="0">Sign out</Menu.Item>
    </Menu>
  );

  return (
    <Header style={{ background: '#fff', padding: 0 }}>
      <div style={{ float: 'right', paddingRight: 16 }}>
        <Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
          <a href="#">
          <Avatar icon="user" /> {userEmail}  <Icon type="down" />
          </a>
        </Dropdown>
      </div>
    </Header>
  );
};

export default withFirebase(AdminHeader);
