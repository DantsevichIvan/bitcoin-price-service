# Bitcoin Price Microservice

A microservice that fetches the current Bitcoin price from the Binance exchange API, applies a service commission, and exposes the price via an HTTP endpoint.

---

## Description

This service periodically (default every 10 seconds) fetches the BTC/USDT price from Binance’s API, applies a configurable service commission (default 0.01%) to the bid and ask prices, calculates the mid price, and serves the latest data through an HTTP endpoint.

---

## API

### GET `/price`

Returns the current price data:

```json
{
  "bid": 27350.25,
  "ask": 27356.35,
  "mid": 27353.30,
  "timestamp": 1629475834000
}
```

---

## Installation

### Install dependencies

```bash
npm install
```

### Build the project

```bash
npm run build
```

### Run the service

```bash
npm start
```

## Create .env file with overrides if needed:

- PORT=
- UPDATE_INTERVAL_MS=
- COMMISSION_PERCENT=
- BINANCE_API_URL=
- BINANCE_SYMBOL=





