import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ReactNode, useState, cloneElement, isValidElement } from "react";

interface BookCallDialogProps {
  children: ReactNode;
}

/**
 * Primary CTA dialog. Opens the GoHighLevel strategy-call calendar embed.
 * Replace the iframe src with the live GoHighLevel calendar embed when ready.
 */
export function BookCallDialog({ children }: BookCallDialogProps) {
  const [open, setOpen] = useState(false);

  const trigger = isValidElement(children)
    ? cloneElement(children as React.ReactElement, { onClick: () => setOpen(true) })
    : <span onClick={() => setOpen(true)}>{children}</span>;

  return (
    <>
      {trigger}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-3xl w-[95vw] h-[88vh] p-0 overflow-hidden border-border/50 bg-background flex flex-col">
          <DialogHeader className="px-5 py-4 border-b hairline">
            <DialogTitle className="font-display text-2xl font-medium text-center">
              Book a Strategy Call
            </DialogTitle>
            <p className="text-sm text-muted-foreground text-center">
              Pick a time. We will map exactly where you are losing leads.
            </p>
          </DialogHeader>
          <div className="flex-1 overflow-hidden">
            {/* GoHighLevel calendar embed slot */}
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/AlXstlmixEoeJ0nP8wuX"
              className="w-full h-full"
              scrolling="yes"
              style={{ border: "none" }}
              title="Book a Strategy Call"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
