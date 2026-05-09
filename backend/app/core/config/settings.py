from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings( BaseSettings ):
    """App's Settings."""

    # connecting env file
    model_config = SettingsConfigDict(
        env_file='.env',
        env_file_encoding='utf-8',
        env_prefix='FASTAPI_',
        extra='ignore'
    )

    # App info
    APP_NAME: str
    APP_DESCRIPTION: str
    APP_VERSION: str

    # Server info
    SERVER_HOST: str
    SERVER_PORT: int
    SERVER_RELOAD: bool
    SERVER_WORKERS: int

    # Base api info
    STRIDE_BASE_API: str

    # Database connection
    SUPABASE_DATABASE_URL: str
    PRODUCTION_SUPABASE_URL: str
    PRODUCTION_SUPABASE_KEY: str

# loading env variable once per project
@lru_cache
def get_settings() -> Settings:
    return Settings() # type: ignore

# initilizing settings for entire app
app_settings = get_settings()
