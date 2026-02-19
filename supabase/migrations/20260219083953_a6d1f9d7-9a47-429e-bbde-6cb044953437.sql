
CREATE TABLE public.meeting_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization TEXT,
  phone TEXT,
  preferred_date DATE NOT NULL,
  preferred_time TEXT NOT NULL,
  meeting_type TEXT NOT NULL,
  message TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.meeting_bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit meeting bookings"
ON public.meeting_bookings
FOR INSERT
WITH CHECK (true);
