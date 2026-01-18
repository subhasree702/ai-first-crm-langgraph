from pydantic import BaseModel
from typing import Optional

class InteractionCreate(BaseModel):
    hcp_name: str
    interaction_type: str
    notes: str

class InteractionResponse(BaseModel):
    hcp_name: str
    interaction_type: str
    summary: str
