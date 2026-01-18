import { motion } from "framer-motion";
import { Scan } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentDialog } from "@/components/AppointmentDialog";

export function StickyAuditButton() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.4, ease: "easeOut" }}
    >
      <AppointmentDialog>
        <Button
          variant="accent"
          size="lg"
          className="shadow-lg hover:shadow-xl transition-all duration-300 group gap-2"
        >
          <Scan className="w-4 h-4 group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Systems Audit</span>
          <span className="sm:hidden">Audit</span>
        </Button>
      </AppointmentDialog>
    </motion.div>
  );
}
