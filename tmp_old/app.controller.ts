import { Controller, Get, Post, Body, Redirect } from '@nestjs/common';
import { Render, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  
  @Get('create')
  @Render('create-article')
  getForm(): void {
    return;
  }

  @Post('/')
  @Redirect('/', 301)
  create(@Body() body: any): void {
  }
 
  @Get()
  @Render('index')
  index() {
  }

  @Get(':id')
  @Render('article')
  getById(@Param('id', ParseIntPipe) id: number) {
  }
}
