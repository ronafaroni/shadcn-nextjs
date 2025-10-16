import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="grid grid-cols-3 gap-8">
      {"abcdefghi".split("").map((letter) => (
        <Skeleton key={letter} />
      ))}
    </div>
  );
}
