const fs = require('fs');
const csv = require('fast-csv');
const { v4: uuidv4 } = require('uuid');

const entries = 1000;
const file = fs.createWriteStream('data.csv');
const csvStream = csv.format({ headers: true });
csvStream.pipe(file);

const generateRandomBoolean = () => {
    return Math.random() >= 0.1 ? 'Success' : 'Failure';
};
const generateNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
};

const accountNumbers = [12345678, 23456789, 34567890, 45678901, 56789012, 67890123, 78901234, 89012345, 90123456, 01234567];

const getAccNum = () => {
    const randomIndex = Math.floor(Math.random() * accountNumbers.length);
    return accountNumbers[randomIndex];
};

for (let i = 0; i < entries; i++) {
    const data = {
        ReferenceRewardID: uuidv4(),
        AccountNumber: getAccNum(),
        RewardID: uuidv4(),
        OSCKey: "TM-" + generateNumber(),
        ReferenceRewardID: "Test-001",
        Amount: 10.0,
        FunderID: "TMPAYM",
        TypeOfReward: "Account",
        TransactionTime: "2022-12-2",
        RewardStatus: generateRandomBoolean(),
        ClubcardNumber: generateNumber(),
        TraceId: "TM:MOBILEAPP:" + uuidv4(),
    };
    csvStream.write(data);
}



csvStream.end();
