import { Injectable } from '@nestjs/common'
import { PrismaService } from '../../prisma/prisma.service'

@Injectable()
export class SkillsService {
    constructor(private prisma: PrismaService) {}

    async getSkills() {
        return this.prisma.skill.findMany()
    }

    async createSkill(name: string, proficiency: number) {
        return this.prisma.skill.create({
            data: {
                name,
                proficiency,
            },
        })
    }
}
