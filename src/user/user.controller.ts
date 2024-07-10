import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
  Query,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  /*
  GET /users or query parameter
  GET /users/:id
  POST /users
  PATCH /users/:id
  DELETE /users/:id
  */

  @Get()
  findAll(@Query('role') role?: 'ENTERN' | 'ENGINEER' | 'ADMIN') {
    return [];
  }

  @Get('enternships')
  findAllEnternships() {
    return [];
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: {}) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return [];
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
