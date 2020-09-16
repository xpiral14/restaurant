import { DateTime } from "luxon";
import { BaseModel, column } from "@ioc:Adonis/Lucid/Orm";

export default class Table extends BaseModel {
  @column({ isPrimary: true })
  public id: number;

  @column()
  name: string;

  @column({ columnName: "is_available" })
  isAvailable: boolean;
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime;

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime;
}
