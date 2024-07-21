import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TestTakerModuleBase } from "./base/testTaker.module.base";
import { TestTakerService } from "./testTaker.service";
import { TestTakerController } from "./testTaker.controller";
import { TestTakerResolver } from "./testTaker.resolver";

@Module({
  imports: [TestTakerModuleBase, forwardRef(() => AuthModule)],
  controllers: [TestTakerController],
  providers: [TestTakerService, TestTakerResolver],
  exports: [TestTakerService],
})
export class TestTakerModule {}
