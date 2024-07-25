export interface Stats {
  average_block_time: number;
  coin_image: string;
  coin_price: null;
  coin_price_change_percentage: null;
  gas_price_updated_at: string;
  gas_prices: {
    slow: number;
    average: number;
    fast: number;
  };
  gas_prices_update_in: number;
  gas_used_today: string;
  market_cap: string;
  network_utilization_percentage: number;
  secondary_coin_price: null;
  static_gas_price: null;
  total_addresses: string;
  total_blocks: string;
  total_gas_used: string;
  total_transactions: string;
  transactions_today: string;
  tvl: null;
}
