import BaseSchema from "@ioc:Adonis/Lucid/Schema";

export default class UserRoles extends BaseSchema {
  protected tableName = "user_roles";

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.bigIncrements("id").primary().unsigned();

      table
        .bigInteger("user_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .notNullable();
        
      table
        .bigInteger("role_id")
        .unsigned()
        .references("id")
        .inTable("roles")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .notNullable();

      table.timestamps(true);
    });
  }

  public async down() {
    this.schema.dropTable(this.tableName);
  }
}
