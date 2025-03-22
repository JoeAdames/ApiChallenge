import AgeProps from "@/interfaces/age/AgeProps";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function AgeSelect({ selectedAge, onSelectAge, uniqueAges, name}: AgeProps) {

  return (
    <>
        <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder={name} />
        </SelectTrigger>
        <SelectGroup>
          <SelectContent>
          {uniqueAges.map((age) => (
            <SelectItem key={age} value={JSON.stringify(age)}>
          {age}
        </SelectItem>
      ))}
          </SelectContent>
        </SelectGroup>
      </Select>
    <Select value={JSON.stringify(selectedAge) ?? ''} onValueChange={(e) => onSelectAge(e ? Number(e) : undefined)}>
    </Select>
    </>
  );
}