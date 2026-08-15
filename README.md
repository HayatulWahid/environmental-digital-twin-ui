Environmental Digital Twin: Edge-to-Cloud Telemetry UI

​Overview

​This repository contains the real-time frontend visualization dashboard for an Environmental Digital Twin. It bridges physical mechatronic edge nodes with asynchronous cloud/local routing, rendering physical space into actionable Cartesian data.

​This UI consumes a continuous telemetry stream (Temperature & Humidity) from an asynchronous Python/FastAPI backend, which is actively fed by physical ESP32 edge microcontrollers and DHT11 sensors deployed in the physical environment.

​⚙️ System Architecture

​Hardware Edge: ESP32-WROOM-32 + DHT11 Sensor Array
​Backend Routing: Python / FastAPI (REST/WebSockets)
​Frontend Dashboard (This Repo): React / Vite / Tailwind CSS

​🚀 Key Features

​Real-Time Data Ingestion: Asynchronous polling/WebSocket connections to the FastAPI telemetry router.
​Dynamic State Rendering: Instantaneous UI updates reflecting physical environmental shifts.
​Resource-Optimized Build: Configured via Vite for rapid Hot Module Replacement (HMR) and lean production bundling.