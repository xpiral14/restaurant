import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Tables extends BaseSchema {
  protected tableName = "tables";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id").primary().unsigned();
      table.string("name").notNullable().unique();
      table.boolean("is_available").defaultTo(true).notNullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
