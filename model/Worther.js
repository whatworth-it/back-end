/*
 * @Author: Yuanyu Guo (Steve) 
 * @Date: 2019-08-30 01:09:21 
 * @Last Modified by: Yuanyu Guo (Steve)
 * @Last Modified time: 2019-09-21 12:39:58
 */
const dynamoose = require('dynamoose');
const uuidv4 = require('uuidv4').default;
const schema = new dynamoose.Schema({
    userId: {
        type: String,
        default: uuidv4(),
        hashKey: true
    },
    status: {
        type: String,
    },
    pdfFile: {
        type: String
    },
    date: {
        type: String
    },
    reateTime: {
        type: String
    },
    updateTime: {
        type: String
    },
    customerName: {
        type: String
    },
    cifNumber: {
        type: String
    },
    accountNumber: {
        type: String
    },
    title: {
        type: String
    },
    fullName: {
        type: String
    },
    lastName: {
        type: String
    },
    birth: {
        type: String
    },
    country: {
        type: String
    },
    nationality: {
        type: String
    },
    residentialStreet: {
        type: String
    },
    residentialSuburb: {
        type: String
    },
    residentialState: {
        type: String
    },
    residentialPostCode: {
        type: String
    },
    residentialCountry: {
        type: String
    },
    correspondenceStreet: {
        type: String
    },
    correspondenceSuburb: {
        type: String
    },
    correspondenceState: {
        type: String
    },
    correspondencePostCode: {
        type: String
    },
    correspondenceCountry: {
        type: String
    },
    contactMobile: {
        type: String
    },
    contactEmail: {
        type: String
    },
    contactHomePhone: {
        type: String
    },
    contactWorkPhone: {
        type: String
    },
    employmentStatus: {
        type: String
    },
    occupation: {
        type: String
    },
    occupationWhere: {
        type: String
    },
    sourceOfWealth: {
        type: String
    },
    personalAnnualIncome: {
        type: String
    }
})
module.exports = dynamoose.model('User', schema);