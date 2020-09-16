import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class Categories extends BaseSchema {
  protected tableName = "categories";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id").primary().unsigned();
      table.string("name").notNullable();
      table.string("description").notNullable();
      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
