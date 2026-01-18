from .tools import (
    log_interaction_tool,
    edit_interaction_tool,
    summarize_interaction_tool,
    sentiment_analysis_tool,
    entity_extraction_tool
)

def run_agent(interaction_data: dict):
    summary = summarize_interaction_tool(interaction_data["notes"])
    sentiment = sentiment_analysis_tool(interaction_data["notes"])
    entities = entity_extraction_tool(interaction_data["notes"])

    log_interaction_tool(interaction_data)

    return {
        "summary": summary,
        "sentiment": sentiment,
        "entities": entities
    }
