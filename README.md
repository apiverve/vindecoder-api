# [VIN Decoder API](https://apiverve.com/marketplace/vindecoder?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)

VIN Decoder turns a 17-character Vehicle Identification Number into the vehicle it identifies. Returns make, model, year, trim, body class and manufacturer, plus engine specifications, plant of manufacture, and the safety equipment fitted to that specific build. Optionally adds every safety recall issued for that vehicle and its NHTSA 5-star crash-test rating.

The VIN Decoder API provides a simple, reliable way to integrate vin decoder functionality into your applications. Built for developers who need production-ready vin decoder capabilities without the complexity of building from scratch.

**[View API Details →](https://apiverve.com/marketplace/vindecoder?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![API Status](https://img.shields.io/badge/Status-Active-green.svg)](https://apiverve.com/marketplace/vindecoder?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
[![Method](https://img.shields.io/badge/Method-GET-blue.svg)](#)
[![Platform](https://img.shields.io/badge/Platform-Multi--Platform-orange.svg)](#installation)

**Available on:**
[![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/package/@apiverve/vindecoder)
[![NuGet](https://img.shields.io/badge/NuGet-004880?style=flat&logo=nuget&logoColor=white)](https://www.nuget.org/packages/APIVerve.API.VINDecoder)
[![PyPI](https://img.shields.io/badge/PyPI-3776AB?style=flat&logo=python&logoColor=white)](https://pypi.org/project/apiverve-vindecoder/)
[![RubyGems](https://img.shields.io/badge/RubyGems-E9573F?style=flat&logo=rubygems&logoColor=white)](https://rubygems.org/gems/apiverve_vindecoder)
[![Packagist](https://img.shields.io/badge/Packagist-F28D1A?style=flat&logo=packagist&logoColor=white)](https://packagist.org/packages/apiverve/vindecoder)
[![Go](https://img.shields.io/badge/Go-00ADD8?style=flat&logo=go&logoColor=white)](#-go)
[![Dart](https://img.shields.io/badge/Dart-0175C2?style=flat&logo=dart&logoColor=white)](https://pub.dev/packages/apiverve_vindecoder)
[![JitPack](https://img.shields.io/badge/JitPack-2E7D32?style=flat&logo=android&logoColor=white)](#-android-jitpack)

---

## Quick Start

### Using JavaScript

```javascript
async function callVINDecoderAPI() {
    try {
        const params = new URLSearchParams({
            vin: '1HGCM82633A004352',
            recalls: true,
            safetyRating: true
        });

        const response = await fetch(`https://api.apiverve.com/v1/vindecoder?${params}`, {
            method: 'GET',
            headers: {
                'x-api-key': 'YOUR_API_KEY_HERE'
            }
        });

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}

callVINDecoderAPI();
```

### Using cURL

```bash
curl -X GET "https://api.apiverve.com/v1/vindecoder?vin=1HGCM82633A004352&recalls=true&safetyRating=true" \
  -H "x-api-key: YOUR_API_KEY_HERE"
```

**Get your API key:** [https://apiverve.com](https://apiverve.com)

**📁 For more examples, see the [examples folder](./examples/)**

---

## Installation

Choose your preferred programming language:

### 📦 NPM (JavaScript/Node.js)

```bash
npm install @apiverve/vindecoder
```

[**View NPM Package →**](https://www.npmjs.com/package/@apiverve/vindecoder) | [**Package Code →**](./npm/)

---

### 🔷 NuGet (.NET/C#)

```bash
dotnet add package APIVerve.API.VINDecoder
```

[**View NuGet Package →**](https://www.nuget.org/packages/APIVerve.API.VINDecoder) | [**Package Code →**](./nuget/)

---

### 🐍 Python (PyPI)

```bash
pip install apiverve-vindecoder
```

[**View PyPI Package →**](https://pypi.org/project/apiverve-vindecoder/) | [**Package Code →**](./python/)

---

### 💎 Ruby (RubyGems)

```bash
gem install apiverve_vindecoder
```

[**View RubyGems Package →**](https://rubygems.org/gems/apiverve_vindecoder) | [**Package Code →**](./ruby/)

---

### 🐘 PHP (Packagist)

```bash
composer require apiverve/vindecoder
```

[**View Packagist Package →**](https://packagist.org/packages/apiverve/vindecoder) | [**Package Code →**](./php/)

---

### 🎯 Dart (pub.dev)

```bash
dart pub add apiverve_vindecoder
```

[**View pub.dev Package →**](https://pub.dev/packages/apiverve_vindecoder) | [**Package Code →**](./dart/)

---

### 🤖 Android (JitPack)

```gradle
implementation 'com.github.apiverve:vindecoder-api:1.0.0'
```

[**Package Code →**](./android/)

---

### 🐹 Go

```bash
go get github.com/apiverve/vindecoder-api/go
```

[**Package Code →**](./go/)

---

## Why Use This API?

| Feature | Benefit |
|---------|---------|
| **Multi-language SDKs** | Native packages for JavaScript, Python, C#, Go, and Android |
| **Simple Integration** | Single API key authentication, consistent response format |
| **Production Ready** | 99.9% uptime SLA, served from 24 global regions |
| **Comprehensive Docs** | Full examples, OpenAPI spec, and dedicated support |

---

## Documentation

- 🏠 **API Home:** [VIN Decoder API](https://apiverve.com/marketplace/vindecoder?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 📚 **API Reference:** [docs.apiverve.com/ref/vindecoder](https://docs.apiverve.com/ref/vindecoder)
- 📖 **OpenAPI Spec:** [openapi.yaml](./openapi.yaml)
- 💡 **Examples:** [examples/](./examples/)

---

## What Can You Build?

The VIN Decoder API is commonly used for:

- **Web Applications** - Add vin decoder features to your frontend or backend
- **Mobile Apps** - Native SDKs for Android development
- **Automation** - Integrate with n8n, Zapier, or custom workflows
- **SaaS Products** - Enhance your product with vin decoder capabilities
- **Data Pipelines** - Process and analyze data at scale

---

## API Reference

### Authentication
All requests require an API key in the header:
```
x-api-key: YOUR_API_KEY_HERE
```

Get your API key: [https://apiverve.com](https://apiverve.com)

### Response Format

Every APIVerve endpoint returns the same envelope — check `status`, then read `data`:

```json
{
  "status": "ok",
  "error": null,
  "data": { ... }
}
```

### Example Response

A real response from the VIN Decoder API:

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "vin": "1HGCM82633A004352",
    "valid": true,
    "decoded": true,
    "vehicleDescriptor": "1HGCM826*3A",
    "make": "HONDA",
    "model": "Accord",
    "year": 2003,
    "trim": "EX-V6",
    "trim2": null,
    "series": null,
    "series2": null,
    "manufacturer": "AMERICAN HONDA MOTOR CO., INC.",
    "vehicleType": "PASSENGER CAR",
    "bodyClass": "Coupe",
    "plant": {
      "state": "OHIO",
      "country": "UNITED STATES (USA)",
      "city": "MARYSVILLE"
    },
    "engine": {
      "displacementL": "2.998832712",
      "displacementCc": "2998.832712",
      "engineNumberOfCylinders": "6",
      "engineModel": "J30A4",
      "engineConfiguration": "V-Shaped",
      "engineBrakeHpFrom": "240",
      "displacementCi": "183",
      "fuelTypePrimary": "Gasoline",
      "valveTrainDesign": "Single Overhead Cam (SOHC)"
    },
    "features": {
      "passiveSafetySystem": {
        "otherRestraintSystemInfo": "Seat Belt (Rr center position)",
        "seatBeltType": "Manual",
        "sideAirBagLocations": "1st Row (Driver and Passenger)",
        "curtainAirBagLocations": "1st and 2nd Rows",
        "frontAirBagLocations": "1st Row (Driver and Passenger)"
      },
      "exterior": {
        "grossVehicleWeightRatingFrom": "Class 1C: 4,001 - 5,000 lb (1,814 - 2,268 kg)",
        "grossVehicleWeightRatingTo": "Class 1: 6,000 lb or less (2,722 kg or less)",
        "doors": "2"
      },
      "mechanical": {
        "transmissionStyle": "Automatic",
        "transmissionSpeeds": "5"
      }
    },
    "validation": {
      "errorText": "0 - VIN decoded clean. Check Digit (9th position) is correct",
      "errorCode": "0",
      "errorCodes": [
        "0"
      ]
    },
    "recalls": {
      "count": 13,
      "doNotDrive": false,
      "parkOutside": false,
      "bySeverity": {
        "critical": 0,
        "high": 10,
        "medium": 3,
        "low": 0
      },
      "latestReportedOn": "2019-06-27",
      "items": [
        {
          "id": "19V499000",
          "manufacturerRecallId": "Q5A, Y58",
          "manufacturer": "Honda (American Honda Motor Co.)",
          "reportedOn": "2019-06-27",
          "ownersNotifiedOn": "2019-08-12",
          "initiatedBy": "nhtsa",
          "components": [
            {
              "system": "Air Bags",
              "detail": "Frontal › Driver Side › Inflator Module"
            }
          ],
          "summary": "Honda (American Honda Motor Co.) is recalling certain 2003 Acura 3.2CL, 2002-2003 3.2TL, 2003-2006 MDX, 2001-2007 Honda Accord, 2001-2005 Civic, 2003-2005 Civic Hybrid, 2001-2005 Civic GX NGV, 2002-2006 CR-V, 2003-2011 Element, 2002-2004 Odyssey, 2003-2008 Pilot and 2006 Ridgeline vehicles. These vehicles are equipped with driver frontal air bag inflators assembled as a recall remedy part or replacement service part, that may explode due to propellant degradation occurring after long-term exposure to high absolute humidity, temperature and temperature cycling.",
          "consequence": "An inflator explosion may result in sharp metal fragments striking the driver or other occupants resulting in serious injury or death.",
          "hazards": [
            "injury",
            "death"
          ],
          "doNotDrive": false,
          "parkOutside": false,
          "remedy": {
            "description": "Honda will notify owners, and dealers will replace the driver frontal air bag inflator, free of charge. The recall began August 12, 2019. Owners may contact Honda customer service at 1-888-234-2138. Honda's numbers for this recall are Q5A and Y58.",
            "status": "available",
            "overTheAir": false,
            "freeOfCharge": true
          },
          "unitsAffected": 3947,
          "manufactured": {
            "from": "2000-07-10",
            "to": "2011-02-22"
          },
          "scope": {
            "makes": 2,
            "models": 12,
            "modelYears": {
              "from": 2001,
              "to": 2011
            }
          },
          "url": "https://www.nhtsa.gov/recalls?nhtsaId=19V499000",
          "severity": "high",
          "match": "exact",
          "listedAs": "ACCORD"
        },
        {
          "id": "19V501000",
          "manufacturerRecallId": "E5D, X5C",
          "manufacturer": "Honda (American Honda Motor Co.)",
          "reportedOn": "2019-06-27",
          "ownersNotifiedOn": "2019-08-12",
          "initiatedBy": "nhtsa",
          "components": [
            {
              "system": "Air Bags",
              "detail": "Frontal › Passenger Side › Inflator Module"
            }
          ],
          "summary": "Honda (American Honda Motor Co.) is recalling certain 2003-2006 Acura MDX, 2005-2012 RL, 2003-2007 Honda Accord, 2001-2005 Civic, 2003-2005 Civic Hybrid, 2001-2005 Civic GX NGV, 2002-2006 CR-V, 2003-2011 Element, 2007-2008 Fit, 2002-2004 Odyssey, 2003-2008 Pilot, and 2006-2014 Ridgeline vehicles. The vehicles are equipped with passenger frontal air bag inflators assembled as a recall remedy part or replacement service part, that may explode due to propellant degradation occurring after long-term exposure to high absolute humidity, temperature and temperature cycling.",
          "consequence": "An inflator explosion may result in sharp metal fragments striking the driver or other occupants resulting in serious injury or death.",
          "hazards": [
            "injury",
            "death"
          ],
          "doNotDrive": false,
          "parkOutside": false,
          "remedy": {
            "description": "Honda will notify owners, and dealers will replace the passenger frontal airbag inflator, free of charge. The recall began August 12, 2019. Owners may contact Honda customer service at 1-888-234-2138. Honda's numbers for this recall are E5D and X5C.",
            "status": "available",
            "overTheAir": false,
            "freeOfCharge": true
          },
          "unitsAffected": 1657752,
          "manufactured": {
            "from": "2000-04-25",
            "to": "2014-06-02"
          },
          "scope": {
            "makes": 2,
            "models": 12,
            "modelYears": {
              "from": 2001,
              "to": 2014
            }
          },
          "url": "https://www.nhtsa.gov/recalls?nhtsaId=19V501000",
          "severity": "high",
          "match": "exact",
          "listedAs": "ACCORD"
        }
      ]
    },
    "safetyRating": {
      "testedVehicle": "2003 Honda Accord 2-DR. w/SAB",
      "match": "exact",
      "variantsTested": 4,
      "overall": null,
      "frontal": {
        "overall": null,
        "driver": 5,
        "passenger": 5
      },
      "side": {
        "overall": null,
        "driver": null,
        "passenger": null,
        "barrier": null,
        "pole": null,
        "frontSeat": null,
        "rearSeat": null
      },
      "rollover": {
        "rating": 4,
        "riskPercent": null,
        "tipped": null
      },
      "driverAssist": {
        "electronicStabilityControl": "notAvailable",
        "forwardCollisionWarning": "notAvailable",
        "laneDepartureWarning": "notAvailable"
      }
    }
  }
}
```

---

## Support & Community

- 🏠 **API Home**: [VIN Decoder API](https://apiverve.com/marketplace/vindecoder?utm_source&#x3D;github&amp;utm_medium&#x3D;referral&amp;utm_content&#x3D;readme)
- 💬 **Support**: [https://apiverve.com/contact](https://apiverve.com/contact)
- 🐛 **Issues**: [GitHub Issues](../../issues)
- 📖 **Documentation**: [https://docs.apiverve.com](https://docs.apiverve.com)
- 🌐 **Website**: [https://apiverve.com](https://apiverve.com)

---

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## Security

For security concerns, please review our [Security Policy](SECURITY.md).

---

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

Built with ❤️ by [APIVerve](https://apiverve.com)

Copyright © 2026 APIVerve. All rights reserved.
