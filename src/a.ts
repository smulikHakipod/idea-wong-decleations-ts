import {MikroORM} from "@mikro-orm/core";

declare  const mikroorm : MikroORM;

mikroorm.em.findOneOrFail()