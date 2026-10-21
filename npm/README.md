# VIN Decoder API

VIN Decoder turns a 17-character Vehicle Identification Number into the vehicle it identifies. Returns make, model, year, trim, body class and manufacturer, plus engine specifications, plant of manufacture, and the safety equipment fitted to that specific build. Optionally adds every safety recall issued for that vehicle and its NHTSA 5-star crash-test rating.

[![npm version](https://img.shields.io/npm/v/@apiverve/vindecoder.svg)](https://www.npmjs.com/package/@apiverve/vindecoder)

This is a JavaScript wrapper for the [VIN Decoder API](https://apiverve.com/marketplace/vindecoder?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Installation

Using npm:
```shell
npm install @apiverve/vindecoder
```

Using yarn:
```shell
yarn add @apiverve/vindecoder
```

---

## Configuration

Before using the VIN Decoder API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=npm&utm_medium=referral&utm_content=readme)

---

## Quick Start

[Get started with the Quick Start Guide](https://docs.apiverve.com/quickstart?utm_source=npm&utm_medium=referral&utm_content=readme)

The VIN Decoder API documentation is found here: [https://docs.apiverve.com/ref/vindecoder](https://docs.apiverve.com/ref/vindecoder?utm_source=npm&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

```javascript
const vindecoderAPI = require('@apiverve/vindecoder');
const api = new vindecoderAPI({
    api_key: '[YOUR_API_KEY]'
});
```

---

## Usage

---

### Perform Request

Using the API is simple. All you have to do is make a request. The API will return a response with the data you requested.

```javascript
var query = {
  vin: "1HGCM82633A004352",
  recalls: true,
  safetyRating: true
};

api.execute(query, function (error, data) {
    if (error) {
        return console.error(error);
    } else {
        console.log(data);
    }
});
```

---

### Using Promises

You can also use promises to make requests. The API returns a promise that you can use to handle the response.

```javascript
var query = {
  vin: "1HGCM82633A004352",
  recalls: true,
  safetyRating: true
};

api.execute(query)
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });
```

---

### Using Async/Await

You can also use async/await to make requests. The API returns a promise that you can use to handle the response.

```javascript
async function makeRequest() {
    var query = {
  vin: "1HGCM82633A004352",
  recalls: true,
  safetyRating: true
};

    try {
        const data = await api.execute(query);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

## Example Response

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

## Customer Support

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## Updates

Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=npm&utm_medium=referral&utm_content=readme) and [Privacy Policy](https://apiverve.com/privacy?utm_source=npm&utm_medium=referral&utm_content=readme).

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
