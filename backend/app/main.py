from fastapi import FastAPI
from uvicorn import run # remove this for production

from app.core.config.settings import app_settings 

# initlizing fastapi
app = FastAPI(
    title=app_settings.APP_NAME,
    description=app_settings.APP_DESCRIPTION,
    version=app_settings.APP_VERSION
)

# starting development server
if __name__ == "__main__":
    run(
        "app.main:app",
        host=app_settings.SERVER_HOST,
        port=app_settings.SERVER_PORT,
        reload=app_settings.SERVER_RELOAD,
        workers=app_settings.SERVER_WORKERS
    )
