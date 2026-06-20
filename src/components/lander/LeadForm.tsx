import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";
import { planOptions } from "@/data/lander";

const schema = z.object({
  firstName: z.string().min(1, "Please enter your first name."),
  businessName: z.string().min(1, "Please enter your business name."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  plan: z.string().min(1, "Please choose a plan."),
});

type FormValues = z.infer<typeof schema>;

const inputClass =
  "w-full rounded-xl border border-transparent bg-muted/70 px-4 h-12 text-foreground placeholder:text-foreground/35 focus:outline-none focus:bg-card focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all";

const labelClass = "block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-foreground/55 mb-1.5";

export function LeadForm({ defaultPlan }: { defaultPlan?: string }) {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { firstName: "", businessName: "", phone: "", plan: defaultPlan ?? planOptions[1] },
  });

  // Preselect the plan when a pricing card sends the visitor here.
  useEffect(() => {
    if (defaultPlan) setValue("plan", defaultPlan);
  }, [defaultPlan, setValue]);

  const onSubmit = async (values: FormValues) => {
    // TODO: connect this to your GoHighLevel inbound webhook (or Supabase) so
    // submissions actually create a lead. Right now it validates and confirms
    // on screen only — no data leaves the browser.
    // Example: await fetch(GHL_WEBHOOK_URL, { method: "POST", body: JSON.stringify(values) });
    await new Promise((r) => setTimeout(r, 500));
    console.log("Lead submitted (not yet wired to a CRM):", values);
    toast.success("Got it — we'll reach out fast.", {
      description: "Your details are in. Expect a call or text shortly.",
    });
    reset({ firstName: "", businessName: "", phone: "", plan: values.plan });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left" noValidate>
      <div>
        <label htmlFor="firstName" className={labelClass}>First name</label>
        <input id="firstName" className={inputClass} placeholder="Your first name" {...register("firstName")} />
        {errors.firstName && <p className="mt-1 text-sm text-destructive">{errors.firstName.message}</p>}
      </div>

      <div>
        <label htmlFor="businessName" className={labelClass}>Business name</label>
        <input id="businessName" className={inputClass} placeholder="Your business" {...register("businessName")} />
        {errors.businessName && <p className="mt-1 text-sm text-destructive">{errors.businessName.message}</p>}
      </div>

      <div>
        <label htmlFor="phone" className={labelClass}>Phone number</label>
        <input id="phone" type="tel" className={inputClass} placeholder="(662) 555-0123" {...register("phone")} />
        {errors.phone && <p className="mt-1 text-sm text-destructive">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="plan" className={labelClass}>
          Which plan are you interested in?
        </label>
        <select id="plan" className={`${inputClass} appearance-none`} {...register("plan")}>
          {planOptions.map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
        {errors.plan && <p className="mt-1 text-sm text-destructive">{errors.plan.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-lk btn-lk-primary w-full px-6 mt-2" style={{ height: "3.25rem" }}>
        {isSubmitting ? "Sending…" : "Let's Build Your System"} <ArrowRight className="w-4 h-4" />
      </button>
    </form>
  );
}
