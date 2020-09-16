import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Orders extends BaseSchema {
  protected tableName = "orders";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id").primary().unsigned();
      table
        .bigInteger("table_id")
        .unsigned()
        .references("id")
        .inTable("tables")
        .notNullable();
      table.integer("total_costumer").notNullable();
      table.string("main_costumer_name");
      table.boolean("is_open").defaultTo(true).notNullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
