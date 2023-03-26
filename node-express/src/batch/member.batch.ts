import schedule from 'node-schedule'



export const deleteNonMember = schedule.scheduleJob({  minute: 1 }, async(): Promise<void> => {

    console.log('********** start deleteNonMember **********')

    try {

    } catch(error) {
        console.log(error)
    }

    console.log('********** end deleteNonMember **********');

}); 