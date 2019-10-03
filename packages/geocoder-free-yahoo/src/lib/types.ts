export type LatLngArray = [number, number];
export interface LatLngObject {
  lat: number;
  lng: number;
}

type ResultInfo = {
  Count: number;
  Total: number;
  Start: number;
  Status: number;
  Description: string;
  Copyright: string;
  Latency: number;
};

type FeatureElem = {
  Id: string;
  Gid: string;
  Name: string;
  Geometry: {
    Type: string;
    Coordinates: string;
    BoundingBox: string;
  };
  Category: Array<any>;
  Description: string;
  Style: Array<any>;
  Property: {
    Uid: string;
    CassetteId: string;
    Yomi: string;
    Country: object;
    Address: string;
    GovernmentCode: string;
    AddressMatchingLevel: string;
    AddressType: string;
  };
};

export interface GeoInfo {
  ResultInfo: ResultInfo;
  Feature?: FeatureElem[];
}
