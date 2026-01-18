from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter()


interactions_db = []


class Interaction(BaseModel):
    hcp_name: str
    interaction_type: str
    notes: str


@router.post("/log")
def log_interaction(interaction: Interaction):
    
    interactions_db.append(interaction.dict())
    print("New interaction received:", interaction.dict())  
    return {"status": "success", "data": interaction}


@router.get("/log")
def get_interactions():
    return {"status": "success", "interactions": interactions_db}
