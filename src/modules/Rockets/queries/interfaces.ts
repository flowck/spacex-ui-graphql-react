export interface RocketsState {
  rockets: Rocket[] | null;
  activeRocket: Rocket | null;
}

export interface Rocket {
  active: boolean;
  boosters: number;
  company: string;
  cost_per_launch: number;
  country: string;
  description: string;
  id: string;
  name: string;
  type: string;
  diameter: Diameter;
  engines: Engines;
  first_flight: string;
  first_stage: FirstStage;
  height: Diameter;
  landing_legs: LandingLegs;
  mass: Mass;
  success_rate_pct: number;
  wikipedia: string;
  stages: number;
  second_stage: SecondStage;
  payload_weights: PayloadWeight[];
}

export interface Diameter {
  feet: number;
  meters: number;
}

export interface Engines {
  engine_loss_max: string;
  layout: string;
  number: number;
  propellant_1: string;
  propellant_2: string;
  thrust_sea_level: Thrust;
  thrust_to_weight: number;
  thrust_vacuum: Thrust;
  type: string;
  version: string;
}

export interface Thrust {
  kN: number;
  lbf: number;
}

export interface FirstStage {
  burn_time_sec: number;
  engines: number;
  fuel_amount_tons: number;
  reusable: boolean;
  thrust_sea_level: Thrust;
  thrust_vacuum: Thrust;
}

export interface LandingLegs {
  material: null;
  number: number;
}

export interface Mass {
  kg: number;
  lb: number;
}

export interface PayloadWeight {
  id: string;
  kg: number;
  lb: number;
  name: string;
}

export interface SecondStage {
  burn_time_sec: number;
  engines: number;
  fuel_amount_tons: number;
  payloads: Payloads;
  thrust: Thrust;
}

export interface Payloads {
  composite_fairing: CompositeFairing;
  option_1: string;
}

export interface CompositeFairing {
  diameter: Diameter;
  height: Diameter;
}

export interface Launch {
  id: string;
  mission_name: string;
  launch_date_utc: Date;
  launch_site: {
    site_name: string;
  };
  launch_success: boolean;
}
