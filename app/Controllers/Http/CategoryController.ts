import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Category from "App/Models/Category";

export default class CategoryController {
  public async index(ctx: HttpContextContract) {
    const categories = await Category.query().preload("foods")

    return ctx.response.json(categories);
  }

  public async show(ctx: HttpContextContract) {
    const category = await Category.query().preload("foods").where("id", ctx.params.id);

    return ctx.response.json(category);
  }

  public async store(ctx: HttpContextContract) {
    const category = await Category.create(ctx.request.all());

    return ctx.response.json(category);
  }

  public async update(ctx: HttpContextContract) {
    let category = await Category.find(ctx.params.id);
    const body = ctx.request.all();
    if (!category) {
      return ctx.response.status(400).json("usuário não encontrado");
    }
    category.name = body.name;
    category.description = body.description;

    await category.save();
    await category.refresh();

    return ctx.response.json(category);
  }
  
  public async destroy(ctx: HttpContextContract) {
    let category = await Category.findOrFail(ctx.params.id);
    
    await category.delete()
    
    return ctx.response.status(204).json("");
  }
}
