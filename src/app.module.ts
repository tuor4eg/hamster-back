import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo'
import { join } from 'path'
import { ProjectsModule } from './projects/projects.module'
import { PrismaService } from './prisma/prisma.service'
import { SkillsService } from './skills/skills/skills.service'
import { SkillsResolver } from './skills/skills/skills.resolver'

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
        }),
        ProjectsModule,
    ],
    providers: [PrismaService, SkillsService, SkillsResolver],
})
export class AppModule {}
