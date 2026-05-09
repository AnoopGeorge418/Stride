from sqlalchemy.ext.asyncio import ( create_async_engine, AsyncSession, async_sessionmaker )

from app.core.config.settings import app_settings 

# creates supabase db connection engine
engine = create_async_engine(
    url=app_settings.SUPABASE_DATABASE_URL,
    echo=True
)

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=True
)
