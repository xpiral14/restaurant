import { DateTime } from "luxon";
import { BaseModel, column, hasMany, HasMany } from "@ioc:Adonis/Lucid/Orm";
import OrderFood from "./OrderFood";

export default class Order extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column({ columnName: "table_id" })
  tableId: number;

  @column({ columnName: "total_costumer" })
  totalCostumer: number;

  @column({ columnName: "main_costumer_name" })
  mainCostumerName: string;

  @column({ columnName: "is_open" })
  isOpen: boolean;

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;

  @hasMany(() => OrderFood)
  orderFoods: HasMany<typeof OrderFood>;
}
