export interface Note {
  id: string; 
  title: string;
  content: string;
  category: string;
  importance: 'Low' | 'Medium' | 'High';
  favorite: boolean;
  
  date?: Date;
}
