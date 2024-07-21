import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TestTakerService } from "./testTaker.service";
import { TestTakerControllerBase } from "./base/testTaker.controller.base";

@swagger.ApiTags("testTakers")
@common.Controller("testTakers")
export class TestTakerController extends TestTakerControllerBase {
  constructor(
    protected readonly service: TestTakerService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
