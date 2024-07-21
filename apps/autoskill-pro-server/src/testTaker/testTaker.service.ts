import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TestTakerServiceBase } from "./base/testTaker.service.base";

@Injectable()
export class TestTakerService extends TestTakerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
