import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const formSchema = z.object({
  fullName: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(20, "Phone number is too long"),
  age: z.string().min(1, "Please select your age range"),
  location: z.string().trim().min(2, "Please enter your location").max(100, "Location must be less than 100 characters"),
  innovationType: z.string().min(1, "Please select an innovation type"),
  innovationTitle: z.string().trim().min(5, "Title must be at least 5 characters").max(150, "Title must be less than 150 characters"),
  innovationDescription: z.string().trim().min(50, "Please provide at least 50 characters describing your innovation").max(2000, "Description must be less than 2000 characters"),
  stage: z.string().min(1, "Please select your innovation stage"),
  supportNeeded: z.string().min(1, "Please select the type of support you need"),
  howDidYouHear: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const InnovatorRegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      age: "",
      location: "",
      innovationType: "",
      innovationTitle: "",
      innovationDescription: "",
      stage: "",
      supportNeeded: "",
      howDidYouHear: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from("innovator_registrations").insert({
        full_name: data.fullName.trim(),
        email: data.email.trim(),
        phone: data.phone.trim(),
        age_range: data.age,
        location: data.location.trim(),
        innovation_type: data.innovationType,
        innovation_title: data.innovationTitle.trim(),
        innovation_description: data.innovationDescription.trim(),
        stage: data.stage,
        support_needed: data.supportNeeded,
        how_did_you_hear: data.howDidYouHear || null,
      });

      if (error) throw error;

      // Send email notification
      await supabase.functions.invoke("send-form-notification", {
        body: {
          type: "innovator",
          fullName: data.fullName.trim(),
          email: data.email.trim(),
          phone: data.phone.trim(),
          ageRange: data.age,
          location: data.location.trim(),
          innovationTitle: data.innovationTitle.trim(),
          innovationType: data.innovationType,
          innovationDescription: data.innovationDescription.trim(),
          stage: data.stage,
          supportNeeded: data.supportNeeded,
          howDidYouHear: data.howDidYouHear || undefined,
        },
      });

      toast({
        title: "Application Submitted!",
        description: "Thank you for registering. We'll review your application and get back to you soon.",
      });
      
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting registration:", error);
      toast({
        title: "Error",
        description: "Failed to submit application. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12">
        <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-secondary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-4">Application Submitted!</h3>
        <p className="text-muted-foreground max-w-md mx-auto">
          Thank you for registering as an innovator. Our team will review your application 
          and contact you within 5-7 business days.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your full name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address *</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone Number *</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+263 XX XXX XXXX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="age"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Age Range *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your age range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="14-17">14-17 years</SelectItem>
                    <SelectItem value="18-24">18-24 years</SelectItem>
                    <SelectItem value="25-30">25-30 years</SelectItem>
                    <SelectItem value="31-35">31-35 years</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location (City/Town) *</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Harare, Zimbabwe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="innovationType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Innovation Category *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="technology">Technology & Software</SelectItem>
                    <SelectItem value="agriculture">Agriculture & Food</SelectItem>
                    <SelectItem value="health">Health & Medicine</SelectItem>
                    <SelectItem value="energy">Energy & Environment</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing & Hardware</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="innovationTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Innovation Title *</FormLabel>
              <FormControl>
                <Input placeholder="Give your innovation a name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="innovationDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Describe Your Innovation *</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your innovation. What problem does it solve? How does it work? What makes it unique?"
                  className="min-h-[150px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="grid md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="stage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Innovation Stage *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select stage" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="idea">Just an Idea</SelectItem>
                    <SelectItem value="research">Research & Planning</SelectItem>
                    <SelectItem value="prototype">Prototype/MVP</SelectItem>
                    <SelectItem value="testing">Testing & Validation</SelectItem>
                    <SelectItem value="launched">Launched/Operational</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="supportNeeded"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What Support Do You Need? *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select support type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="mentorship">Mentorship</SelectItem>
                    <SelectItem value="funding">Funding/Investment</SelectItem>
                    <SelectItem value="prototype">Prototype Development</SelectItem>
                    <SelectItem value="incubation">Startup Incubation</SelectItem>
                    <SelectItem value="training">Training & Skills</SelectItem>
                    <SelectItem value="networking">Networking & Connections</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="howDidYouHear"
          render={({ field }) => (
            <FormItem>
              <FormLabel>How did you hear about us?</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option (optional)" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="social-media">Social Media</SelectItem>
                  <SelectItem value="school">School/University</SelectItem>
                  <SelectItem value="friend">Friend/Family</SelectItem>
                  <SelectItem value="event">Event/Workshop</SelectItem>
                  <SelectItem value="website">Website/Search</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default InnovatorRegistrationForm;
