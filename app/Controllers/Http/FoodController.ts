import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Food from "App/Models/Food";

export default class FoodController {
  public async index(ctx: HttpContextContract) {
    const foods = await Food.query().preload("category");

    return ctx.response.json(foods);
  }

  public async show(ctx: HttpContextContract) {
    const food = await Food.query().preload("category").where("id", ctx.params.id).first();

    return ctx.response.json(food);
  }

  public async store(ctx: HttpContextContract) {
    const food = await Food.create(ctx.request.all());

    return ctx.response.json(food);
  }

  public async update(ctx: HttpContextContract) {
    let food = await Food.find(ctx.params.id);
    const body = ctx.request.all();
    if (!food) {
      return ctx.response.status(400).json("usuário não encontrado");
    }
    food.name = body.name;
    food.categoryId = body.categoryId;
    food.price = body.price;

    await food.save();
    await food.refresh();

    return ctx.response.json(food);
  }
  
  public async destroy(ctx: HttpContextContract) {
    let food = await Food.findOrFail(ctx.params.id);
    
    await food.delete()
    
    return ctx.response.status(204).json("");
  }
}
