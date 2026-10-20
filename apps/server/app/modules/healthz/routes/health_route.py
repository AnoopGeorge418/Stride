from fastapi import APIRouter

route = APIRouter(tags=["Health route"])


@route.get("/healthz")
def get_health():
    return {"Progress": "Stride Server", "status": "healthly"}
