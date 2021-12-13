'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('jobs',
     [       
      {"jobname": "accounting+finance"},
      {"jobname": "admin / office"},
      {"jobname": "arch / engineering"},
      {"jobname": "art / media / design"},
      {"jobname": "biotech / science"},
      {"jobname": "business / mgmt"},
      {"jobname": "customer service"},
      {"jobname": "education"},
      {"jobname": "etc / misc"},
      {"jobname": "food / bev / hosp"},
      {"jobname": "general labor"},
      {"jobname": "government"},
      {"jobname": "human resources"},
      {"jobname": "legal / paralegal"},
      {"jobname": "manufacturing"},
      {"jobname": "marketing / pr / ad"},
      {"jobname": "medical / health"},
      {"jobname": "nonprofit sector"},
      {"jobname": "real estate"},
      {"jobname": "retail / wholesale"},
      {"jobname": "sales / biz dev"},
      {"jobname": "salon / spa / fitness"},
      {"jobname": "security"},
      {"jobname": "skilled trade / craft"},
      {"jobname": "software / qa / dba"},
      {"jobname": "systems / network"},
      {"jobname": "technical support"},
      {"jobname": "transport"},
      {"jobname": "tv / film / video"},
      {"jobname": "web / info design"},
      {"jobname": "writing / editing"}
  ]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
