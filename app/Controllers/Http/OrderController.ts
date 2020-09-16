import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Order from "App/Models/Order";
import OrderFood from "App/Models/OrderFood";

export default class OrderController {
  public async index(ctx: HttpContextContract) {
    const orders = await Order.query().preload(
      "orderFoods",
      async (orderFood) => await orderFood.preload("food")
    );

    return ctx.response.json(orders);
  }

  public async show(ctx: HttpContextContract) {
    const order = await Order.query()
      .preload(
        "orderFoods",
        async (orderFood) =>
          await orderFood.preload(
            "food",
            async (food) => await food.preload("category")
          )
      )
      .where("id", ctx.params.id)
      .first();

    return ctx.response.json(order);
  }

  public async store(ctx: HttpContextContract) {
    const order = await Order.create(ctx.request.all());

    return ctx.response.json(order);
  }

  public async update(ctx: HttpContextContract) {
    let order = await Order.find(ctx.params.id);
    const body = ctx.request.all();
    if (!order) {
      return ctx.response.status(400).json("usuário não encontrado");
    }
    order.tableId = body.tableId;
    order.totalCostumer = body.totalCostumer;
    order.mainCostumerName = body.mainCostumerName;

    await order.save();
    await order.refresh();

    return ctx.response.json(order);
  }

  public async destroy(ctx: HttpContextContract) {
    let order = await Order.findOrFail(ctx.params.id);

    await order.delete();

    return ctx.response.status(204).json("");
  }

  public async storeFood(ctx: HttpContextContract) {
    const body = ctx.request.all();
    const orderFood = await OrderFood.create({
      orderId: ctx.params.id,
      foodId: ctx.params.foodId,
      quantity: body.quantity,
    });

    await orderFood.preload("food");
    await orderFood.preload("order");

    return ctx.response.json(orderFood);
  }

  public async updateFood(ctx: HttpContextContract) {
    const body = ctx.request.all();
    let orderFood = await OrderFood.query()
      .where("foodId", ctx.params.foodId)
      .andWhere("orderId", ctx.params.id)
      .first();

    if (!orderFood) {
      return ctx.response.status(404).json("comanda não encontrada");
    }

    orderFood.quantity = body.quantity;

    await orderFood.save();
    await orderFood.refresh();

    await orderFood.preload("food");
    await orderFood.preload("order");
    return ctx.response.json(orderFood);
  }
}
