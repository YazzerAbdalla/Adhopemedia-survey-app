export interface FavProps {
  campaign_id: string;
  icon: string;
  name: string;
  description: string;
  short_description: string;
  amount: string;
  campaign_os_target: string;
  url?: string;
  instructions?: string;
  instructions_array?: string[];
  goals?: string;
  payout?: string;
  is_multi_reward?: boolean;
  is_market_research?: boolean;
  requires_redirection?: boolean;
  favourite?: number;
}
