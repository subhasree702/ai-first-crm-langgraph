from fastapi import APIRouter
from pydantic import BaseModel
from app.ai.agent import agent

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

@router.post("/chat")
def chat(req: ChatRequest):
    agent.invoke({"message": req.message})
    return {
        "reply": "Message processed via LangGraph AI agent"
    }
