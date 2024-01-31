import { compareAsc, format } from "date-fns";
import Select from "@radix-ui/react-select";

export function DateSelector() {
  // Session Times
  const sessionTimes = [
    new Date(2023, 3, 9),
    new Date(2024, 6, 9),
    new Date(2024, 9, 9),
    new Date(2024, 12, 9),
  ];

  const sortedTimes = sessionTimes.sort((a, b) => compareAsc(a, b));

  return (
    <Select.Root>
      <Select.Trigger>
        <Select.Value
          placeholder="Select date"
          defaultValue={sortedTimes[0].toISOString()}
        />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport>
            {sortedTimes.map((date) => (
              <Select.Item key={date.toISOString()} value={date.toISOString()}>
                <Select.ItemText>{format(date, "yyyy-MM-dd")}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
