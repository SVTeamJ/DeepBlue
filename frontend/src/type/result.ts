export interface ResultData {
  fields: DetailData;
  model: string;
  pk: number;
  url: string;
}

interface DetailData {
  closed_season: string;
  description: string;
  fish_type: string;
  open_season: string;
  toxicity: string;
}
