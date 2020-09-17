import { DateTime } from "luxon";
import { BaseModel, column, belongsTo, BelongsTo } from "@ioc:Adonis/Lucid/Orm";
import Order from "./Order";
import Food from "./Food";

export default class OrderFood extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column({ columnName: "order_id", serializeAs: null })
  public orderId: number;

  @column({ columnName: "food_id", serializeAs: null })
  public foodId: number;

  @column()
  public quantity: number;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @belongsTo(() => Order)
  order: BelongsTo<typeof Order>;

  @belongsTo(() => Food)
  food: BelongsTo<typeof Food>;

}
