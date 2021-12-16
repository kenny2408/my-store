const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class OrderService {

  constructor(){
  }

  async create(data) {
    //const newOrder = await models.Order.create(data);
    //return newOrder;
    const customer = await models.Customer.findAll({
      where: {
        '$user.id$': data.userId
      },
      include: ['user']
    });
    if (!customer) {
      throw boom.notFound('Customer not found');
    }
    const dataOrder = {
      customerId: customer[0].id
    };
    const newOrder = await models.Order.create(dataOrder);
    return newOrder;
  }

  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

  async findByUser(userId) {
    const orders = await models.Order.findAll({
      where: {
        '$customer.user.id$': userId
      },
      include: [
        {
          association: 'customer',
          include: ['user']
        }
      ]
    });
    return orders;
  }

  async find(query) {
    const options = {
      include: []
    }
    const { limit, offset } = query;
    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }
    const orders = await models.Order.findAll(options)
    return orders
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id, {
      include: [
        {
          association: 'customer',
          include: ['user']
        },
        'items'
      ]
    });
    if (!order) {
      throw boom.notFound('order not found');
    }
    return order;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }

}

module.exports = OrderService;
