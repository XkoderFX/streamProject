import { ObjectId } from "mongoose";
import { Arg, Ctx, Query, Resolver, UseMiddleware } from "type-graphql";
import { User, UserModel } from "../entities/User";
import { ObjectIdScalar } from "../scalars/object-id-scalar";
import { isAuth } from "../middleware/IsAuth";
import { MyContext } from "../types/MyContext";

@Resolver(() => User)
export class UserResolver {
    @Query(() => User, { nullable: true })
    async user(@Arg("id", () => ObjectIdScalar) id: ObjectId) {
        return await UserModel.findById(id);
    }

    @Query(() => User, { nullable: true })
    @UseMiddleware(isAuth)
    async currentUser(@Ctx() ctx: MyContext) : Promise<User | null> {
        return await UserModel.findById()
    }
    
}




