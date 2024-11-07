import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { SkillsService } from './skills.service'
import { Skill } from '../skill.model/skill.model'

@Resolver(() => Skill)
export class SkillsResolver {
    constructor(private skillsService: SkillsService) {}

    @Query(() => [Skill])
    async skills() {
        return this.skillsService.getSkills()
    }

    @Mutation(() => Skill)
    async createSkill(
        @Args('name') name: string,
        @Args('proficiency') proficiency: number
    ) {
        return this.skillsService.createSkill(name, proficiency)
    }
}
