import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Table from "App/Models/Table";

export default class TableController {
  public async index(ctx: HttpContextContract) {
    const tables = await Table.query().preload("orders");

    return ctx.response.json(tables);
  }

  public async show(ctx: HttpContextContract) {
    const table = await Table.query().preload("orders").where("id", ctx.params.id).first();

    return ctx.response.json(table);
  }

  public async store(ctx: HttpContextContract) {
    const table = await Table.create(ctx.request.all());

    return ctx.response.json(table);
  }

  public async update(ctx: HttpContextContract) {
    let table = await Table.find(ctx.params.id);
    const body = ctx.request.all();
    if (!table) {
      return ctx.response.status(400).json("usuário não encontrado");
    }
    table.name = body.name;
    table.isAvailable = body.isAvailable;

    await table.save();
    await table.refresh();

    return ctx.response.json(table);
  }
  
  public async destroy(ctx: HttpContextContract) {
    let table = await Table.findOrFail(ctx.params.id);
    
    await table.delete()
    
    return ctx.response.status(204).json("");
  }
}
