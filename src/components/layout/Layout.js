import React from 'react';
import Aux from '../../hoc/Auxx';
import Classes from './Layout.css';

const layout = (props) => (
<Aux>
  <div>Toolbar, SideDrawer, Backdrop</div>
  <main className={Classes.Contents}>
  {props.children}
  </main>
</Aux>
);

export default layout;
