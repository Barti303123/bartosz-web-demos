import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const targetUrl = searchParams.get('url');

  if (id) {
    try {
      const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
      
      if (supabaseUrl && supabaseKey) {
        const supabase = createClient(supabaseUrl, supabaseKey);
        
        await supabase
          .from('leads')
          .update({ 
            demo_clicked: true, 
            demo_clicked_at: new Date().toISOString() 
          })
          .eq('id', id);
      }
    } catch (err) {
      // Ignorujemy błędy, żeby nie popsuć redirectu
    }
  }

  // Przekierowanie na docelowy URL (Demo), lub fallback na główną stronę
  if (targetUrl) {
    return NextResponse.redirect(targetUrl);
  } else {
    return NextResponse.redirect(new URL('/', request.url));
  }
}
