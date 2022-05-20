import React from 'react';
import AddAnswerText from '../AddAnswerText/AddAnswerText';
import AddQuestionText from '../AddQuestionText/AddQuestionText';
import AllQuestions from '../AllQuestions/AllQuestions';
import AllTest from '../AllTest/AllTest';
import CreateTest from '../CreateTest/CreateTest';
import NewTestBtn from '../NewTestBtn/NewTestBtn';
import SelectAnswer from '../SelectAnswer/SelectAnswer';
import TestComboBox from '../TestComboBox/TestComboBox';

import st from './sidecontent.module.scss'

interface SideContentProps {
    item: number
}

const SideContent: React.FC<SideContentProps> = ({ item }) => {
    return (
        <div className={st.sideContent}>
            {/* {
                item == 0 &&
                <>
                    <NewTestBtn />
                    <AllTest />
                </>
            }
            {
                item == 1 &&
                <>
                    <div>
                        <TestComboBox />

                    </div>
                    <TestComboBox />
                    <AllQuestions />
                </>


            } */}

            {/* <CreateTest /> */}

            {/* <AddQuestionText />
           <AddAnswerText />
           <SelectAnswer /> */}

        </div>
    );
};

export default SideContent;