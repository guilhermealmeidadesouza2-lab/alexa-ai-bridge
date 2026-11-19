# Alexa AI Bridge

An open-source voice assistant bridge connecting Amazon Alexa Custom Skills to large language models (LLMs). Designed with a phased architecture that starts with a zero-cost local mock engine and scales toward a multi-provider Bring Your Own Key (BYOK) setup.

## Why This Project
Voice interfaces impose strict constraints that differ from standard text chat:
- **Latency Budget:** Alexa skills must respond within roughly 8 seconds to avoid session timeouts.
- **Speech-First Output:** Responses must be concise, natural, and stripped of markdown or special symbols that text-to-speech engines read literally.
- **Continuous Sessions:** Keeping `shouldEndSession: false` enables natural multi-turn conversations instead of single-shot commands.

## Project Structure
```text
alexa-ai-bridge/
├── src/
│   ├── handler.js        # Entry point formatting responses for Alexa
│   └── mock-ai.js        # Zero-cost local responder for offline testing
├── skill-sample/
│   └── interaction-model.json  # Alexa Skills Kit (ASK) intent & slot schema
├── .env.example          # Environment variable template
└── README.md