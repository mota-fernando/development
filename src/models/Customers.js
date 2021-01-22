const { Model, DataTypes } = require('sequelize');

class Customers extends Model {
	
    static init(sequelize) {
		
        super.init({
			
            name: DataTypes.STRING,
			
            surname: DataTypes.STRING,
			
            email: DataTypes.STRING
			
        }, {
            
			sequelize
        })
    }

}
module.exports = Customers;