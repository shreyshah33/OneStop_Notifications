const exampleEmailList = require('./sample_data.json')

/**
 * Temporary function to get email list for an organization
 * @param {String} organization Organization to get emails for
 * @return {Promise<Array[String]>} List of emails 
 */
module.exports.getEmailRecipientsFor = async (organization) => {
    return Promise.resolve(exampleEmailList[organization])
}