# fastf1-proxy

Python FastAPI service that can proxy requests to the FastF1 library and expose a simple HTTP API.

## Setup

Requires Python 3.10+.

```sh
cd services/fastf1-proxy
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 5050 --reload
```

Then open http://localhost:5050
