const fs = require('fs');
const csv = require('fast-csv');
const { v4: uuidv4 } = require('uuid');
const entries = 15;
const file = fs.createWriteStream('data.csv');
const csvStream = csv.format({ headers: false });
const functions = require('./common-functions');
csvStream.pipe(file);


const accountNumbers = [12345678, 23456789, 34567890, 45678901, 56789012, 67890123, 78901234, 89012345, 90123456, 01234567];



for (let i = 0; i < entries; i++) {
    const data = {
        ReferenceRewardID: uuidv4(),
        AccountNumber: functions.getAccNum(accountNumbers),
        RewardID: uuidv4(),
        OSCKey: "TM-" + functions.generateNumber(6),
        ReferenceRewardID: "Test-001",
        Amount: 10.0,
        FunderID: "TMPAYM",
        TypeOfReward: functions.generateRandomBoolean('Account','Subscription'),
        TransactionTime: "2022-12-2",
        RewardStatus: functions.generateRandomBoolean('success','failure'),
        ClubcardNumber: functions.generateNumber(7),
        TraceId: "TM:MOBILEAPP:" + uuidv4(),
    };
    csvStream.write(data);
}



csvStream.end();
