import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
  type: "contact";
  name: string;
  email: string;
  organization?: string;
  message: string;
}

interface BookingFormData {
  type: "booking";
  schoolName: string;
  contactPerson: string;
  email: string;
  phone: string;
  programTitle: string;
  preferredDate: string;
  numberOfStudents: number;
  sessionType: string;
  additionalInfo?: string;
}

interface InnovatorFormData {
  type: "innovator";
  fullName: string;
  email: string;
  phone: string;
  ageRange: string;
  location: string;
  innovationTitle: string;
  innovationType: string;
  innovationDescription: string;
  stage: string;
  supportNeeded: string;
  howDidYouHear?: string;
}

interface MeetingFormData {
  type: "meeting";
  name: string;
  email: string;
  organization?: string;
  preferredDate: string;
  preferredTime: string;
  meetingType: string;
  message?: string;
}

type FormData = ContactFormData | BookingFormData | InnovatorFormData | MeetingFormData;

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const formData: FormData = await req.json();
    console.log("Received form data:", formData);

    let subject = "";
    let htmlContent = "";

    if (formData.type === "contact") {
      subject = `New Contact Message from ${formData.name}`;
      htmlContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        ${formData.organization ? `<p><strong>Organization:</strong> ${formData.organization}</p>` : ""}
        <h3>Message:</h3>
        <p>${formData.message}</p>
      `;
    } else if (formData.type === "booking") {
      subject = `New School Booking Request - ${formData.schoolName}`;
      htmlContent = `
        <h2>New School Booking Request</h2>
        <h3>School Information</h3>
        <p><strong>School Name:</strong> ${formData.schoolName}</p>
        <p><strong>Contact Person:</strong> ${formData.contactPerson}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        
        <h3>Program Details</h3>
        <p><strong>Program:</strong> ${formData.programTitle}</p>
        <p><strong>Preferred Date:</strong> ${formData.preferredDate}</p>
        <p><strong>Number of Students:</strong> ${formData.numberOfStudents}</p>
        <p><strong>Session Type:</strong> ${formData.sessionType}</p>
        ${formData.additionalInfo ? `<h3>Additional Information:</h3><p>${formData.additionalInfo}</p>` : ""}
      `;
    } else if (formData.type === "innovator") {
      subject = `New Innovator Registration - ${formData.fullName}`;
      htmlContent = `
        <h2>New Innovator Registration</h2>
        <h3>Personal Information</h3>
        <p><strong>Full Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Age Range:</strong> ${formData.ageRange}</p>
        <p><strong>Location:</strong> ${formData.location}</p>
        
        <h3>Innovation Details</h3>
        <p><strong>Innovation Title:</strong> ${formData.innovationTitle}</p>
        <p><strong>Type:</strong> ${formData.innovationType}</p>
        <p><strong>Stage:</strong> ${formData.stage}</p>
        <p><strong>Support Needed:</strong> ${formData.supportNeeded}</p>
        
        <h3>Description:</h3>
        <p>${formData.innovationDescription}</p>
        
        ${formData.howDidYouHear ? `<p><strong>How they heard about us:</strong> ${formData.howDidYouHear}</p>` : ""}
      `;
    } else if (formData.type === "meeting") {
      subject = `New Meeting Request from ${formData.name}`;
      htmlContent = `
        <h2>New Meeting Request</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        ${formData.organization ? `<p><strong>Organization:</strong> ${formData.organization}</p>` : ""}
        <p><strong>Meeting Type:</strong> ${formData.meetingType}</p>
        <p><strong>Preferred Date:</strong> ${formData.preferredDate}</p>
        <p><strong>Preferred Time:</strong> ${formData.preferredTime}</p>
        ${formData.message ? `<h3>Additional Notes:</h3><p>${formData.message}</p>` : ""}
      `;
    }

    // Send email using Resend API
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "STEMobile <onboarding@resend.dev>",
        to: ["stemobilesolutions@gmail.com"],
        subject: subject,
        html: htmlContent,
      }),
    });

    const emailResult = await emailResponse.json();
    
    if (!emailResponse.ok) {
      console.error("Resend API error:", emailResult);
      throw new Error(emailResult.message || "Failed to send email");
    }

    console.log("Email sent successfully:", emailResult);

    return new Response(JSON.stringify({ success: true, data: emailResult }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-form-notification function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
