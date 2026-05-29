"""
Bansi Vihar — minimal backend stub.

This is a pure marketing site. The frontend does not call any backend API
(all reservations go through WhatsApp / tel links). This file exists only so
the platform's process supervisor has a service to manage on port 8001.
"""
from fastapi import FastAPI, APIRouter
from starlette.middleware.cors import CORSMiddleware

app = FastAPI(title="Bansi Vihar")
api_router = APIRouter(prefix="/api")


@api_router.get("/")
async def root():
    return {"status": "ok", "service": "bansi-vihar"}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)
