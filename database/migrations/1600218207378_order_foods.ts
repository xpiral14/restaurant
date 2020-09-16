import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class OrderFoods extends BaseSchema {
  protected tableName = "order_foods";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id").primary().unsigned();
      table
        .bigInteger("order_id")
        .unsigned()
        .references("id")
        .inTable("orders");

      table.bigInteger("food_id").unsigned().references("id").inTable("foods");

      table.integer("quantity").defaultTo(1).notNullable();
      
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
