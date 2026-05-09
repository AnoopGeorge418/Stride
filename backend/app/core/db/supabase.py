from supabase import create_client, Client

from app.core.config.settings import app_settings 

supabase: Client = create_client(
    app_settings.PRODUCTION_SUPABASE_URL,
    app_settings.PRODUCTION_SUPABASE_KEY
)
