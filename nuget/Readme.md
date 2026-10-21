VIN Decoder API
============

VIN Decoder turns a 17-character Vehicle Identification Number into the vehicle it identifies. Returns make, model, year, trim, body class and manufacturer, plus engine specifications, plant of manufacture, and the safety equipment fitted to that specific build. Optionally adds every safety recall issued for that vehicle and its NHTSA 5-star crash-test rating.


[![NuGet version](https://img.shields.io/nuget/v/APIVerve.API.VINDecoder.svg)](https://www.nuget.org/packages/APIVerve.API.VINDecoder)

This is a .NET wrapper for the [VIN Decoder API](https://apiverve.com/marketplace/vindecoder?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Installation

Using the .NET CLI:
```
dotnet add package APIVerve.API.VINDecoder
```

Using the Package Manager:
```
nuget install APIVerve.API.VINDecoder
```

Using the Package Manager Console:
```
Install-Package APIVerve.API.VINDecoder
```

From within Visual Studio:

1. Open the Solution Explorer
2. Right-click on a project within your solution
3. Click on Manage NuGet Packages
4. Click on the Browse tab and search for "APIVerve.API.VINDecoder"
5. Click on the APIVerve.API.VINDecoder package, select the appropriate version in the right-tab and click Install

---

## Configuration

Before using the VIN Decoder API client, you have to setup your account and obtain your API Key.
You can get it by signing up at [https://apiverve.com](https://apiverve.com?utm_source=nuget&utm_medium=referral&utm_content=readme)

---

## Quick Start

Here's a simple example to get you started quickly:

```csharp
using System;
using APIVerve.API.VINDecoder;

class Program
{
    static async Task Main(string[] args)
    {
        // Initialize the API client
        var apiClient = new VINDecoderAPIClient("[YOUR_API_KEY]");

        var queryOptions = new VINDecoderQueryOptions {
            Vin = "1HGCM82633A004352",
            Recalls = true,
            SafetyRating = true
        };

        // Make the API call
        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                // Access response data using the strongly-typed ResponseObj properties
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Exception: {ex.Message}");
        }
    }
}
```

---

## Usage

The VIN Decoder API documentation is found here: [https://docs.apiverve.com/ref/vindecoder](https://docs.apiverve.com/ref/vindecoder?utm_source=nuget&utm_medium=referral&utm_content=readme).
You can find parameters, example responses, and status codes documented here.

### Setup

###### Authentication
VIN Decoder API uses API Key-based authentication. When you create an instance of the API client, you can pass your API Key as a parameter.

```csharp
// Create an instance of the API client
var apiClient = new VINDecoderAPIClient("[YOUR_API_KEY]");
```

---

## Usage Examples

### Basic Usage (Async/Await Pattern - Recommended)

The modern async/await pattern provides the best performance and code readability:

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.VINDecoder;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new VINDecoderAPIClient("[YOUR_API_KEY]");

        var queryOptions = new VINDecoderQueryOptions {
            Vin = "1HGCM82633A004352",
            Recalls = true,
            SafetyRating = true
        };

        var response = await apiClient.ExecuteAsync(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

### Synchronous Usage

If you need to use synchronous code, you can use the `Execute` method:

```csharp
using System;
using APIVerve.API.VINDecoder;

public class Example
{
    public static void Main(string[] args)
    {
        var apiClient = new VINDecoderAPIClient("[YOUR_API_KEY]");

        var queryOptions = new VINDecoderQueryOptions {
            Vin = "1HGCM82633A004352",
            Recalls = true,
            SafetyRating = true
        };

        var response = apiClient.Execute(queryOptions);

        if (response.Error != null)
        {
            Console.WriteLine($"Error: {response.Error}");
        }
        else
        {
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
    }
}
```

---

## Error Handling

The API client provides comprehensive error handling. Here are some examples:

### Handling API Errors

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.VINDecoder;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new VINDecoderAPIClient("[YOUR_API_KEY]");

        var queryOptions = new VINDecoderQueryOptions {
            Vin = "1HGCM82633A004352",
            Recalls = true,
            SafetyRating = true
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            // Check for API-level errors
            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
                Console.WriteLine($"Status: {response.Status}");
                return;
            }

            // Success - use the data
            Console.WriteLine("Request successful!");
            Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
        }
        catch (ArgumentException ex)
        {
            // Invalid API key or parameters
            Console.WriteLine($"Invalid argument: {ex.Message}");
        }
        catch (System.Net.Http.HttpRequestException ex)
        {
            // Network or HTTP errors
            Console.WriteLine($"Network error: {ex.Message}");
        }
        catch (Exception ex)
        {
            // Other errors
            Console.WriteLine($"Unexpected error: {ex.Message}");
        }
    }
}
```

### Comprehensive Error Handling with Retry Logic

```csharp
using System;
using System.Threading.Tasks;
using APIVerve.API.VINDecoder;

public class Example
{
    public static async Task Main(string[] args)
    {
        var apiClient = new VINDecoderAPIClient("[YOUR_API_KEY]");

        // Configure retry behavior (max 3 retries)
        apiClient.SetMaxRetries(3);        // Retry up to 3 times (default: 0, max: 3)
        apiClient.SetRetryDelay(2000);     // Wait 2 seconds between retries

        var queryOptions = new VINDecoderQueryOptions {
            Vin = "1HGCM82633A004352",
            Recalls = true,
            SafetyRating = true
        };

        try
        {
            var response = await apiClient.ExecuteAsync(queryOptions);

            if (response.Error != null)
            {
                Console.WriteLine($"API Error: {response.Error}");
            }
            else
            {
                Console.WriteLine("Success!");
                Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
            }
        }
        catch (Exception ex)
        {
            Console.WriteLine($"Failed after retries: {ex.Message}");
        }
    }
}
```

---

## Advanced Features

### Custom Headers

Add custom headers to your requests:

```csharp
var apiClient = new VINDecoderAPIClient("[YOUR_API_KEY]");

// Add custom headers
apiClient.AddCustomHeader("X-Custom-Header", "custom-value");
apiClient.AddCustomHeader("X-Request-ID", Guid.NewGuid().ToString());

var queryOptions = new VINDecoderQueryOptions {
    Vin = "1HGCM82633A004352",
    Recalls = true,
    SafetyRating = true
};

var response = await apiClient.ExecuteAsync(queryOptions);

// Remove a header
apiClient.RemoveCustomHeader("X-Custom-Header");

// Clear all custom headers
apiClient.ClearCustomHeaders();
```

### Request Logging

Enable logging for debugging:

```csharp
var apiClient = new VINDecoderAPIClient("[YOUR_API_KEY]", isDebug: true);

// Or use a custom logger
apiClient.SetLogger(message =>
{
    Console.WriteLine($"[LOG] {DateTime.Now:yyyy-MM-dd HH:mm:ss} - {message}");
});

var queryOptions = new VINDecoderQueryOptions {
    Vin = "1HGCM82633A004352",
    Recalls = true,
    SafetyRating = true
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Retry Configuration

Customize retry behavior for failed requests:

```csharp
var apiClient = new VINDecoderAPIClient("[YOUR_API_KEY]");

// Set retry options
apiClient.SetMaxRetries(3);           // Retry up to 3 times (default: 0, max: 3)
apiClient.SetRetryDelay(1500);        // Wait 1.5 seconds between retries (default: 1000ms)

var queryOptions = new VINDecoderQueryOptions {
    Vin = "1HGCM82633A004352",
    Recalls = true,
    SafetyRating = true
};

var response = await apiClient.ExecuteAsync(queryOptions);
```

### Dispose Pattern

The API client implements `IDisposable` for proper resource cleanup:

```csharp
var queryOptions = new VINDecoderQueryOptions {
    Vin = "1HGCM82633A004352",
    Recalls = true,
    SafetyRating = true
};

using (var apiClient = new VINDecoderAPIClient("[YOUR_API_KEY]"))
{
    var response = await apiClient.ExecuteAsync(queryOptions);
    Console.WriteLine(Newtonsoft.Json.JsonConvert.SerializeObject(response, Newtonsoft.Json.Formatting.Indented));
}
// HttpClient is automatically disposed here
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

Need any assistance? [Get in touch with Customer Support](https://apiverve.com/contact?utm_source=nuget&utm_medium=referral&utm_content=readme).

---

## Updates
Stay up to date by following [@apiverveHQ](https://twitter.com/apiverveHQ) on Twitter.

---

## Legal

All usage of the APIVerve website, API, and services is subject to the [APIVerve Terms of Service](https://apiverve.com/terms?utm_source=nuget&utm_medium=referral&utm_content=readme) and all legal documents and agreements.

---

## License
Licensed under the MIT License (MIT)

Copyright (&copy;) 2026 APIVerve, and EvlarSoft LLC

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
