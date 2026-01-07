import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 lg:hidden z-40 p-4 bg-gradient-to-t from-background via-background to-transparent">
      <Button variant="accent" size="xl" className="w-full">
        <Calendar className="w-5 h-5" />
        Speak with Our Team
      </Button>
    </div>
  );
}
