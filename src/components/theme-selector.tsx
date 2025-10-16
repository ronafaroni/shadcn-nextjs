"use client";

import { cn } from "@/lib/utils";
import { useThemeConfig } from "@/components/active-theme";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "./ui/label";

const DEFAULT_THEMES = [
  {
    name: "Default",
    value: "default",
  },
  {
    name: "Scaled",
    value: "scaled",
  },
  {
    name: "Mono",
    value: "mono",
  },
];

const COLOR_THEMES = [
  {
    name: "Red",
    value: "red",
  },
  {
    name: "Rose",
    value: "rose",
  },
  {
    name: "Orange",
    value: "orange",
  },
  {
    name: "Green",
    value: "green",
  },
  {
    name: "Blue",
    value: "blue",
  },
  {
    name: "Cyan",
    value: "cyan",
  },
  {
    name: "Amber",
    value: "amber",
  },
  {
    name: "Violet",
    value: "violet",
  },
  {
    name: "Indigo",
    value: "indigo",
  },
  {
    name: "Lime",
    value: "lime",
  },
];

export function ThemeSelector({ className }: React.ComponentProps<"div">) {
  const { activeTheme, setActiveTheme } = useThemeConfig();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      <Label htmlFor="theme-selector" className="sr-only">
        Theme
      </Label>
      <Select value={activeTheme} onValueChange={setActiveTheme}>
        <SelectTrigger
          id="theme-selector"
          size="sm"
          className="bg-secondary text-secondary-foreground border-secondary justify-start shadow-none *:data-[slot=select-value]:w-12"
        >
          <span className="font-medium">Theme:</span>
          <SelectValue placeholder="Select a theme" />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectGroup>
            {DEFAULT_THEMES.map((theme) => (
              <SelectItem
                key={theme.name}
                value={theme.value}
                className="data-[state=checked]:opacity-50"
              >
                {theme.name}
              </SelectItem>
            ))}
          </SelectGroup>
          <SelectSeparator />
          <SelectGroup>
            <SelectLabel>Colors</SelectLabel>
            {COLOR_THEMES.map((theme) => (
              <SelectItem
                key={theme.name}
                value={theme.value}
                className="data-[state=checked]:opacity-50"
              >
                {theme.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
