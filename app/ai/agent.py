from langgraph.graph import StateGraph
from app.ai.tools import (
    log_interaction_tool,
    edit_interaction_tool,
    fetch_interaction_history_tool,
    summarize_interaction_tool,
    next_best_action_tool,
)

class AgentState(dict):
    pass

graph = StateGraph(AgentState)

def agent_node(state: AgentState):
    return state

graph.add_node("agent", agent_node)
graph.set_entry_point("agent")
graph.set_finish_point("agent")

agent = graph.compile()

TOOLS = [
    log_interaction_tool,
    edit_interaction_tool,
    fetch_interaction_history_tool,
    summarize_interaction_tool,
    next_best_action_tool,
]
