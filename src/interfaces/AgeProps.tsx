export default interface AgeProps {
    selectedAge: number | undefined;
    onSelectAge: (age: number | undefined) => void;
    uniqueAges: number[];
    name: string | undefined;
  }