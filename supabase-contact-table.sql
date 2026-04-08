-- Create contact_messages table for PeppolPro contact form
CREATE TABLE IF NOT EXISTS contact_messages (
 id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 name TEXT NOT NULL,
 email TEXT NOT NULL,
 company TEXT,
 message TEXT NOT NULL,
 subject TEXT DEFAULT 'Contact via website',
 created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
 status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'read', 'replied', 'archived'))
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy: only authenticated users can read (admin access)
CREATE POLICY "Only authenticated users can read contact messages" 
 ON contact_messages FOR SELECT 
 USING (auth.role() = 'authenticated');

-- Create policy: anyone can insert (public contact form)
CREATE POLICY "Anyone can insert contact messages" 
 ON contact_messages FOR INSERT 
 WITH CHECK (true);

-- Create index for faster queries
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
