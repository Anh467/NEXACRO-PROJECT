module.exports = (sequelize, Sequelize) => {
    const Regulation = sequelize.define('Regulation', {
      NUM_QD: {
        type: Sequelize.STRING(256),
        primaryKey: true,
        allowNull: false
      },
      DATE_APPLY: {
        type: Sequelize.DATE
      },
      NAME: {
        type: Sequelize.STRING(256)
      },
      STATUS: {
        type: Sequelize.STRING(256)
      },
      POSITION: {
        type: Sequelize.STRING(256)
      },
      DEGREE: {
        type: Sequelize.STRING(256)
      },
      LEVEL_APPLY: {
        type: Sequelize.INTEGER
      },
      COE_SALARY: {
        type: Sequelize.FLOAT
      },
      ALLOWANCE_COE_SALARY: {
        type: Sequelize.FLOAT
      },
      ALLOWANCE_POSITION: {
        type: Sequelize.FLOAT
      },
      ALLOWANCE_RESPONSIBILITY: {
        type: Sequelize.FLOAT
      },
      DATE_COE_SALARY_NEXT_RISE: {
        type: Sequelize.DATE
      },
      APPLING: {
        type: Sequelize.BOOLEAN 
      }
    }, {
        tableName: 'Regulation', 
        timestamps: false, 
      });
  
    return Regulation;
  };
  