import { Controller, Post, Body } from '@nestjs/common';
import { CurrencyService } from 'src/currency/currency.service';


import { OpenaiService } from 'src/openai/openai.service';
import { ProductsService } from 'src/products/products.service';

@Controller('chatbot')
export class ChatbotController {
  constructor(
    private readonly openaiService: OpenaiService,
    private readonly productsService: ProductsService,
    private readonly currencyService: CurrencyService,
  ) {}

  
  // API endpoint to handle user query
  @Post('query')
  async handleQuery(@Body() body: { query: string }): Promise<string> {
    const query = body.query;

    // Handle the query via OpenAI to decide which tool to use
    const response = await this.openaiService.handleChatbotQuery(query);

    if (response.includes('searchProducts')) {
      const productQuery = response.split('(')[1].split(')')[0]; // Extract query
      const products = await this.productsService.searchProducts(productQuery);
      return `Here are 2 products related to your search: ${JSON.stringify(products)}`;
    } else if (response.includes('convertCurrencies')) {
      // Example: "convertCurrencies(350, 'EUR', 'CAD')"
      const [amount, from, to] = response
        .split('(')[1]
        .split(')')[0]
        .split(',')
        .map((val) => val.trim());

      const convertedAmount = await this.currencyService.convertCurrencies(
        parseFloat(amount),
        from,
        to,
      );
      return `The converted amount is: ${convertedAmount} ${to}`;
    }

    return 'Sorry, I could not handle the request.';
  }
}
