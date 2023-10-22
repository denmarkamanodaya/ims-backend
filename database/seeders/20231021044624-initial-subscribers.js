'use strict';
const { v4: uuidv4 } = require('uuid');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('subscribers', [{
      id: uuidv4(),
      phoneNumber: '18675181010',
      username: '16045906403',
      password: 'p@ssw0rd!',
      domain: 'ims.mnc660.mcc302.3gppnetwork.org',
      status: 'ACTIVE',
      features: JSON.stringify({
        callForwardNoReply: {
          provisioned: true,
          destination: 'tel:+18675182800'
        }
      })
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('subscribers', null, {})
  }
};
