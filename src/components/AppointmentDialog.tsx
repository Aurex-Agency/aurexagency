import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Calendar, Mail, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, useState } from "react";

interface AppointmentDialogProps {
  children: ReactNode;
}

interface ContactOption {
  icon: typeof Calendar;
  title: string;
  description: string;
  action: string;
  href?: string;
  isEmailForm?: boolean;
  gradient: string;
}

const contactOptions: ContactOption[] = [
  {
    icon: Calendar,
    title: "Schedule Your Appointment",
    description: "Book a free 30-minute consultation call with our team",
    action: "Schedule Now",
    href: "https://calendly.com", // Replace with actual scheduling link
    gradient: "from-primary to-primary/80",
  },
  {
    icon: Mail,
    title: "Send Us an Email",
    description: "Get a response within 24 hours from our team",
    action: "Email Us",
    isEmailForm: true,
    gradient: "from-accent/90 to-accent",
  },
  {
    icon: Phone,
    title: "Call Us Today",
    description: "Speak directly with our team during business hours",
    action: "Call Now",
    href: "tel:+16625551234",
    gradient: "from-emerald-500 to-green-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 24,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  },
};

export function AppointmentDialog({ children }: AppointmentDialogProps) {
  const [open, setOpen] = useState(false);
  const [emailFormOpen, setEmailFormOpen] = useState(false);

  const handleOptionClick = (option: ContactOption, e: React.MouseEvent) => {
    if (option.isEmailForm) {
      e.preventDefault();
      setEmailFormOpen(true);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <AnimatePresence>
          {open && (
            <DialogContent className="sm:max-w-lg p-0 overflow-hidden border-border/50 bg-background/95 backdrop-blur-xl shadow-strong">
              <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="p-6 sm:p-8"
              >
                <DialogHeader className="mb-6">
                  <motion.div variants={headerVariants}>
                    <DialogTitle className="font-display text-2xl sm:text-3xl font-bold text-center">
                      How Can We Help You?
                    </DialogTitle>
                    <p className="text-muted-foreground text-center mt-2">
                      Choose the option that works best for you
                    </p>
                  </motion.div>
                </DialogHeader>

                <div className="space-y-4">
                  {contactOptions.map((option) => (
                    <motion.a
                      key={option.title}
                      href={option.href || "#"}
                      target={option.href?.startsWith("http") ? "_blank" : undefined}
                      rel={option.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={(e) => handleOptionClick(option, e)}
                      variants={itemVariants}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`block p-5 rounded-xl bg-gradient-to-br ${option.gradient} text-primary-foreground group cursor-pointer shadow-medium hover:shadow-strong transition-shadow duration-300`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary-foreground/10 backdrop-blur-sm">
                          <option.icon className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-display font-bold text-lg mb-1">
                            {option.title}
                          </h3>
                          <p className="text-primary-foreground/80 text-sm mb-3">
                            {option.description}
                          </p>
                          <span className="inline-flex items-center gap-2 text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                            {option.action}
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <motion.p
                  variants={itemVariants}
                  className="text-center text-xs text-muted-foreground mt-6"
                >
                  We typically respond within 24 hours
                </motion.p>
              </motion.div>
            </DialogContent>
          )}
        </AnimatePresence>
      </Dialog>

      {/* Email Form Modal */}
      <Dialog open={emailFormOpen} onOpenChange={setEmailFormOpen}>
        <DialogContent className="sm:max-w-2xl w-[95vw] h-[85vh] sm:h-[90vh] p-0 overflow-hidden border-border/50 bg-background backdrop-blur-xl shadow-strong flex flex-col">
          <DialogHeader className="p-4 sm:p-6 pb-2 flex-shrink-0">
            <DialogTitle className="font-display text-xl sm:text-2xl font-bold text-center">
              Send Us a Message
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 pb-4 sm:pb-6">
            <div className="w-full min-h-[800px] sm:min-h-[923px] rounded-lg">
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/pNS2YnsEyXrKhWKN1pC4"
                style={{ width: "100%", height: "100%", minHeight: "800px", border: "none", borderRadius: "3px" }}
                id="inline-pNS2YnsEyXrKhWKN1pC4"
                data-layout='{"id":"INLINE"}'
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Aurex Website"
                data-height="923"
                data-layout-iframe-id="inline-pNS2YnsEyXrKhWKN1pC4"
                data-form-id="pNS2YnsEyXrKhWKN1pC4"
                title="Aurex Website"
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
