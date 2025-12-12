import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
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
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Send, CheckCircle } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const bookingSchema = z.object({
  schoolName: z.string().trim().min(2, "School name is required").max(100),
  contactPerson: z.string().trim().min(2, "Contact person name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().min(8, "Valid phone number required").max(20),
  preferredDate: z.date({ required_error: "Please select a preferred date" }),
  sessionType: z.string({ required_error: "Please select session type" }),
  numberOfStudents: z.string().trim().min(1, "Number of students is required"),
  additionalInfo: z.string().max(500).optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  programTitle: string;
}

const BookingForm = ({ programTitle }: BookingFormProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      schoolName: "",
      contactPerson: "",
      email: "",
      phone: "",
      sessionType: "",
      numberOfStudents: "",
      additionalInfo: "",
    },
  });

  const onSubmit = (data: BookingFormValues) => {
    console.log("Booking submitted:", { program: programTitle, ...data });
    setIsSubmitted(true);
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 48 hours to confirm your booking.",
    });
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border rounded-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Booking Request Received!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for your interest in the {programTitle} program. Our team will contact you within 48 hours to confirm availability and finalize your booking.
        </p>
        <Button onClick={() => setIsSubmitted(false)} variant="outline">
          Submit Another Booking
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
      <h3 className="text-2xl font-bold text-foreground mb-2">Book This Program</h3>
      <p className="text-muted-foreground mb-6">
        Fill out the form below and we'll get back to you within 48 hours.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="schoolName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>School/Organization Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter school name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="contactPerson"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Person</FormLabel>
                  <FormControl>
                    <Input placeholder="Your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="email@school.ac.zw" {...field} />
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
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="+263 77 123 4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <FormField
              control={form.control}
              name="preferredDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Preferred Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date()}
                        initialFocus
                        className="p-3 pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="sessionType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Session Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select session type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="half-day">Half Day (3-4 hours)</SelectItem>
                      <SelectItem value="full-day">Full Day (6-8 hours)</SelectItem>
                      <SelectItem value="multi-day">Multi-Day Program</SelectItem>
                      <SelectItem value="weekly">Weekly Sessions</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="numberOfStudents"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Estimated Number of Students</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="e.g., 30" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="additionalInfo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Additional Information (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Any specific requirements, topics of interest, or questions..."
                    className="resize-none"
                    rows={4}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full" size="lg">
            <Send className="w-4 h-4 mr-2" />
            Submit Booking Request
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default BookingForm;
