from langchain.tools import tool
from app.database import SessionLocal
from app.models import Interaction


@tool
def log_interaction_tool(hcp_name: str, interaction_type: str, notes: str):
    """Logs a new HCP interaction into the database."""
    db = SessionLocal()
    interaction = Interaction(
        hcp_name=hcp_name,
        interaction_type=interaction_type,
        notes=notes,
    )
    db.add(interaction)
    db.commit()
    return "Interaction logged successfully"


@tool
def edit_interaction_tool(interaction_id: int, notes: str):
    """Edits an existing interaction."""
    db = SessionLocal()
    interaction = db.query(Interaction).filter(
        Interaction.id == interaction_id
    ).first()
    if not interaction:
        return "Interaction not found"
    interaction.notes = notes
    db.commit()
    return "Interaction updated"


@tool
def fetch_interaction_history_tool(hcp_name: str):
    """Fetches interaction history for a given HCP."""
    db = SessionLocal()
    data = db.query(Interaction).filter(
        Interaction.hcp_name == hcp_name
    ).all()
    return [{"type": i.interaction_type, "notes": i.notes} for i in data]


@tool
def summarize_interaction_tool(notes: str):
    """Summarizes interaction notes."""
    return f"Summary: {notes[:60]}..."


@tool
def next_best_action_tool(hcp_name: str):
    """Suggests the next best action for an HCP."""
    return f"Recommended next action for {hcp_name}: Schedule follow-up"
