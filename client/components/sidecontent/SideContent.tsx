import React from 'react';
import AllTest from '../AllTest/AllTest';
import CreateTest from '../CreateTest/CreateTest';
import NewTestBtn from '../NewTestBtn/NewTestBtn';

import st from './sidecontent.module.scss'

const SideContent: React.FC = () => {
    return (
        <div className={st.sideContent}>
           {/* <NewTestBtn />
           <AllTest /> */}
           <CreateTest />
        </div>
    );
};

export default SideContent;