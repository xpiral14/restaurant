import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Foods extends BaseSchema {
  protected tableName = "foods";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id").primary().unsigned();
      table
        .bigInteger("category_id")
        .unsigned()
        .references("id")
        .inTable("categories")
        .onDelete("SET NULL").onUpdate("CASCADE");
      table.string("name").notNullable();
      table.string("description");

      table.float("price");
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
