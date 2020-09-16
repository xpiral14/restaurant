import { DateTime } from "luxon";
import {
  BaseModel,
  column,
  manyToMany,
  ManyToMany,
} from "@ioc:Adonis/Lucid/Orm";
import Food from "./Food";

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column({ columnName: "table_id" })
  tableId: number;

  @column({ columnName: "total_costumer" })
  totalCostumer: number;

  @column({ columnName: "main_costumer_name" })
  mainCostumerName: string;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @manyToMany(() => Food, { pivotTable: "order_foods" })
  public foods: ManyToMany<typeof Food>;
}
