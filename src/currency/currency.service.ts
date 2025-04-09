import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CurrencyService {

  private readonly apiUrl = 'https://openexchangerates.org/api/latest.json';
  private readonly apiKey = process.env.OPEN_EXCHANGE_API_KEY; // API key from Open Exchange Rates

  // Function to convert currency
  async convertCurrencies(amount: number, from: string, to: string): Promise<number> {
    const response = await axios.get(`${this.apiUrl}?app_id=${this.apiKey}`);
    const rates = response.data.rates;

    if (rates[from] && rates[to]) {
      const convertedAmount = (amount / rates[from]) * rates[to];
      return convertedAmount;
    }

    throw new Error('Currency conversion failed.');
  }
}
