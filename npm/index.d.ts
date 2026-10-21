declare module '@apiverve/vindecoder' {
  export interface vindecoderOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface vindecoderResponse {
    status: string;
    error: string | null;
    data: VINDecoderData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface VINDecoderData {
      vin:               null | string;
      valid:             boolean | null;
      decoded:           boolean | null;
      vehicleDescriptor: null | string;
      make:              null | string;
      model:             null | string;
      year:              number | null;
      trim:              null | string;
      trim2:             null;
      series:            null;
      series2:           null;
      manufacturer:      null | string;
      vehicleType:       null | string;
      bodyClass:         null | string;
      plant:             Plant;
      engine:            Engine;
      features:          Features;
      validation:        Validation;
      recalls:           Recalls;
      safetyRating:      SafetyRating;
  }
  
  interface Engine {
      displacementL:           null | string;
      displacementCc:          null | string;
      engineNumberOfCylinders: null | string;
      engineModel:             null | string;
      engineConfiguration:     null | string;
      engineBrakeHPFrom:       null | string;
      displacementCi:          null | string;
      fuelTypePrimary:         null | string;
      valveTrainDesign:        null | string;
  }
  
  interface Features {
      passiveSafetySystem: PassiveSafetySystem;
      exterior:            Exterior;
      mechanical:          Mechanical;
  }
  
  interface Exterior {
      grossVehicleWeightRatingFrom: null | string;
      grossVehicleWeightRatingTo:   null | string;
      doors:                        null | string;
  }
  
  interface Mechanical {
      transmissionStyle:  null | string;
      transmissionSpeeds: null | string;
  }
  
  interface PassiveSafetySystem {
      otherRestraintSystemInfo: null | string;
      seatBeltType:             null | string;
      sideAirBagLocations:      null | string;
      curtainAirBagLocations:   null | string;
      frontAirBagLocations:     null | string;
  }
  
  interface Plant {
      state:   null | string;
      country: null | string;
      city:    null | string;
  }
  
  interface Recalls {
      count:            number | null;
      doNotDrive:       boolean | null;
      parkOutside:      boolean | null;
      bySeverity:       BySeverity;
      latestReportedOn: Date | null;
      items:            Item[];
  }
  
  interface BySeverity {
      critical: number | null;
      high:     number | null;
      medium:   number | null;
      low:      number | null;
  }
  
  interface Item {
      id:                   null | string;
      manufacturerRecallID: null | string;
      manufacturer:         null | string;
      reportedOn:           Date | null;
      ownersNotifiedOn:     Date | null;
      initiatedBy:          null | string;
      components:           Component[];
      summary:              null | string;
      consequence:          null | string;
      hazards:              (null | string)[];
      doNotDrive:           boolean | null;
      parkOutside:          boolean | null;
      remedy:               Remedy;
      unitsAffected:        number | null;
      manufactured:         Manufactured;
      scope:                Scope;
      url:                  null | string;
      severity:             null | string;
      match:                null | string;
      listedAs:             null | string;
  }
  
  interface Component {
      system: null | string;
      detail: null | string;
  }
  
  interface Manufactured {
      from: Date | null;
      to:   Date | null;
  }
  
  interface Remedy {
      description:  null | string;
      status:       null | string;
      overTheAir:   boolean | null;
      freeOfCharge: boolean | null;
  }
  
  interface Scope {
      makes:      number | null;
      models:     number | null;
      modelYears: ModelYears;
  }
  
  interface ModelYears {
      from: number | null;
      to:   number | null;
  }
  
  interface SafetyRating {
      testedVehicle:  null | string;
      match:          null | string;
      variantsTested: number | null;
      overall:        null;
      frontal:        Frontal;
      side:           Side;
      rollover:       Rollover;
      driverAssist:   DriverAssist;
  }
  
  interface DriverAssist {
      electronicStabilityControl: null | string;
      forwardCollisionWarning:    null | string;
      laneDepartureWarning:       null | string;
  }
  
  interface Frontal {
      overall:   null;
      driver:    number | null;
      passenger: number | null;
  }
  
  interface Rollover {
      rating:      number | null;
      riskPercent: null;
      tipped:      null;
  }
  
  interface Side {
      overall:   null;
      driver:    null;
      passenger: null;
      barrier:   null;
      pole:      null;
      frontSeat: null;
      rearSeat:  null;
  }
  
  interface Validation {
      errorText:  null | string;
      errorCode:  null | string;
      errorCodes: (null | string)[];
  }

  export default class vindecoderWrapper {
    constructor(options: vindecoderOptions);

    execute(callback: (error: any, data: vindecoderResponse | null) => void): Promise<vindecoderResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: vindecoderResponse | null) => void): Promise<vindecoderResponse>;
    execute(query?: Record<string, any>): Promise<vindecoderResponse>;
  }
}
