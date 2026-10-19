CREATE TABLE public.ai_brief_access (id text PRIMARY KEY, message text NOT NULL, status integer NOT NULL, blocked_at timestamptz NOT NULL DEFAULT now());
GRANT ALL ON public.ai_brief_access TO service_role;
ALTER TABLE public.ai_brief_access ENABLE ROW LEVEL SECURITY;
CREATE TABLE public.ai_brief_limits (key text PRIMARY KEY, count integer NOT NULL DEFAULT 0, expires_at timestamptz NOT NULL);
GRANT ALL ON public.ai_brief_limits TO service_role;
ALTER TABLE public.ai_brief_limits ENABLE ROW LEVEL SECURITY;
CREATE OR REPLACE FUNCTION public.claim_brief_request(rate_key text, max_requests integer, window_seconds integer) RETURNS boolean LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
DECLARE current_count integer;
BEGIN
INSERT INTO public.ai_brief_limits(key,count,expires_at) VALUES(rate_key,1,now()+make_interval(secs=>window_seconds)) ON CONFLICT(key) DO UPDATE SET count=CASE WHEN ai_brief_limits.expires_at < now() THEN 1 ELSE ai_brief_limits.count+1 END, expires_at=CASE WHEN ai_brief_limits.expires_at < now() THEN now()+make_interval(secs=>window_seconds) ELSE ai_brief_limits.expires_at END RETURNING count INTO current_count;
RETURN current_count <= max_requests;
END $$;
REVOKE ALL ON FUNCTION public.claim_brief_request(text,integer,integer) FROM PUBLIC, anon, authenticated;
GRANT EXECUTE ON FUNCTION public.claim_brief_request(text,integer,integer) TO service_role;
CREATE POLICY "Brief photos server access only" ON storage.objects FOR ALL TO service_role USING(bucket_id='brief-photos') WITH CHECK(bucket_id='brief-photos');