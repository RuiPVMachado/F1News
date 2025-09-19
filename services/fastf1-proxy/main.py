from fastapi import FastAPI
from fastapi.responses import JSONResponse

app = FastAPI(title="FastF1 Proxy", version="0.1.0")

@app.get("/")
def root():
    return {"name": "fastf1-proxy", "version": "0.1.0", "status": "ok"}

@app.get("/ping")
def ping():
    return {"pong": True}

# Placeholder for a FastF1-powered endpoint
# This avoids heavy imports at module import time for faster startup in environments without FastF1
@app.get("/fastf1/info")
def fastf1_info():
    try:
        import fastf1  # type: ignore
        version = getattr(fastf1, "__version__", "unknown")
        return {"fastf1": {"available": True, "version": version}}
    except Exception:
        return JSONResponse({"fastf1": {"available": False}}, status_code=200)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=5050, reload=True)
