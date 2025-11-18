export interface EquipmentItem {
  id: number;
  name: string;
  unit: string;
  price?: number;
  note?: string;
  keywords?: string[];
}

export interface EquipmentCategory {
  name: string;
  items: EquipmentItem[];
}

export interface SearchResult extends EquipmentItem {
  category: string;
}
