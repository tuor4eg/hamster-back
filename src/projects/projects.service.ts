import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'

@Injectable()
export class ProjectsService {
    constructor(private prisma: PrismaService) {}

    async getProjects() {
        return this.prisma.project.findMany()
    }
}
