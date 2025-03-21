export default interface FetchDogsProps {
    breeds?: string[];
    zipCodes?: string[];
    ageMin?: number;
    ageMax?: number;
    size?: number;
    from?: string;
    sort?: 'breed:asc' | 'breed:desc' | 'name:asc' | 'name:desc' | 'age:asc' | 'age:desc';
  }