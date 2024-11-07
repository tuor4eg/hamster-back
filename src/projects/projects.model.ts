import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Project {
    @Field()
    id: number

    @Field()
    name: string

    @Field()
    description: string

    @Field()
    url: string
}
