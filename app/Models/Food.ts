import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
} from "@ioc:Adonis/Lucid/Orm";
import Category from "./Category";

export default class Food extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column({ columnName: "category_id" })
  public categoryId: number;

  @column()
  public name: string;

  @column()
  public price: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Category)
  category: BelongsTo<typeof Category>;
}
