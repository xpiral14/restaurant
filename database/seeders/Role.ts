import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Role from "App/Models/Role";

export default class RoleSeeder extends BaseSeeder {
  public async run() {
    await Role.createMany([
      {
        id: 1,
        name: "READ_CATEGORY",
      },
      {
        id: 2,
        name: "WRITE_CATEGORY",
      },
      {
        id: 3,
        name: "READ_FOOD",
      },
      {
        id: 4,
        name: "WRITE_FOOD",
      },
      {
        id: 5,
        name: "READ_ORDER",
      },
      {
        id: 6,
        name: "WRITE_ORDER",
      },
      {
        id: 7,
        name: "READ_ROLE",
      },
      {
        id: 8,
        name: "WRITE_ROLE",
      },
      {
        id: 9,
        name: "READ_TABLE",
      },
      {
        id: 10,
        name: "WRITE_TABLE",
      },
      {
        id: 11,
        name: "READ_USER",
      },
      {
        id: 12,
        name: "WRITE_USER",
      },
    ]);
  }
}
