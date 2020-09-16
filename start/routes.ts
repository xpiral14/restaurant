/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from "@ioc:Adonis/Core/Route";

Route.get("/", async () => {
  return { hello: "world" };
});

Route.group(() => {
  Route.resource("users", "UserController").apiOnly().middleware({
    index: "acl:READ_USER",
    show: "acl:READ_USER",
    destroy: "acl:WRITE_USER",
    store: "acl:WRITE_USER",
    update: "acl:WRITE_USER",
  });

  Route.resource("foods", "FoodController").apiOnly().middleware({
    index: "acl:READ_FOOD",
    show: "acl:READ_FOOD",
    destroy: "acl:WRITE_FOOD",
    store: "acl:WRITE_FOOD",
    update: "acl:WRITE_FOOD",
  });

  Route.resource("categories", "CategoryController").apiOnly().middleware({
    index: "acl:READ_CATEGORY",
    show: "acl:READ_CATEGORY",
    destroy: "acl:WRITE_CATEGORY",
    store: "acl:WRITE_CATEGORY",
    update: "acl:WRITE_CATEGORY",
  });

  Route.resource("tables", "TableController").apiOnly().middleware({
    index: "acl:READ_TABLE",
    show: "acl:READ_TABLE",
    destroy: "acl:WRITE_TABLE",
    store: "acl:WRITE_TABLE",
    update: "acl:WRITE_TABLE",
  });

  Route.resource("roles", "RoleController").apiOnly().middleware({
    index: "acl:READ_ROLE",
    show: "acl:READ_ROLE",
    destroy: "acl:WRITE_ROLE",
    store: "acl:WRITE_ROLE",
    update: "acl:WRITE_ROLE",
  });

  Route.resource("orders", "OrderController").apiOnly().middleware({
    index: "acl:READ_ORDER",
    show: "acl:READ_ORDER",
    destroy: "acl:WRITE_ORDER",
    store: "acl:WRITE_ORDER",
    update: "acl:WRITE_ORDER",
  });

  Route.group(() => {
    Route.post("/:id/roles/:roleId", "UserController.addRole");
    Route.delete("/:id/roles/:roleId", "UserController.destroyRole");
  })
    .prefix("users")
    .middleware("acl:WRITE_ORDER");

  Route.group(() => {
    Route.post("/:id/food/:foodId", "OrderController.storeFood").middleware(
      "acl:WRITE_ORDER"
    );

    Route.put("/:id/food/:foodId", "OrderController.updateFood");
  })
    .prefix("orders")
    .middleware("acl:WRITE_ORDER");
}).middleware("auth");

Route.post("/login", "AuthController.login");
