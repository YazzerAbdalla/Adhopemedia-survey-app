export interface CardsProps {
  campaign_id: string;
  icon: string;
  name: string;
  url: string;
  instructions: string;
  instructions_array: string[];
  description: string;
  short_description: string;
  goals: string;
  payout: string;
  amount: number;
  is_multi_reward: boolean;
  is_market_research: boolean;
  requires_redirection: boolean;
  campaign_os_target: string;
}
