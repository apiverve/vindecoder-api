using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.VINDecoder
{
    /// <summary>
    /// Query options for the VIN Decoder API
    /// </summary>
    public class VINDecoderQueryOptions
    {
        /// <summary>
        /// The Vehicle Identification Number to decode. Partial VINs are accepted and decode as far as the available characters allow.
        /// </summary>
        [JsonProperty("vin")]
        public string Vin { get; set; }

        /// <summary>
        /// Add the safety recalls NHTSA has issued for this vehicle's make, model and year.
        /// </summary>
        [JsonProperty("recalls")]
        public bool? Recalls { get; set; }

        /// <summary>
        /// Add the NHTSA 5-star crash-test rating for the closest tested version of this vehicle.
        /// </summary>
        [JsonProperty("safetyRating")]
        public bool? SafetyRating { get; set; }
    }
}
