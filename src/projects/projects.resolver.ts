import { Resolver, Query } from '@nestjs/graphql'
import { ProjectsService } from './projects.service'
import { Project } from './projects.model'

@Resolver(() => Project)
export class ProjectsResolver {
    constructor(private projectsService: ProjectsService) {}

    @Query(() => [Project])
    async projects() {
        return this.projectsService.getProjects()
    }
}
