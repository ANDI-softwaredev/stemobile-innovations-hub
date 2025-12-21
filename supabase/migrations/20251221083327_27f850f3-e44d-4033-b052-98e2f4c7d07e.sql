-- Create contact messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create school bookings table
CREATE TABLE public.school_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  program_title TEXT NOT NULL,
  school_name TEXT NOT NULL,
  contact_person TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  preferred_date DATE NOT NULL,
  session_type TEXT NOT NULL,
  number_of_students INTEGER NOT NULL,
  additional_info TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create innovator registrations table
CREATE TABLE public.innovator_registrations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  age_range TEXT NOT NULL,
  location TEXT NOT NULL,
  innovation_type TEXT NOT NULL,
  innovation_title TEXT NOT NULL,
  innovation_description TEXT NOT NULL,
  stage TEXT NOT NULL,
  support_needed TEXT NOT NULL,
  how_did_you_hear TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.school_bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.innovator_registrations ENABLE ROW LEVEL SECURITY;

-- Create policies for public form submissions (anyone can insert)
CREATE POLICY "Anyone can submit contact messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit school bookings" 
ON public.school_bookings 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can submit innovator registrations" 
ON public.innovator_registrations 
FOR INSERT 
WITH CHECK (true);