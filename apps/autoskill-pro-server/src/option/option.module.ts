import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { OptionModuleBase } from "./base/option.module.base";
import { OptionService } from "./option.service";
import { OptionController } from "./option.controller";
import { OptionResolver } from "./option.resolver";

@Module({
  imports: [OptionModuleBase, forwardRef(() => AuthModule)],
  controllers: [OptionController],
  providers: [OptionService, OptionResolver],
  exports: [OptionService],
})
export class OptionModule {}
