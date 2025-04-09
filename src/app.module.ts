import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenaiService } from './openai/openai.service';
import { ProductsService } from './products/products.service';
import { CurrencyService } from './currency/currency.service';
import { ChatbotController } from './chatbot/chatbot.controller';

@Module({
  imports: [],
  controllers: [AppController, ChatbotController],
  providers: [AppService, OpenaiService, ProductsService, CurrencyService],
})
export class AppModule {}
