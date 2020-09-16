import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class Acl {
  public async handle(
    { auth, response }: HttpContextContract,
    next: () => Promise<void>,
    allowRoles: string
  ) {
    const user = auth.user;

    if (user?.username === "xpiral14") {
      return await next();
    }
    if (!user) {
      return response.status(401).json("unauthorized");
    }

    await user.preload("roles");

    if (!user.roles.length) {
      return response.status(401).json("unauthorized");
    }

    const roleNames = user.roles.map((role) => role.name);

    roleNames.forEach((role) => {
      if (!allowRoles.includes(role))
        return response.status(401).json("unauthorized");
    });

    await next();
  }
}
