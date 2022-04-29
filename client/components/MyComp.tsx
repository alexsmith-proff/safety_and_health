import React from 'react';

const MyComp = () => {
    let id
    function myTimer(v) {
        console.log('v', v);
        if (v) {
            id = setInterval(() => {
                console.log('clickkk123');

            }, 1000)
        } else {
            clearInterval(id)
        }
        console.log('id', id);
    }
    myTimer(true)
    
    return (
        <div>
            mycomp
        </div>
    );
};

export default MyComp;