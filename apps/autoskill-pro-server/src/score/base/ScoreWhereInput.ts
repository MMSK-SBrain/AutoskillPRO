/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { TestTakerWhereUniqueInput } from "../../testTaker/base/TestTakerWhereUniqueInput";
import { TestWhereUniqueInput } from "../../test/base/TestWhereUniqueInput";

@InputType()
class ScoreWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: IntNullableFilter,
  })
  @Type(() => IntNullableFilter)
  @IsOptional()
  @Field(() => IntNullableFilter, {
    nullable: true,
  })
  score?: IntNullableFilter;

  @ApiProperty({
    required: false,
    type: () => TestTakerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TestTakerWhereUniqueInput)
  @IsOptional()
  @Field(() => TestTakerWhereUniqueInput, {
    nullable: true,
  })
  testTaker?: TestTakerWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: () => TestWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TestWhereUniqueInput)
  @IsOptional()
  @Field(() => TestWhereUniqueInput, {
    nullable: true,
  })
  test?: TestWhereUniqueInput;
}

export { ScoreWhereInput as ScoreWhereInput };