from app.core.db.session import AsyncSessionLocal

# dependency injuction
async def get_db():
    async with AsyncSessionLocal() as session:
        yield session
